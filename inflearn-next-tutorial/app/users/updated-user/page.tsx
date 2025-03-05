"use client";

import { userState } from "@/app/recoil/atoms";
import { useRecoilValue } from "recoil";

export default function UpdateUserPage() {
  const user = useRecoilValue(userState);

  return (
    <div>
      <h1>UpdateUserPage</h1>
      <div>UpdateName: {user.name}</div>
      <div>UpdateEmail: {user.email}</div>
    </div>
  );
}
