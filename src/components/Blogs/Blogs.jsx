import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleAddTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h2 className="font-bold text-4xl">Blogs : {blogs.length}</h2>

      {blogs.map((blog) => {
        return (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookmark={handleAddToBookmark}
            handleAddTime={handleAddTime}
          ></Blog>
        );
      })}
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};

export default Blogs;
