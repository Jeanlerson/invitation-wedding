"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Countdown() {
  // 🕒 Data do evento (altere conforme desejar)
  const targetDate = new Date("2025-12-20T15:00:00-03:00").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return (
      <Card className="w-full max-w-md mx-auto text-center shadow-lg bg-gradient-to-b from-pink-50 to-white border-pink-200">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-[#5CADFF]">
            💍 O grande dia chegou!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-lg">
            Que comece a celebração! 🎉
          </p>
        </CardContent>
      </Card>
    );
  }

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <Card className="text-center bg-transparent border-0">
      <CardHeader>
        <CardTitle className="text-4xl font-great-vibes text-[#5CADFF]">
          Contagem Regressiva
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center gap-4 sm:gap-6">
          {[
            { label: "Dias", value: days },
            { label: "Horas", value: hours },
            { label: "Min", value: minutes },
            { label: "Seg", value: seconds },
          ].map(({ label, value }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl font-poppins text-white transition-all duration-500">
                {value.toString().padStart(2, "0")}
              </span>
              <span className="font-poppins text-sm text-gray-600 mt-1 tracking-wider uppercase">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
