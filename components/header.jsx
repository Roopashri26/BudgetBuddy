"use client";

import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PlusCircle } from "lucide-react";

const Header = () => (
  <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center p-4 sm:p-6">
    {/* Left Section: Logo + App Name */}
    <div className="flex items-center gap-3">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="BudgetBuddy logo"
          width={80}
          height={80}
          className="rounded-full object-contain"
          priority
        />
      </Link>
      <div className="text-2xl font-bold text-[#6c47ff]">BudgetBuddy</div>
    </div>

    {/* Right Section: Auth Buttons or User Info */}
    <div className="flex items-center gap-4">
      {/* When signed out */}
      <SignedOut>
        <SignInButton>
          <button className="bg-white border border-gray-300 rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-gray-100 transition">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer hover:bg-purple-700 transition">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>

      {/* When signed in */}
      <SignedIn>
        {/* Navigation Links */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link href="/dashboard">
            <Button variant="outline" className="flex items-center gap-2">
              <LayoutDashboard size={18} />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>
          </Link>

          <Link href="/transaction/create">
            <Button variant="outline" className="flex items-center gap-2">
              <PlusCircle size={18} />
              <span className="hidden sm:inline">New Transaction</span>
            </Button>
          </Link>
        </nav>

        {/* User Avatar */}
        <div className="flex items-center gap-2 sm:gap-3">
          <p className="hidden sm:block font-medium text-gray-700">Welcome!</p>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10", // 👈 Resizes the avatar box to 40×40px
              },
            }}
          />
        </div>
      </SignedIn>
    </div>
  </header>
);

export default Header;
