"use client";

import {useRouter} from "next/navigation";
import {Search} from "lucide-react";
import ResetFormButton from "@/components/resetformbutton";
import React from "react";

type Props = {
    initialQuery: string;
};

export default function SearchForm({initialQuery}: Props) {
    const router = useRouter();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const q = (formData.get("query") as string | null)?.trim() ?? "";
        router.push(q ? `/?query=${encodeURIComponent(q)}` : "");
    };

    return (
        <form onSubmit={onSubmit} className="banner_form">
            <div className="relative w-full">
                <input
                    type="text"
                    name="query"
                    defaultValue={initialQuery}
                    className="px-10 py-2 pr-12 w-full bg-black text-white rounded-full"
                    placeholder="Search"
                />
                <div className="absolute flex gap-[0.2em] right-3 top-1/2 -translate-y-1/2 items-center">
                    {initialQuery && <ResetFormButton/>}
                    <button
                        type="submit"
                        className="bg-sky-200 rounded-full p-1 cursor-pointer"
                    >
                        <Search width={18} height={18} color="black"/>
                    </button>
                </div>
            </div>
        </form>
    );
}
