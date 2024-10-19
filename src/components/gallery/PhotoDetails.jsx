export default function PhotoDetails({ selectedImage, setSelectedImage }) {
  return (
    <div
      onClick={() => setSelectedImage(null)}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center px-2"
    >
      <div
        className="bg-white p-8 rounded-lg flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <span>LIKE❤</span>
        <img
          src={selectedImage?.download_url}
          alt={selectedImage?.author}
          className="rounded-lg object-contain h-96"
        />
        <div>
          <h2>Author: {selectedImage?.author}</h2>
          <h4>
            Dimensions: {selectedImage?.width}x{selectedImage?.height}
          </h4>
        </div>
      </div>
    </div>
  );
}
