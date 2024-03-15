"use client";

import { useRouter } from "next/navigation";
const Facebook = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <>
      <h1>FACEBOOK</h1>

      <button
        onClick={() => {
          handleBack();
        }}
      >
        Back home
      </button>
    </>
  );
};

export default Facebook;
