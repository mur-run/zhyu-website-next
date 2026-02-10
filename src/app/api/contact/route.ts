import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Implement email sending
    // Options:
    // 1. Resend (resend.com)
    // 2. SendGrid
    // 3. Nodemailer with SMTP
    // 4. Web3Forms API
    
    // For now, just log and return success
    console.log('Contact form submission:', { name, email, subject, message });

    // Example with Web3Forms (uncomment and add API key):
    /*
    const web3Response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name,
        email,
        subject,
        message,
      }),
    });

    if (!web3Response.ok) {
      throw new Error('Failed to send email');
    }
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
