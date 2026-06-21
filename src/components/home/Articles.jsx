import { useEffect, useState } from "react";
import { getLatestPosts, getPosts } from "../../services/wordpressApi";
import PostCard from "../blog/PostCard";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getLatestPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section id="articles" className="">
      <div className="app-container flex flex-col gap-5 relative">
        <div className="text-center">
          <h6 className="text-[var(--text-secondary)]">مقالات و دیدگاه ها</h6>
          <h2 className="text-[var(--text-primary-alt)]">آخرین مطالب و تحلیل ها</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 place-items-center">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Articles;
