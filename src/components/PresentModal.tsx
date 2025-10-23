"use client";

import { PresentModalProps } from "@/types/present";
import Image from "next/image";

export function PresentModal({ id, name, image, selected, onSelect, unavailable }: PresentModalProps) {
    return (
        <div className={`p-3 rounded-2xl border cursor-pointer transition-all ${selected ? "border-green-500 bg-green-100" : "border-gray-300"} 
            ${unavailable ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"}`}
            onClick={() => !unavailable && onSelect(id)}
        >
            <Image 
                src={image}
                alt={name}
                width={150}
                height={150}
                className="rounded-xl mx-auto"
            />
            <p className="text-center mt-2 font-medium">{name}</p>
        </div>
    )
}