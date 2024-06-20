import { Navbar } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Navbar className="h-[7dvh] border-t border-divider">
        <div className="flex w-full flex-col items-center justify-center">
          <Link href="https://randomapi.com" className="text-center text-blue-500">
            Powered by RandomAPI
          </Link>

          <Link href="https://randomuser.me" className="text-center text-blue-500">
            https://randomuser.me
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default Footer;
