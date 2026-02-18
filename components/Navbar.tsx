import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LogInIcon } from "lucide-react";

const Navbar = () => {
  const navLink = [
    { name: "Home", hrefs: "/" },
    { name: "Dashboard", hrefs: "/" },
  ];

  return (
    <nav className="py-4 px-6 items-center justify-between flex mx-auto">
      <div className=" flex items-center gap-6">
        <Link href={"/"}>
          <h1 className="text-3xl items-center font-extrabold tracking-tighter ">
            Byte-<span className="text-blue-500">Journals</span>{" "}
          </h1>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          {navLink.map((link) => (
            <Link
              key={link.name}
              href={link.hrefs}
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* user buttons */}

      <div className="flex items-center gap-4">
        <UserButton />
        <SignedIn>
          <SignOutButton>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <LogInIcon className="h-4 w-4" />
              Logout
            </Button>
          </SignOutButton>
        </SignedIn>

        {/*  */}

        <SignedOut>
          <SignInButton mode="modal">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              Login
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
