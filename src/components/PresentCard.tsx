"use client";

import { useState, useEffect, use } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";
import { Present, PresentProps } from "@/types/present";
import { on } from "events";
import { div } from "framer-motion/client";

export function PresentCard({ onSelectPresent }: PresentProps) {
    const [presents, setPresents] = useState<Present[]>([]);
    const [selectPresent, setSelectPresent] = useState<Present | null>(null);
    const [showPresent, setShowPresent] = useState(false);

    useEffect(() => {
        const fetchPresents = async () => {
            const snapshot = await getDocs(collection(db, "presents"));
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Present[];
            setPresents(data);
        };
        fetchPresents();
    }, []);

    const handleSelect = (present: Present) => {
        if(!present.available) return;

        setSelectPresent(present);
        onSelectPresent(present);
    };

    return (
        <div>
            ...
        </div>
    )
}