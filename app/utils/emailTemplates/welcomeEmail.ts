export function welcomeEmail(name: string) {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #fff8f8; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; padding: 30px; border: 1px solid #f3d6d6;">
        
        <h1 style="color: #d63384; text-align: center;">
          Welcome to Fenty Beauty!
        </h1>

        <p style="font-size: 18px; color: #333;">
          Hi ${name},
        </p>

        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          Thank you for creating an account with Fenty Beauty. You can now explore our collection of beauty products, including lipsticks, foundations, glosses, and even create your own custom shades.
        </p>

        <p style="font-size: 16px; color: #555; line-height: 1.6;">
          We are excited to help you discover products that match your unique style.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="http://localhost:3000/products"
             style="background-color: #d63384; color: white; padding: 14px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Explore Our Products
          </a>
        </div>

        <hr style="margin: 30px 0;" />

        <p style="font-size: 14px; color: #777; text-align: center;">
          Fenty Beauty<br/>
          Beauty Products & Custom Shades<br/>
          support@fentybeauty.com
        </p>
      </div>
    </div>
  `;
}