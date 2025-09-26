import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen min-w-screen bg-[#003366]">
      <div className="bg-[#000D33] min-w-[1140] min-h-screen p-5">
        <h1 className="font-great-vibes text-8xl text-[#5CADFF]">Convite de Casamento</h1>
        <p className="font-poppins text-2xl text-white">Convidamos você para celebrar conosco um dos dias mais especiais de nossas vidas!</p>
      </div>
    </div>
  );
};