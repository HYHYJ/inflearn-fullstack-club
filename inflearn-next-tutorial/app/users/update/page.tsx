"use client";

import { userState } from "@/app/recoil/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function UserUpdatePage() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <h1>Update User Page</h1>
      <input
        type="email"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser((pre) => ({ ...pre, email: e.target.value }))}
      />
      <input
        type="name"
        placeholder="name"
        value={user.name}
        onChange={(e) => setUser((pre) => ({ ...pre, name: e.target.value }))}
      />
      <Link href="/users/updated-user">업데이트 버튼</Link>
    </div>
  );
}
