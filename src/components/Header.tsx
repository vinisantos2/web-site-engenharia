import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-900 tracking-wide cursor-pointer">
            Construtora XYZ
          </span>
        </Link>

        <nav className="flex space-x-6">
          <Link href="#inicio">
            <span className="text-gray-700 hover:text-blue-700 transition cursor-pointer">Início</span>
          </Link>
          <Link href="#sobre">
            <span className="text-gray-700 hover:text-blue-700 transition cursor-pointer">Sobre</span>
          </Link>
          <Link href="#projetos">
            <span className="text-gray-700 hover:text-blue-700 transition cursor-pointer">Projetos</span>
          </Link>
          <Link href="#contato">
            <span className="text-gray-700 hover:text-blue-700 transition cursor-pointer">Contato</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
