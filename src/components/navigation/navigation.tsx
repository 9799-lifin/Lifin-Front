/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const path = usePathname();
  return (
    <div css={navStyle}>
      <Link href={'/'}>Main {path === '/' ? '🔥' : ''}</Link>
      <Link href={'/maps'}>Kakao Map {path === '/maps' ? '🔥' : ''}</Link>
      <Link href={'/login'}>Login{path === '/login' ? '🔥' : ''}</Link>
    </div>
  );
};

export default Navigation;
const navStyle = css`
  margin: 30px 0px;
  justify-content: center;
  display: flex;
  gap: 20px;
  font-size: 24px;
  font-weight: bold;
`;
