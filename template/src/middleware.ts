import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.endsWith('/linking') || pathname === '/') {
    const colorSheme =
      request.headers.get('sec-ch-prefers-color-scheme') || 'dark';

    const response = NextResponse.rewrite(
      `${request.nextUrl.origin}/${colorSheme}${pathname}`,
    );

    return response;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};

export default middleware;
