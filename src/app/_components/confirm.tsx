import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import type { ConfirmProps } from "@/types/confirm";

export function Confirm(
  { name, companions, setName, setCompanions, onConfirm, onSelectPresent, selectedPresent }: ConfirmProps
) {
  return (
    <Card className="w-[320px] bg-[#000D33] text-white rounded-3xl border-none font-poppins shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Confirme sua presença
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-sm text-white">
            Nome
          </Label>
          <Input
            id="name"
            placeholder="Digite seu nome"
            className="text-black bg-white/90 focus-visible:ring-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="acompanhantes" className="text-sm text-white">
            Nº de acompanhantes
          </Label>
          <Input
            id="acompanhantes"
            type="number"
            min="0"
            placeholder="Ex: 2"
            className="text-black bg-white/90 focus-visible:ring-white"
            value={companions}
            onChange={(e) => setCompanions(e.target.value)}
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <Button
          variant="secondary"
          className="w-full rounded-full bg-white text-[#000D33] hover:bg-gray-200 cursor-pointer"
          onClick={onSelectPresent}
        >
          {selectedPresent ? `Presente: ${selectedPresent}` : "Selecionar um presente"}
        </Button>

        <Button
          className="w-full rounded-full bg-[#001A66] hover:bg-[#002B99] cursor-pointer"
          onClick={onConfirm}
        >
          Confirmar
        </Button>
      </CardFooter>
    </Card>
  )
}
