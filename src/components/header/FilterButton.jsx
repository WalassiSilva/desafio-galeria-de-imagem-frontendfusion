export default function FilterButton({ children, onClick, disabled, name }) {
  return (
    <li className=" transtion group flex h-10 min-w-24 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 via-red-500 via--500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30">
      <button
        className="flex px-2 h-full w-full items-center justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out font-bold"
        onClick={onClick}
        disabled={disabled}
        name={name}
      >
        {children}
      </button>
    </li>
  );
}
