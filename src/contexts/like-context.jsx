import { createContext, useContext, useEffect, useState } from "react";

const LikeContext = createContext({});

export default function LikeContextProvider({ children }) {
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("SHOW_DATA_KEY");
    if (data !== null) {
      try {
        const parsedData = JSON.parse(data);
        setLikedItems(parsedData);
      } catch (error) {
        console.error("Error parsing liked items from localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("SHOW_DATA_KEY", JSON.stringify(likedItems));
    } catch (error) {
      console.error("Error saving liked items to localStorage:", error);
    }
  }, [likedItems]);

  const addToLiked = (item) => {
    setLikedItems((prevItems) => [...prevItems, item]);    
  };

  const removeFromLiked = (itemObject) => {
    setLikedItems((prevItems) => prevItems.filter((item) => item.id !== itemObject.id));
  };

  return (
    <LikeContext.Provider value={{ likedItems, addToLiked, removeFromLiked }}>
      {children}
    </LikeContext.Provider>
  );
}
export function useLikedContext() {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error(
      "useLikedContext must be used within a LikeContextProvider"
    );
  }
  return context;
}
