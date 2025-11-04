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
        <section className="max-w-[820px] max-lg:w-[620px] max-md:w-[400px] max-sm:w-[290px]">
            <div className="flex justify-center max-md:flex-col-reverse max-md:items-center">                
                <Carousel className="w-[350px] bg-[#fff] max-lg:w-[300px] max-lg:h-[435px] max-md:mt-10 max-sm:w-[250px] max-sm:h-[355px]">
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
                <div className="ml-20  mr-5 text-[#000D33] max-lg:mr-0 max-md:m-0">
                    <p className="font-poppins text-xl text-justify max-lg:text-base ">
                        Convidamos você para celebrar conosco um dos dias mais especiais de nossas vidas! <span className="text-[#005CB8]">No dia 20 de Dezembro às 15 horas</span>
                        , estaremos celebrando nosso casamento.
                    </p>
                    <a href="https://maps.app.goo.gl/BhDNEaK6rfaTuaod9"
                    className="font-poppins text-sm mt-2 cursor-pointer hover:border-b-2 border-[#005CB8] max-sm:text-[11px]"
                    >
                        <span className="text-[#005CB8]">Local da Festa:</span> Rua Maria Alencar de Souza - 2478 | Paraíso-Bem-Te-Vi
                    </a>
                    <p className="mt-8 font-great-vibes text-2xl text-center max-lg:text-xl max-lg:mt-3 max-md:mt-5">" Para que todos vejam, e saibam, e considerem, e juntamente entendam que a mão do Senhor fez isso, e o Santo de Israel o criou. "</p>
                    <p className="mt-2 font-great-vibes text-1xl text-right max-lg:text-base">Isaías 41:20</p>
                    <Countdown />
                </div>
            </div>
        </section>
    )
}