"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Confirm } from "@/app/_components/confirm";
import type { ConfirmProps } from "@/types/confirm";
import { div } from "framer-motion/client";
import SelectPresent from "./SelectPresent";
import type { Present } from "@/types/present";

export function ConfirmInvitation() {
    const [name, setName] = useState("");
    const [companions, setCompanions] = useState<string>("0");
    const [loading, setLoading] = useState(false);
    const [sucessMsg, setSucessMsg] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const [selectedPresent, setSelectedPresent] = useState<Present | null>(null);
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
        if(!selectedPresent) {
            setErrorMsg("Por favor, selecione um presente antes de confirmar.");
            return;
        }

        setLoading(true);
        setErrorMsg("");
        setSucessMsg("");

        try {
            const colRef = collection(db, "confirmations");
            console.log("Enviando para o Firestore:", { name, companions });
            await addDoc(colRef, {
                name: name.trim(),
                companions: Number(companions) || 0,
                present: selectedPresent.name,
                presentId: selectedPresent.id,
                createdAt: serverTimestamp(),
            });
            setSucessMsg("Presença confirmada! Aguardamos por você.");
            setName("");
            setCompanions("0");
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
                />

                {/* Botão para Abrir Modal */}
                <div className="mt-4">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
                    >
                        {selectedPresent ? `Presente: ${selectedPresent.name}` : "Selecionar um presente"}
                    </button>
                </div>

                {/* Modal de Seleção */}

                <SelectPresent
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    selectedPresent={selectedPresent}
                    onSelect={(present) => {
                        setSelectedPresent(present);
                        setIsModalOpen(false);
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