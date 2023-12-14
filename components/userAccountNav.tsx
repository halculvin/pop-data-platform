"use client";

import { Button } from "./ui/button";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const UserAccountNav = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div className="flex gap-5">
        <Image
          src={session?.user?.image ?? "/icons/circle-user.png"}
          width={40}
          height={40}
          className="rounded-full"
          alt="No User Pic"
        />
        <Button
          variant="destructive"
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: `${window.location.origin}/login`,
            })
          }
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (    
      <Link href="/login" className="text-2xl md:text-base text-wwblue ml-5">
        Sign In
      </Link>    
  );
};

export default UserAccountNav;
