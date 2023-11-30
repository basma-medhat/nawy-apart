"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  router.push("/apartments", { scroll: false });
  return <div></div>;
}
