"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();

  React.useEffect(() => {
    router.replace("/overview");
  }, []);

  return <div></div>;
}
