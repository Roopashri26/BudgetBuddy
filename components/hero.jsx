"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-20 px-4 pt-34">
      <div className="container mx-auto text-center">

        <h1 className="text-5xl md:text-7xl lg:text-[60px] font-bold pb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Keep your finances fine,<br />because expense is expensive.
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Manage your money smarter with BudgetBuddy.
          AI-driven insights help you plan, save, and make confident financial decisions.
        </p>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-6">Get Started</Button>
          </Link>

          <Button size="lg" variant="outline" className="px-6">
            Watch Demo
          </Button>
        </div>

        <div className="hero-image-wrapper mt-10">
          <div ref={imageRef} className="hero-image transition-all duration-500">
            <Image
              src="/banner.jpg"
              width={1000}
              height={600}
              alt="BudgetBuddy Dashboard"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
