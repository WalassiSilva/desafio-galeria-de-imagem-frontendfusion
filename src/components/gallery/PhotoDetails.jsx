import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function PhotoDetails({ selectedImage, setSelectedImage }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-2"
    >
      <div
        className="bg-white p-8 rounded-lg flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="absolute top-10 right-10 z-50 cursor-pointer" onClick={handleLike}>
          <FaHeart
            size={40}
            className={`${
              isLiked ? "text-red-600" : "text-white"
            } transition duration-300 ease-in-out hover:scale-110`}
          />
        </span>
        <img
          src={selectedImage?.download_url}
          alt={selectedImage?.author}
          className="rounded-lg object-contain h-96"
        />
        <div>
          <h3 className="text-lg font-bold text-zinc-900">Author: {selectedImage?.author}</h3>
          <h4 className="font-semibold text-zinc-600">
            Dimensions: {selectedImage?.width}x{selectedImage?.height}
          </h4>
        </div>
      </div>
    </div>
  );
}
