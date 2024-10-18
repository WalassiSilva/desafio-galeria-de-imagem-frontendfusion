import logo from "../../assets/logo.png";
import Filters from "./Filters";
import Search from "./Search";
export default function Header() {
  return (
    <header className="p-8 ">
      <div className=" flex justify-between gap-4">
        <img
          src={logo}
          alt="logo"
          className="rounded-full border-2 h-20 w-20"
        />
        <Search />
      </div>
      <Filters />
    </header>
  );
}
