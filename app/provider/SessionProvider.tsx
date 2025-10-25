"use client";

// import Session
import { SessionProvider } from "next-auth/react";

// import React Node
import { ReactNode } from "react";

export default function AuthProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
