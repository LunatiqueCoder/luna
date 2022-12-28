import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  const pathname = request.nextUrl.pathname;

  if (pathname.endsWith('/linking') || pathname === '/') {
    const colorSheme =
      request.headers.get('sec-ch-prefers-color-scheme') || 'dark';

    const response = NextResponse.rewrite(
      `${request.nextUrl.origin}/${colorSheme}${pathname}`,
    );

    return response;
  }

  return NextResponse.rewrite(`${request.nextUrl.origin}/404`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};

export default middleware;
