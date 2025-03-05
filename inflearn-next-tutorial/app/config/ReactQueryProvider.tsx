"use client";

import { QueryClient, QueryClientProvider } from "react-query";

export default function ReactQueryProvider({ children }) {
  // 클라이언트에서 모든 값을 관리하는 가장큰 스토어
  const queryClient = new QueryClient();

  return (
    // client 를 모든 리큐ㅔ스트 리스펀스를 저장하게 된다.
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
