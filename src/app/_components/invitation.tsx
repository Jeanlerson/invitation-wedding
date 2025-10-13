import { Countdown } from "@/components/Countdown";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";


export function Invitation() {
    const img = [
        "/img/foto1.jpg",
        "/img/foto2.jpg",
        "/img/foto3.jpg",
        "/img/foto4.jpg",
        "/img/foto5.jpg",
    ];


    return (
        <section className="w-[820]">
            
            <div className="flex justify-center">                
                <Carousel className="w-full max-w-full  bg-[#fff] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    <CarouselContent>
                        {img.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card className="border-0">
                                        <CardContent className="flex items-center justify-center">
                                            <Image
                                                src={src}
                                                alt={`foto${index + 1}`}
                                                width={400}
                                                height={400}
                                                className="h-full w-full object-cover rounded-3xl"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className="ml-20 mt-6 mr-5 text-[#000D33]">
                    <p className="font-poppins text-xl text-justify">Convidamos você para celebrar conosco um dos dias mais especiais de nossas vidas! <span className="text-[#005CB8]">No dia 20 de Dezembro às 15 horas</span>, estaremos celebrando nosso casamento.</p>
                    <p className="mt-10 font-great-vibes text-2xl text-center">" Para que todos vejam, e saibam, e considerem, e juntamente entendam que a mão do Senhor fez isso, e o Santo de Israel o criou. "</p>
                    <p className="mt-2 font-great-vibes text-1xl text-right">Isaías 41:20</p>
                    <Countdown />
                </div>
            </div>
        </section>
    )
}