"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Confirm } from "@/app/_components/confirm";
import SelectPresent from "./SelectPresent";
import type { Present } from "@/types/present";

export function ConfirmInvitation() {
    const [name, setName] = useState("");
    const [companions, setCompanions] = useState<string>("0");
    const [loading, setLoading] = useState(false);
    const [sucessMsg, setSucessMsg] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const [selectedPresents, setSelectedPresents] = useState<Present[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);



    async function handleConfirm() {
        if(!name.trim()) {
            setErrorMsg("Por favor, insira seu nome.");
            return;
        }
        if(Number(companions) < 0) {
            setErrorMsg("Número de acompanhantes inválido.");
            return;
        }
        if(selectedPresents.length === 0) {
            setErrorMsg("Por favor, selecione pelo menos um presente antes de confirmar.");
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
                presents: selectedPresents.map((p) => ({
                    id: p.id,
                    name: p.name,
                    image: p.image,
                })),
                createdAt: serverTimestamp(),
            });
            setSucessMsg("Presença confirmada! Aguardamos por você.");
            setName("");
            setCompanions("0");
            setSelectedPresents([]);
        } catch (err) {
            console.error("Erro ao salvar no Firestone:", err);
            setErrorMsg("Erro ao confirmar presença. Tente novamente.");
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
                    onSelectPresent={() => setIsModalOpen(true)}
                    selectedPresents={selectedPresents}
                />

                {selectedPresents.length > 0 && (
                    <div className="mt-2 flex gap-3 flex-wrap">
                    {selectedPresents.map((p) => (
                        <div key={p.id} className="text-center">
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
                    onClose={() => setIsModalOpen(false)}
                    selectedPresent={selectedPresents}
                    onSelect={(present) => {
                        setSelectedPresents((prev) => {
                            const alreadySelected = prev.some((p) => p.id === present.id);
                            if(alreadySelected) {
                                return prev.filter((p) => p.id !== present.id);
                            } else {
                                return [...prev, present];
                            }
                        })
                    }}
                />

                {/* Mensagem de erro */}
                {errorMsg && (
                    <p className="text-red-500 text-sm font-medium mt-2">{errorMsg}</p>
                )}

                {/* Mensagem de sucesso */}
                {sucessMsg && (
                    <p className="text-green-500 text-sm font-medium mt-2">{sucessMsg}</p>
                )}
            </div>
        );
}