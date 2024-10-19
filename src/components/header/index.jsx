import Filters from "./Filters";
import Logo from "./Logo";
import Search from "./Search";
export default function Header() {
  return (
    <header className="py-8 ">
      <div className=" flex justify-between gap-4">
        <Logo />
        <Search />
      </div>
      <Filters />
    </header>
  );
}
