import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Great_Vibes } from "next/font/google";
import { Header } from "./_components/header";
import { Invitation } from "./_components/invitation";
import { Confirm } from "./_components/confirm";
import { ConfirmInvitation } from "@/components/ConfirmInvitation";

export default function Page() {
  return (
    <main className="flex flex-col">
      <Header />        
      <div className="flex justify-center items-center flex-1 max-xl:flex-col">
        <Invitation />
        <ConfirmInvitation />
      </div>
    </main>
    
    /*
    <div className="flex justify-center min-h-screen min-w-screen bg-[#003366]">
      <div className="bg-[z] min-w-[1140] min-h-screen p-5">
        <h1 className="font-great-vibes text-8xl text-[#5CADFF]">Convite de Casamento</h1>
        <p className="font-poppins text-2xl text-white">Convidamos você para celebrar conosco um dos dias mais especiais de nossas vidas!</p>
        <Button className="mt-4 m-1 bg-[#0059B3] text-white hover:bg-[#004C99]">Confirmar Convite</Button>
        <Button className="mt-4 m-1 bg-[#0059B3] text-white hover:bg-[#004C99]">Selecionar presente</Button>
        <Input className="mt-10 bg-white text-black" placeholder="Digite seu nome para confirmar presença" />
        <Input className="mt-10 bg-white text-black" placeholder="Digite a quantidade de acompanhantes" />
        <Card className="mt-10 p-5 bg-[#0059B3] text-white">
          <h2 className="text-3xl mb-2">Detalhes do Evento</h2>
          <p>Data: 15 de Dezembro de 2024</p>
          <p>Local: Espaço Jardim Encantado</p>
          <p>Horário: 16:00</p>
        </Card>
        <Carousel className="mt-10" />
      </div>
    </div>
    */
  );
};