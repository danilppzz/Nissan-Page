"use client";
import Nissan from "@/components/nissan";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white h-screen mx-[200px]">
      <div className="container flex">
        <div className="w-1/2 ">
          <div className="mt-[200px] ml-32">
            <motion.h1
              className="font-bold text-[50px] font-[NissanBrand-Bold]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              Nissan
            </motion.h1>
            <p>At Nissan Motorsport (NISMO) it’s all about innovation and performance.</p>
            <div className="gap-4 flex mt-10">
              <Link href="/news">
                <motion.button
                  className="px-4 py-1 border-[1px] border-red-500 transition duration-150"
                  whileHover={{ scale: 1.2, backgroundColor: "#ef4444" }}
                  transition={{
                    duration: 0.1,
                  }}
                >
                  NEWS
                </motion.button>
              </Link>
              <Link href="/news">
                <motion.button
                  className="px-4 py-1 border-[1px] border-red-500 transition duration-150"
                  whileHover={{ scale: 1.2, backgroundColor: "#ef4444" }}
                  transition={{
                    duration: 0.1,
                  }}
                >
                  SHOP
                </motion.button>
              </Link>
            </div>
            <div className="flex-grow border-t my-20 border-gray-300 mx-4"></div>
            <ul className="mt-10 space-y-14">
              <li>
                <h1 className="text-[24px] font-semibold">Nismo</h1>
                <p>
                  Our passion for on-track success - coupled with our knowledge and engineering
                  expertise - combine to provide Nissan drivers on the road with exhilarating
                  excitement
                </p>
              </li>
              <li>
                <h1 className="text-[24px] font-semibold">Motorsport</h1>
                <div className="ml-8 mt-4">
                  <p>
                    <span className="text-red-500 mr-8">01</span>{" "}
                    <Link
                      className="underline-offset-2 transition duration-100 hover:underline"
                      href={"/supergt"}
                    >
                      FORMULA<span className="text-red-500 mx-2">E</span>
                    </Link>
                  </p>
                  <p>
                    <span className="text-red-500 mr-8">02</span>{" "}
                    <Link
                      className="underline-offset-2 transition duration-100 hover:underline"
                      href={"/supergt"}
                    >
                      SUPER<span className="text-red-500 mx-2">GT</span>
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 ml-4 h-screen">
          <Nissan></Nissan>
        </div>
      </div>
    </main>
  );
}
