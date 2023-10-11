"use client"

import { ThemeProvider } from "next-themes"
import { ReactNode } from "react"

export function Provider({ children }: { children: React.ReactNode }) {

    return <ThemeProvider attribute="class">{children}</ThemeProvider>



}