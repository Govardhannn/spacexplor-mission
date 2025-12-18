"use client";

import Image from "next/image";
import heroImage from "@/assets/heroImage.jpeg";
import { motion } from "framer-motion";
import { MoveRight, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export default function Hero() {
  const router = useRouter();

  return (
    <div className="relative h-screen">
      {/* Background */}
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        priority
        className="-z-10 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* NAV + HERO CONTENT */}
      <motion.div
        className="relative z-10 mx-auto flex max-w-7xl items-center justify-between p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-2xl font-bold text-white cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Rocket className="h-8 w-8" />
          Space-Mission
        </motion.div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-16">
          <motion.div variants={itemVariants}>
            <Link
              href="/missions"
              className="text-xl text-white hover:text-gray-300"
            >
              Missions
            </Link>
          </motion.div>

          {/* For Fav */}
          <motion.div variants={itemVariants}>
            <Link
              href="/favorites"
              className="text-xl text-white hover:text-gray-300"
            >
              Favorites
            </Link>
          </motion.div>
          {/* For About */}
          <motion.div variants={itemVariants}>
            <Link
              href="/about"
              className="text-xl text-white hover:text-gray-300"
            >
              About
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <main className="relative z-10 flex flex-grow flex-col items-center justify-center text-center">
        <motion.div
          className="flex flex-col items-center gap-6 px-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold tracking-wider text-white md:text-6xl mt-[30%]" // updown abgesment
            variants={itemVariants}
          >
            SPACE MISSIONS EXPLORER
          </motion.h1>
          <motion.p
            className="wax-w-xl text-base text-gray-200 md:text-lg 
           "
            variants={itemVariants}
          >
            Explore Humanity's Greatest Space Mission's
          </motion.p>
          <motion.p
            className="wax-w-xl text-base text-gray-200 md:text-lg 
           "
            variants={itemVariants}
          >
            Search, browse, and learn about historic and upcoming space launches
            worldwide.
          </motion.p>
          <motion.button
            className="mt-6 flex items-center gap-2 rounded-full bg-white px-8 py-3 - font-semibold
- 
"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/missions")}
          >
            Explore Missions <MoveRight />
          </motion.button>
        </motion.div>
      </main>
    </div>
  );
}
