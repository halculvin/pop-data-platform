import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface GoogleSignInButttonProps {
  children: ReactNode;
}

const GoogleSignInButtton: FC<GoogleSignInButttonProps> = ({ children }) => {
  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: "http://localhost:3000/overview" });

  return (
    <Button
      className="bg m-1 flex w-auto items-center gap-4 bg-wwlgreen text-xs font-bold text-wwblue  hover:bg-wwgreen  hover:text-wwlblue md:text-sm lg:text-base 2xl:text-base"
      onClick={loginWithGoogle}
      id="smaller-font"
    >
      {children}
      <Image
        src="/icons/google-icon.png"
        alt="Google Icon"
        width={30}
        height={30}
        className=""
      />
    </Button>
  );
};

export default GoogleSignInButtton;
