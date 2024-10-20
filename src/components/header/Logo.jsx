import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <a href="/">
      <img src={logo} alt="logo" className="rounded-full border-2 h-20 w-20 hover:rotate-12 duration-300" />
    </a>
  );
}
