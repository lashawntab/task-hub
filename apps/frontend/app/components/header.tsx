import LogoSvg from "../../public/logo.svg";

export default function Header() {  
  return (
    <header>
      <div className="container mx-auto px-4 py-4 flex flex-row items-center">
        <LogoSvg color="#FE7A03" />
        <h1 className="text-3xl font-bold text-white">Task Hub</h1>
      </div>
    </header>
  );
}

