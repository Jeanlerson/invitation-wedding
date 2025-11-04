"use client";

import { Present, SelectPresentProps } from "@/types/present";
import { useState, useEffect, use } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function SelectPresent ({ onSelect, selectedPresent, isOpen, onClose }: SelectPresentProps) {
    const [presents, setPresents] = useState<Present[]>([]);
    const [localSelected, setLocalSelected] = useState<Present[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "presents"), (snapshot) => {
            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Present[];

            console.log("🎁 Presentes carregados do Firebase:", list);

            setPresents(list);
            
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if(isOpen) {
            setLocalSelected(selectedPresent);
        }
    }, [isOpen, selectedPresent]);

    const toggleSelect = (present: Present) => {
        setLocalSelected((prev) => {
            const alreadySelected = prev.some((p) => p.id === present.id);
            return alreadySelected
                ? prev.filter((p) => p.id !== present.id)
                : [...prev, present];
        });
    };

    useEffect(() => {
        onSelect(localSelected);
    }, [localSelected])

    const handleClose = () => {
        onClose();
    };
    
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-2xl overflow-y-auto max-h-[80vh]"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    >
                        <div className="flex justify-between mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">Selecione um Presente ou mais</h2>
                                <p className="text-sm">As imagens são meramente ilustrativas</p>
                            </div>                          
                            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 cursor-pointer">X</button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {presents.length === 0 && <p>Carregando presentes...</p>}
                            {presents.map((present) => {
                                const isSelected = localSelected.some(
                                    (p) => p.id === present.id
                                );

                                return(
                                    <button
                                        key={present.id}
                                        onClick={() => toggleSelect(present)}
                                        disabled={!present.available}
                                        className={`border rounded-lg p-3 transition ${
                                            present.available
                                            ? isSelected
                                                ? "bg-green-200 border-green-500 "
                                                : "hover:bg-green-100 cursor-pointer"
                                            : "bg-gray-200 cursor-not-allowed opacity-70"
                                        }`}
                                    >
                                        <Image
                                            src={present.image}
                                            alt={present.name}
                                            width={150}
                                            height={150}
                                            className="mx-auto rounded-lg"
                                        />
                                        <p className="text-center mt-2 font-medium">{present.name}</p>
                                    </button>
                                )
                            })}
                        </div>

                        <div className="mt-4 text-right">
                            <Button onClick={handleClose} variant="outline" className="cursor-pointer">Fechar</Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}