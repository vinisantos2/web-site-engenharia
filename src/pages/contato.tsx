import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
    alert("Mensagem enviada com sucesso!");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <>
      <Head>
        <title>Contato | Construtora XYZ</title>
        <meta name="description" content="Fale com a equipe da Construtora XYZ." />
      </Head>

      <main className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Fale Conosco
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-xl rounded-lg p-8">
            <div>
              <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                value={form.mensagem}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 text-white font-semibold py-3 rounded-lg hover:bg-amber-700 transition duration-300 shadow-md"
            >
              Enviar
            </button>
          </form>
        </motion.div>
      </main>
    </>
  );
}
