"use client";

// icon
import { PlusCircle } from "lucide-react";

// link
import Link from "next/link";

// session e auth
import { useSession, signIn, signOut } from "next-auth/react";

import Loader from "./Loader";

// hooks
export default function Header() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loader />;
  }

  return (
    // header
    <header className="max-w-5xl mx-auto flex flex-row items-center justify-around py-2">
      {/* nav */}
      <nav className="flex flex-row items-center gap-2">
        {/* Logo */}
        <Link href="/">
          <h1 className="flex items-center gap-1 text-2xl font-bold">
            Tarefas <PlusCircle className="text-red-600" />
          </h1>
        </Link>
        {/* Btn para dash */}
        {/* se tiver sessao, mostrar o botão, se não, não mostrar nada */}
        {session && (
          <Link
            href="/dashboard"
            className="hover text-sm rounded-4xl border border-white px-4 py-1 font-bold"
          >
            Meu painel
          </Link>
        )}
      </nav>

      {/* Btn entrar / sair */}

      {/* se o status for loading, não mostrar nada, se tiver uma sessao, mostrar o botão de sair, se não, mostrar o botão de entrar */}
      {session?.expires ? (
        <button
          className="hover text-sm rounded-4xl border border-white px-2 md:px-4 py-1 font-bold"
          onClick={() => signOut()}
        >
          Olá, {session?.user?.name}
        </button>
      ) : (
        <button
          className="hover text-sm rounded-4xl border border-white px-4 py-1 font-bold"
          onClick={() => signIn("google")}
        >
          Entrar
        </button>
      )}
    </header>
  );
}
