import { FC, ReactNode } from "react"
import { Button } from "./ui/button"
import { signIn } from "next-auth/react";
import Image from "next/image";

interface AzureSignInButttonProps {
    children: ReactNode;
}

const AzureSignInButtton: FC<AzureSignInButttonProps> = ({ children }) => {
  const loginWithAzure = () =>
    signIn("azure", { callbackUrl: "http://localhost:3000/overview" });

  return (
    <Button
      className="bg m-1 flex w-auto items-center gap-4 bg-wwlgreen font-bold text-wwblue hover:bg-wwgreen hover:text-wwlblue   md:text-xs lg:text-md 2xl:text-base"
      onClick={loginWithAzure}
      id="smaller-font"
    >
      {children}
      <Image
        src="/icons/azure-icon.png"
        alt="Azure Icon"
        width={30}
        height={30}
        className=""
      />
    </Button>
  );
};

export default AzureSignInButtton;