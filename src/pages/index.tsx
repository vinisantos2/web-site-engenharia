import Head from "next/head";
import Sobre from "./sobre";
import Contato from "./contato";
import Projetos from "./projetos";
import MetaHead from "../components/Heade";

export default function Home() {
  return (
    <>
     <MetaHead />

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative flex items-center justify-center text-white h-screen px-4"
        style={{
          backgroundImage: "url('/images/site/construcao-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />

        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide drop-shadow-xl">
            Bem-vindo à Construtora XYZ
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-lg">
            Projetos residenciais, comerciais e industriais com excelência e comprometimento.
          </p>
          <a
            href="#contato"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Solicite um orçamento
          </a>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 bg-gray-50">
        <Projetos />
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 bg-white">
        <Sobre />
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-100">
        <Contato />
      </section>
    </>
  );
}
