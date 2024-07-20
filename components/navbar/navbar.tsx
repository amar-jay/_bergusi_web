import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import { NavbarUserLinks } from "@/components/navbar/navbar-user-links";
import { buttonVariants } from "@/components/ui/button";
import { TextIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const NavBar: FC = () => {
  return (
    <>
      <div className="animate-in fade-in w-full">
        <nav className="container px-6 md:px-8 py-4">
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center">
                <span className="text-xl font-semibold tracking-tighter text-slate-800 mr-6">
                  Bergusi
                </span>
              </div>
            </Link>
            <div className="hidden md:flex justify-between grow">
              <div>
                <Link href="/about-us" className={buttonVariants({ variant: "link" })}>
                   About us
                </Link>

                <Link href="#" className={buttonVariants({ variant: "link" })}>
                  Download App 
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <NavbarUserLinks />
              </div>
            </div>
            <div className="grow md:hidden flex justify-end">
              <NavbarMobile />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
