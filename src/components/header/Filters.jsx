import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Button } from "../ui/button";
import { useFilterContext } from "@/contexts/filter-context";

export default function Filters() {
  const { setFilter } = useFilterContext();

  const [isAuthorOpen, setIsAuthorOpen] = useState(false);

  const authors = [
    "Alejandro Escamilla",
    "Paul Jarvis",
    "Aleks Dorohovich",
    "Vadim Sherbakov",
    "Yoni Kaplan-Nadel",
    "Jerry Adney",
    "Go Wild",
  ];

  const handleFilter = (e) => {
    setFilter(e.target.name);
  };

  const handleAuthorIsOpen = () => {
    setIsAuthorOpen(!isAuthorOpen);
  };
  return (
    <>
      <ul className="flex justify-center gap-10 mt-4 ">
        <Button name="All" onClick={(e) => handleFilter(e)}>All</Button>
        <Button name="favorites" onClick={(e) => handleFilter(e)}>My Favorites</Button>

        <Button onClick={handleAuthorIsOpen}>
          <span className="mr-2">Authors</span>
          {!isAuthorOpen ? <FaChevronDown /> : <FaChevronUp />}
        </Button>
      </ul>
      <ul
        className={`${
          isAuthorOpen ? "opacity-100" : "opacity-0 none -z-10"
        } grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mt-4 transition duration-300 ease-in-out`}
      >
        {authors.map((author) => (
          <Button
            key={author}
            name={author}
            variant="outline"
            disabled={!isAuthorOpen}
            onClick={(e) => handleFilter(e)}
          >
            {author}
          </Button>
        ))}
      </ul>
    </>
  );
}
