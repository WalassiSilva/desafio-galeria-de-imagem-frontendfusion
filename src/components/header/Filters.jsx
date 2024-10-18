import FilterButton from "./FilterButton";


export default function Filters() {
  return (
    <ul className="flex justify-between mt-4 ">
      <FilterButton>All</FilterButton>
      <FilterButton>My Favorites</FilterButton>
      <FilterButton>Alex</FilterButton>
      <FilterButton>Kevin</FilterButton>
      <FilterButton>Romero</FilterButton>      
    </ul>
  );
}

