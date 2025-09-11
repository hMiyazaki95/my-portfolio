import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (process.env.DEPLOY_TARGET === 'gh-pages') return NextResponse.next();
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/my-portfolio', req.url));
  }
  return NextResponse.next();
}
