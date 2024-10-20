import { useLikedContext } from "@/contexts/like-context";
import LikeIcon from "./LikeIcon";
import { FaCircleXmark } from "react-icons/fa6";
export default function PhotoDetails({ selectedImage, setSelectedImage }) {
  const { likedItems, addToLiked, removeFromLiked } = useLikedContext();

  const handleLikeClick = (itemObject) => {
    const likedItem = likedItems.find((item) => item.id === itemObject.id);

    if (likedItem) {
      removeFromLiked(itemObject);
    } else {
      addToLiked(itemObject);
    }
  };
  return (
    <div
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-2 z-50"
    >
      <div
        className="bg-white p-8 rounded-lg flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <LikeIcon
          isLiked={likedItems.some((item) => item.id === selectedImage.id)}
          handleClick={() => handleLikeClick(selectedImage)}
        />
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-1 right-1 text-zinc-600 hover:text-zinc-900"
        >
          <FaCircleXmark size={32} />
        </button>
        <img
          src={selectedImage?.download_url}
          alt={selectedImage?.author}
          className="rounded-lg object-contain "
        />
        <div>
          <h3 className="text-2xl font-bold text-zinc-900 mt-4">
            Author: {selectedImage?.author}
          </h3>
          <h4 className="font-semibold text-zinc-600">
            Dimensions: {selectedImage?.width} x {selectedImage?.height}
          </h4>
        </div>
      </div>
    </div>
  );
}
