import ProjetoCard from "../components/ProjetoCard";
import { projetos } from "../utils/projetos";
import { motion } from "framer-motion";

export default function Projetos() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nossos Projetos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((p, index) => (
            <ProjetoCard key={index} {...p} />
          ))}
        </div>
      </motion.div>
    </main>
  );
}
