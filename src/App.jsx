import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import SpentTime from "./components/SpentTime/SpentTime";
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const [times, setTimes] = useState(0);

  const handleAddTime = (blog, id) => {
    const newTimes = times + blog.reading_time;
    setTimes(newTimes);
    const remainingBM = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainingBM);
  };

  return (
    <div className=" max-w-6xl mx-auto">
      <Header></Header>
      <div className="flex">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleAddTime={handleAddTime}
        ></Blogs>
        <div className="md:w-1/3">
          <SpentTime times={times}></SpentTime>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </div>
  );
}

export default App;
