export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Construtora XYZ. Todos os direitos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline text-sm">Política de Privacidade</a>
          <a href="#" className="hover:underline text-sm">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
