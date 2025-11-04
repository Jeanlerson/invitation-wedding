"use client";

import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Confirm } from "@/app/_components/confirm";
import SelectPresent from "./SelectPresent";
import type { Present } from "@/types/present";
import { toast } from "sonner";

export function ConfirmInvitation() {
    const [name, setName] = useState("");
    const [companions, setCompanions] = useState<string>("0");
    const [loading, setLoading] = useState(false);
    const [sucessMsg, setSucessMsg] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [checkboxPresent, setCheckboxPresent] = useState(false);

    const [selectedPresents, setSelectedPresents] = useState<Present[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    async function handleConfirm() {
        if(!name.trim()) {
            toast.error("Por favor, insira seu nome.");
            return;
        }
        if(Number(companions) < 0) {
            toast.error("Número de acompanhantes inválido.");
            return;
        }
        if (!checkboxPresent && selectedPresents.length === 0) {
            toast.error("Por favor, selecione um presente ou marque 'Já presenteei / Darei outro presente'.");
            return;
        }

        setLoading(true);
        setErrorMsg(null);
        setSucessMsg(null);

        try {
            const colRef = collection(db, "confirmations");
            console.log("Enviando para o Firestore:", { name, companions, presents: selectedPresents });

            await addDoc(colRef, {
                name: name.trim(),
                companions: Number(companions) || 0,
                presents: checkboxPresent
                    ? []
                    :selectedPresents.map((p) => ({
                        name: p.name,
                    })),
                checkboxPresent,
                createdAt: serverTimestamp(),
            });

            await Promise.all(
                selectedPresents.map(async(present) => {
                    const presentRef = doc(db, "presents", present.id);
                    await updateDoc(presentRef, { available: false});
                })
            );

            toast.success("Presença confirmada! Aguardamos por você.");
            setCheckboxPresent(false);
            setName("");
            setCompanions("0");
            setSelectedPresents([]);
        } catch (err) {
            console.error("Erro ao salvar no Firestone:", err);
            toast.error("Erro ao confirmar presença. Tente novamente.");
        } finally {
            setLoading(false);
        }

        
    }

    return (
            <div>
                <Confirm 
                    name={name}
                    companions={companions}
                    setName={setName}
                    setCompanions={setCompanions}
                    onConfirm={handleConfirm}
                    onSelectPresent={() => { 
                            if(!checkboxPresent) {
                                setIsModalOpen(true);
                            }
                        }
                    }
                    selectedPresents={selectedPresents}
                    checkboxPresent={checkboxPresent}
                    setCheckboxPresent={setCheckboxPresent}
                />

                {selectedPresents.length > 0 && (
                    <div className="mt-2 flex gap-3 flex-wrap">
                    {selectedPresents.map((p) => (
                        <div key={p.id} className="text-center max-xl:mb-5">
                        {/* imagem - ajuste width/height conforme necessário */}
                        <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded-md" />
                        <div className="text-sm">{p.name}</div>
                        </div>
                    ))}
                    </div>
                )}

                {/* Modal de Seleção */}

                <SelectPresent
                    isOpen={isModalOpen}
                    onClose={() => {
                        setIsModalOpen(false);
                         // limpa seleção anterior
                    }}
                    selectedPresent={selectedPresents}
                    onSelect={(presents) => {           // também array
                        setSelectedPresents(presents);
                        setIsModalOpen(false);
                    }}
                />
            </div>
        );
}