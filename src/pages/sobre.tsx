import Head from "next/head";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre Nós | Construtora XYZ</title>
        <meta name="description" content="Conheça a história, missão e valores da Construtora XYZ." />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6 tracking-tight">
            Sobre Nós
          </h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            A Construtora XYZ atua há mais de 20 anos no mercado de engenharia civil,
            oferecendo soluções completas em construções residenciais, comerciais e industriais.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Nossa missão é transformar sonhos em realidade com qualidade, segurança e sustentabilidade.
            Valorizamos a transparência com nossos clientes e a excelência em cada detalhe de nossas obras.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Contamos com uma equipe especializada, materiais de alta qualidade e tecnologia de ponta
            para entregar projetos dentro do prazo e com alto padrão de acabamento.
          </p>
        </motion.div>
      </main>
    </>
  );
}
