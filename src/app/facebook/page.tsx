"use client";

// chèn file css từ folder styles
import x from "@/styles/app.module.css";
import y from "@/styles/app2.module.css";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const Facebook = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <>
      <div className={x["red"]}>FACEBOOK</div>
      <div className={y["red"]}>META</div>
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
