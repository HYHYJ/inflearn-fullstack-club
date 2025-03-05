"use client";

import { QueryClient, QueryClientProvider } from "react-query";

// 어디에서든 클라이언트 사용가능
//예)  queryClient.invalidateQueries(["todos"]);
export const queryClient = new QueryClient();

export default function ReactQueryProvider({ children }) {
  // 클라이언트에서 모든 값을 관리하는 가장큰 스토어

  return (
    // client 를 모든 리큐ㅔ스트 리스펀스를 저장하게 된다.
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
