'use client';

import React from 'react'
import {X} from "lucide-react";
import Link from "next/link";

export default function ResetFormButton() {
    const reset = () => {
        const form = document.querySelector('.banner_form') as HTMLFormElement;
        if (form) {
            form?.reset();
        }
    }

    return (
        <Link href="/" onClick={reset} className="inline-flex items-center justify-center
        bg-sky-200 rounded-full p-1 cursor-pointer">
            <X width={18} height={18} color="black"/>
        </Link>
    )
}
