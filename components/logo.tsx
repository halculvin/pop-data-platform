import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="justify start">
      <div className="items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image
          src="/logo.svg"
          alt="Logo"
          height={45}
          width={45}
          className=""
        />
      </div>
    </Link>
  );
};