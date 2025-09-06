// 'use client'

import React from 'react'
import Navbar from "@/components/navbar";

export default function Layout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}
