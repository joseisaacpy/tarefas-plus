import { Share2, Trash2 } from "lucide-react";

export default function CardTarefa() {
  return (
    <article className="flex flex-col gap-2 bg-gray-300 text-black rounded-md p-2">
      {/* div public e compartilhar */}
      <div className="flex items-center gap-4">
        <label className="p-2 rounded-md bg-blue-500 text-white">Pública</label>
        <button className="cursor-pointer">
          <Share2 />
        </button>
      </div>
      {/* conteudo */}
      <div className="flex items-center justify-between">
        <p>labore aperiam quam incidunt soluta?</p>
        {/* icon delete */}
        <button className="bg-red-500 text-white p-2 rounded-md cursor-pointer">
          <Trash2 />
        </button>
      </div>
    </article>
  );
}
