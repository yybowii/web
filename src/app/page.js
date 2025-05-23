"use client";

import Image from "next/image";
const avatar = "/heart.png";
import { useState } from "react";
import { motion } from "framer-motion"; // 加這行！

export default function Home() {
  const [heart, setHeart] = useState(0);

  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="w-full h-full flex flex-col justify-center items-center bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-10">
      </div>

      {/* 動畫愛心區塊 */}
      <motion.div
        className="absolute bottom-6 right-6 cursor-pointer flex flex-col justify-center items-center"
        onClick={() => setHeart(heart + 1)}
        whileTap={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <img
              src="/heart.png"
              alt="heart" className="w-[60px]" />
            <div className="text-xl mt-2">{heart}</div>
      </motion.div>
    </div>
  );
}
