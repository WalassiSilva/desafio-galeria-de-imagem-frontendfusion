import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { useFilterContext } from "@/contexts/filter-context";
import FilterButton from "./FilterButton";

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
        <FilterButton name="All" onClick={(e) => handleFilter(e)}>
          All
        </FilterButton>
        <FilterButton name="liked" onClick={(e) => handleFilter(e)}>
          My Favorites
        </FilterButton>

        <FilterButton onClick={handleAuthorIsOpen}>
          <span className="mr-2">Authors</span>
          {!isAuthorOpen ? <FaChevronDown /> : <FaChevronUp />}
        </FilterButton>
      </ul>
      <ul
        className={`${
          isAuthorOpen ? "opacity-100" : "opacity-0 none -z-10"
        } flex flex-wrap gap-4 mt-4 transition duration-300 ease-in-out`}
      >
        {authors.map((author) => (
          <FilterButton
            key={author}
            name={author}
            variant="outline"
            disabled={!isAuthorOpen}
            onClick={(e) => handleFilter(e)}
          >
            {author}
          </FilterButton>
        ))}
      </ul>
    </>
  );
}
