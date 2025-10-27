import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import SemAcesso from "../components/SemAcesso";
import TextArea from "../components/TextArea";
import CardTarefa from "../components/CardTarefa";

export const metadata = {
  title: "Painel",
};

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <SemAcesso />;
  }

  return (
    <main className="flex flex-col gap-4 p-4 md:p-2 max-w-5xl mx-auto">
      <section>
        <h1 className="text-2xl font-bold mb-2">Qual sua tarefa?</h1>
        <form className="flex flex-col gap-2">
          <TextArea
            name={"task"}
            id={"task"}
            cols={30}
            rows={10}
            placeholder={"Digite sua tarefa aqui..."}
          />
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              name="check-public"
              id="check-public"
              className="w-8"
            />
            <label htmlFor="check-public">Deixar tarefa como pública?</label>
          </div>
          <button type="submit" className="btn max-w-[200px]">
            Registrar
          </button>
        </form>
      </section>
      <section className="">
        <h1 className="text-2xl text-center font-bold mb-2">Minhas tarefas</h1>
        <CardTarefa />
      </section>
    </main>
  );
}
