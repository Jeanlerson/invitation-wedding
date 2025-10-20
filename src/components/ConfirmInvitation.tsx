"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Confirm } from "@/app/_components/confirm";
import type { ConfirmProps } from "@/types/confirm";
import { div } from "framer-motion/client";

export function ConfirmInvitation() {
    const [name, setName] = useState("");
    const [companions, setCompanions] = useState<string>("0");
    const [loading, setLoading] = useState(false);
    const [sucessMsg, setSucessMsg] = useState<string | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    async function handleConfirm() {
        if (!name) {
            setErrorMsg("Por favor, insira seu nome.");
            return;
        }
        if (companions < "0") {
            setErrorMsg("Número de acompanhantes inválido.");
            return;
        }

        setLoading(true);
        setErrorMsg(null);
        setSucessMsg(null);

        try {
            const colRef = collection(db, "confirmations");
            console.log("Enviando para o Firestore:", { name, companions });
            await addDoc(colRef, {
                name: name.trim(),
                companions: Number(companions) || 0,
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

                <div className="sr-only" aria-live="polite">
                    {loading ? "Enviando..." : sucessMsg ?? errorMsg ?? ""}
                </div>
            </div>
        );
}