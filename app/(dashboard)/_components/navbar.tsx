import { Logo } from "@/components/logo";
import UserAccountNav from "@/components/userAccountNav";

export const NavBar = () => {
  return (
    <nav className="sticky right-0 top-0 w-full bg-wwlgreen md:max-h-20">
      <div className="flex mx-auto justify-between pt-2 pb-4 px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div className="justify-start">
          <Logo />
        </div>
        <div className="justify-end">
          <UserAccountNav />
        </div>
      </div>
    </nav>
  );
};
