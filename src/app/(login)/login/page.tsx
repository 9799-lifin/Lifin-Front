/** @jsxImportSource @emotion/react */
'use client';

import { css } from '@emotion/react';
import { useSession } from 'next-auth/react';

const LoginPage = () => {
  const { data } = useSession();
  console.log(data);
  return <div css={loginStyle}></div>;
};

export default LoginPage;

const loginStyle = css`
  color: black;
  height: 100vh;
`;
