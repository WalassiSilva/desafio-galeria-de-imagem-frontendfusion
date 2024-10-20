import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaCircleArrowDown } from "react-icons/fa6";
import { useFilterContext } from "@/contexts/filter-context";
import PhotoDetails from "./PhotoDetails";
import LikeIcon from "./LikeIcon";
import { useLikedContext } from "@/contexts/like-context";

const BASE_URL = "https://picsum.photos/v2/list";
export default function Gallery() {
  const { filter } = useFilterContext();
  const { likedItems, addToLiked, removeFromLiked } = useLikedContext();

  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);

  const { data, isError, isPending } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(BASE_URL);
      return await response.json();
    },
  });

  let filteredData = data?.filter((post) => post.author === filter);

  if (filter === "liked") {
    filteredData = likedItems;
  }
  if (filter === "All") {
    filteredData = data;
  }
  const handleLikeClick = (itemObject) => {
    const likedItem = likedItems.find((item) => item.id === itemObject.id);

    if (likedItem) {
      removeFromLiked(itemObject);
    } else {
      addToLiked(itemObject);
    }
  };

  return (
    <main>
      <div className="relative ">
        {isPending && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {filteredData && (
          <div className="flex justify-center md:block">
            <div className="grid-layout">
              {filteredData.slice(0, page * 10).map((post) => (
                <div
                  onClick={() => setSelectedImage(post)}
                  key={post.id}
                  className="cursor-pointer w-[300px] h-[200px] rounded-lg"
                >
                  <div className="relative">
                    <span onClick={(e) => e.stopPropagation()}>
                      <LikeIcon
                        isLiked={likedItems.some((item) => item.id === post.id)}
                        handleClick={() => handleLikeClick(post)}
                      />
                    </span>
                    <img
                      src={post.download_url}
                      alt={post.author}
                      className="rounded-lg w-[300px] h-[200px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={page === 3}
          className={`animate-bounce absolute bottom-1 left-1/2 transform -translate-x-1/2 -mx-[20px] ${
            page === 3 ? "hidden" : ""
          }`}
        >
          <FaCircleArrowDown size={40} />
        </button>
      </div>
      {selectedImage && (
        <PhotoDetails
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </main>
  );
}
