import { FaHeart } from "react-icons/fa";

export default function LikeIcon({ handleClick, isLiked }) {
  return (
    <>
      <button
        type="button"
        className="absolute top-1 left-1 z-50 cursor-pointer"
        onClick={handleClick}
      >
        {!isLiked ? (
          <FaHeart
            size={32}
            className="text-gray-400 transition duration-300 ease-in-out hover:scale-110"
          />
        ) : (
          <FaHeart
            size={32}
            className="text-red-600 transition duration-300 ease-in-out hover:scale-110"
          />
        )}
      </button>
    </>
  );
}
