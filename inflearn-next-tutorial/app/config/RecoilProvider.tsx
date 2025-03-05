"use client";

import { RecoilRoot } from "recoil";

// 클라이언트 라이브러리는 page같은 서버 컴포넌트에서 사용할 수 없다.
export default function RecoilProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
