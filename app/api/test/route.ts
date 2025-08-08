import { NextResponse } from 'next/server';

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({
    message: 'API fonctionne',
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyLength: process.env.RESEND_API_KEY?.length || 0,
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
}
