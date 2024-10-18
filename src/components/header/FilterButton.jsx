export default function FilterButton({children}) {
  return (
    <li className="bg-blue-400 px-2 py-1 text-white rounded-lg min-w-20 text-center font-bold">
      <button>{children}</button>
    </li>
  );
}
