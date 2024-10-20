import Filters from "./Filters";
import Logo from "./Logo";
export default function Header() {
  return (
    <header className="py-8 ">
      <div className=" flex justify-between gap-4">
        <Logo />
      </div>
      <Filters />
    </header>
  );
}
