import Image from "next/image";

interface ProjetoCardProps {
  imagem: string;
  titulo: string;
  descricao: string;
  localizacao: string;
}

export default function ProjetoCard({
  imagem,
  titulo,
  descricao,
  localizacao,
}: ProjetoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative w-full h-48">
        <Image
          src={imagem}
          alt={titulo}
          layout="fill"
          objectFit="cover"
          className="transition duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-900">{titulo}</h3>
        <p className="text-sm text-gray-600 mt-1">{descricao}</p>
        <p className="text-sm text-blue-700 mt-2 font-medium">📍 {localizacao}</p>
      </div>
    </div>
  );
}
