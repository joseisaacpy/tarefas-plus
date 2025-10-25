import { ClipboardCheck } from "lucide-react";

export const metadata = {
  title: "Início",
};

export default function Home() {
  return (
    <section className="h-[calc(100dvh-100px)] flex flex-col items-center justify-center text-center gap-6">
      {/* img */}
      <ClipboardCheck size={100} />
      {/* title */}
      <h1 className="text-lg max-w-2xl md:text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        blanditiis omnis rem enim!
      </h1>
      {/* div btn */}
      <div className="px-4 flex flex-col md:flex-row w-full gap-4 items-center justify-center">
        <button className="btn w-full md:max-w-[200px]">lorem</button>
        <button className="btn w-full md:max-w-[200px]">lorem</button>
      </div>
    </section>
  );
}
