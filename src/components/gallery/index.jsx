import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PhotoDetails from "./PhotoDetails";
const BASE_URL = "https://picsum.photos/v2/list";
import { FaCircleArrowDown } from "react-icons/fa6";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const { data, isError, isPending } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(BASE_URL);
      return await response.json();
    },
  });

  return (
    <main>
      <div>
        <h1>Gallery</h1>
      </div>
      <div className="relative">
        {isPending && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && (
          <div>
            <div className="grid-layout">
              {data.slice(0, page * 10).map((post) => (
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
