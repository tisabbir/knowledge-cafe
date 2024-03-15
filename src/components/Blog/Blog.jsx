import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";
const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_time,
    reading_time,
    hash_tags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-4" src={cover}></img>
      <div className="flex justify-between items-center space-y-4">
        <div className="flex items-center gap-2">
          <img className="w-14 rounded-full h-14" src={author_img} alt="" />
          <div>
            <h2 className="text-2xl">{author}</h2>
            <p>{posted_time}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read </span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-600 text-2xl "
          >
            <IoBookmarksOutline></IoBookmarksOutline>
          </button>
        </div>
      </div>
      <h2 className="text-2xl my-3">Title : {title} </h2>
      <div className="flex gap-2">
        {hash_tags.map((hash_tag, idx) => (
          <span key={idx}>
            <a href="">{hash_tag}</a>
          </span>
        ))}
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};

export default Blog;
