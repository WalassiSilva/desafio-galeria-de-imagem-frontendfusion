import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FaCircleArrowDown } from "react-icons/fa6";
import { useFilterContext } from "@/contexts/filter-context";
import PhotoDetails from "./PhotoDetails";

const BASE_URL = "https://picsum.photos/v2/list";
export default function Gallery() {
  const { filter } = useFilterContext();

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

  if (filter === "All") {
    filteredData = data;
  }

  return (
    <main>
      <div className="relative ">
        {isPending && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {filteredData && (
          <div>
            <div className="grid-layout">
              {filteredData.slice(0, page * 10).map((post) => (
                <div
                  onClick={() => setSelectedImage(post)}
                  key={post.id}
                  className="cursor-pointer"
                >
                  <img
                    src={post.download_url}
                    alt={post.author}
                    className="rounded-lg"
                  />
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
