import { ClipboardCheck } from "lucide-react";

export const metadata = {
  title: "Tarefas Plus",
};

export default function Home() {
  return (
    <section className="h-[calc(100dvh-100px)] flex flex-col items-center justify-center text-center gap-6">
      {/* img */}
      <ClipboardCheck size={100} />
      {/* title */}
      {/* título */}
      <h1 className="text-lg max-w-2xl md:text-3xl font-bold">
        Organize suas tarefas de forma simples e eficiente. Crie, edite e
        acompanhe seu progresso com praticidade.
      </h1>

      {/* botões */}
      <div className="px-4 flex flex-col md:flex-row w-full gap-4 items-center justify-center">
        <button className="btn w-full md:max-w-[200px]">+ 12 posts</button>
        <button className="btn w-full md:max-w-[200px] btn-outline">
          + 12 comentários
        </button>
      </div>
    </section>
  );
}
