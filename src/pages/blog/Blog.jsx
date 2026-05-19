import { useEffect, useState } from "react";
import { getPosts } from "../../services/wordpressApi";
import PostCard from "../../components/blog/PostCard";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div id="blog" className="page">
      <div className="app-container">
        <h1 className="mb-5">مقالات</h1>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-4">
        
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        
      </div>
      </div>
    </div>
  );
};
export default Blog;
