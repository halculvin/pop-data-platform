import Link from "next/link";
import Image from "next/image";

export const wwLogo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2">
        <Image
          src="/wwind_logo_standard-white-web.svg"
          alt="Whirlwind Technologies Logo"
          height={96}
          width={96}
        />
      </div>
    </Link>
  );
};