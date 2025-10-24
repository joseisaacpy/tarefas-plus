"use client";

// icon
import { PlusCircle } from "lucide-react";
// link
import Link from "next/link";
// hooks
import { useState } from "react";
// session

export default function Header() {
  const session = useState(true);
  return (
    <header>
      <nav className="h-20 flex justify-around items-center p-2">
        <div className="flex items-center justify-center gap-2">
          {/* Logo */}
          <Link href="/">
            <h1 className="flex items-center gap-1 text-2xl font-bold">
              Tarefas <PlusCircle className="text-red-600" />
            </h1>
          </Link>
          {/* Btn to dash */}
          <Link href="/dashboard" className={`btn ${session ? "" : "hidden"}`}>
            Meu painel
          </Link>
          {/* Btn entrar */}
        </div>

        <button className="btn">Entrar</button>
      </nav>
    </header>
  );
}
