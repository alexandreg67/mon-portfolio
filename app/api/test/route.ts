import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'API fonctionne',
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyLength: process.env.RESEND_API_KEY?.length || 0,
    nodeEnv: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
}
