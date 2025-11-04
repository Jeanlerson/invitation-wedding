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
        "/img/foto6.jpg",
        "/img/foto7.jpg",
        "/img/foto8.jpg",
        "/img/foto9.jpg",
        "/img/foto10.jpg",
        "/img/foto11.jpg",
        "/img/foto12.jpg",
        "/img/foto13.jpg",
        "/img/foto14.jpg",
        "/img/foto15.jpg",
        "/img/foto16.jpg",
    ];


    return (
        <section className="max-w-[820px]">
            <div className="flex justify-center">                
                <Carousel className="w-[350px]  bg-[#fff] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    <CarouselContent>
                        {img.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card className="border-0">
                                        <CardContent className="flex items-center justify-center">
                                            <Image
                                                src={src}
                                                alt={`foto${index + 1}`}
                                                width={300}
                                                height={300}
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