import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    console.log("book mark adding soon");
  };

  return (
    <div className=" max-w-6xl mx-auto">
      <Header></Header>
      <div className="flex">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
}

export default App;
