'use client';

import { useSession } from 'next-auth/react';

const LoginPage = () => {
  const { data } = useSession();
  console.log(data);
  return <div className="font-bold text-center text-2xl">로그인 페이지</div>;
};

export default LoginPage;
