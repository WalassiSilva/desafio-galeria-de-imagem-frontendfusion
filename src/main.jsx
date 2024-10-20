import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FilterContextProvider from "./contexts/filter-context.jsx";
import LikeContextProvider from "./contexts/like-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LikeContextProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </LikeContextProvider>
);
