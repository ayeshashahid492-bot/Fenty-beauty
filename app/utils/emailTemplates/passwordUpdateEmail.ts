export function passwordUpdateEmail(name: string, timestamp: string) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
      <h2 style="color: #333; text-align: center;">Password Changed Successfully</h2>
      <p style="color: #555;">Hi ${name},</p>
      <p style="color: #555;">
        Your password for Fenty Beauty was successfully updated on <strong>${timestamp}</strong>.
      </p>
      <p style="color: #e53e3e; font-weight: bold; background-color: #fff5f5; padding: 10px; border-left: 4px solid #e53e3e;">
        If this was not you, please secure your account immediately by contacting support.
      </p>
      <hr style="border: 0; border-top: 1px solid #eaeaea; margin: 20px 0;" />
      <p style="color: #888; font-size: 14px; text-align: center;">
        Best regards,<br>The Fenty Beauty Team
      </p>
    </div>
  `;
}
