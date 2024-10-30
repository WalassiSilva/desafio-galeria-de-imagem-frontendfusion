import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaCircleArrowDown } from "react-icons/fa6";
import { useFilterContext } from "@/contexts/filter-context";
import PhotoDetails from "./PhotoDetails";
import LikeIcon from "./LikeIcon";
import { useLikedContext } from "@/contexts/like-context";
import Skeleton from "./Skeleton";

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

  let filteredData = data?.filter((item) => item.author === filter);

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
        {isError && <p>Error</p>}
        {isPending && (
          <>
            <div className="flex justify-center md:block">
              <div className="grid-layout">
                <Skeleton qtde={10} />
              </div>
            </div>
          </>
        )}
        {filteredData?.length === 0 && (
          <div className="flex justify-center items-center gap-20 flex-col">
            <h2 className="text-2xl font-bold text-white text-center">
              Empty List
            </h2>
            <Skeleton />
          </div>
        )}
        {filteredData && (
          <div className="flex justify-center md:block">
            <div className="grid-layout">
              {filteredData.slice(0, page * 10).map((item) => (
                <div
                  onClick={() => setSelectedImage(item)}
                  key={item.id}
                  className="cursor-pointer w-[300px] h-[200px] rounded-lg"
                >
                  <div className="relative">
                    <span onClick={(e) => e.stopPropagation()}>
                      <LikeIcon
                        isLiked={likedItems.some((itemObject) => itemObject.id === item.id)}
                        handleClick={() => handleLikeClick(item)}
                      />
                    </span>
                    <img
                      src={item.download_url}
                      alt={item.author}
                      loading="lazy"
                      className="rounded-lg w-[300px] h-[200px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page * 10 >= filteredData?.length}
          className={`animate-bounce absolute bottom-1 left-1/2 transform -translate-x-1/2 -mx-[20px] ${
            page * 10 >= filteredData?.length ? "hidden" : ""
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
