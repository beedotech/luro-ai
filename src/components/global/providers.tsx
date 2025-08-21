"use client";

import React from "react"
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <Toaster position="top-center" richColors />
        </ThemeProvider>
    )
};

export default Providers