import { Navbar } from "../components/Navbar";
import tradeSvg from "../assets/trade.svg";

export function Home() {
  return (
    <main className="bg-primary">
      <div className="px-4">
        <Navbar />
        <hr className="border border-white bg-white h-[2px] mb-5" />
        <h1 className="font-bold text-white mb-2 text-xl">
          Realizar doações nunca foi tão simples!
        </h1>
        <div className="text-white text-xs font-semibold mb-4 overflow-hidden">
          <p className="mb-4">Tenha acesso às nossas funcionalidades:</p>
          <ul className="list-disc no-underline ml-4">
            <li>Crie anúncios de doação</li>
            <li>Peça uma doação</li>
            <li>Tenha acesso ao recurso de doação rápida</li>
          </ul>
        </div>
        <a
          href="/cadastro"
          className="font-bold text-xs text-white rounded-full px-4 py-2 bg-success drop-shadow-lg"
        >
          Cadastre-se
        </a>
        <img src={tradeSvg} alt="Troca" className="mt-8" />
      </div>
    </main>
  );
}
