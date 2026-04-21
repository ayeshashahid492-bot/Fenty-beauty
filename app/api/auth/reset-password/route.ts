import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/prisma/client';
import { Resend } from "resend";
import { passwordUpdateEmail } from "@/app/utils/emailTemplates/passwordUpdateEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, oldPassword, newPassword } = body;

    // Validate required fields
    if (!email || !oldPassword || !newPassword) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      // Return generic error for security
      return NextResponse.json(
        { message: 'Invalid credentials or user not found' },
        { status: 400 }
      );
    }

    // Verify the old password
    if (!user.password) {
       return NextResponse.json(
        { message: 'This account uses OAuth to sign in.' },
        { status: 400 }
      );
    }
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid old password' },
        { status: 400 }
      );
    }

    // Validate new password string format
    if (newPassword.length < 8) {
       return NextResponse.json(
        { message: 'New password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    await prisma.user.update({
      where: { email: email.toLowerCase() },
      data: { password: hashedNewPassword },
    });

    // Send notification email with Resend
    const timestamp = new Date().toLocaleString();
    try {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: user.email,
            subject: "Fenty Beauty - Password Updated",
            html: passwordUpdateEmail(user.firstName, timestamp),
        });
    } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // We still return 200 because the password was successfully reset
    }

    return NextResponse.json(
      { message: 'Password updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json(
      { message: 'An error occurred during password reset' },
      { status: 500 }
    );
  }
}
