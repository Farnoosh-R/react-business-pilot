import { useEffect, useState } from "react";
import { getLatestPosts, getPosts } from "../../services/wordpressApi";
import PostCard from "../blog/PostCard";
import decorewhippy from "../../../src/assets/images/layout/decorewhippy.png"

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
        <img src={decorewhippy} alt="" className="hidden md:block w-25 absolute right-17 top-40 -z-1"/>
        <div className="text-center">
          <h6 className="text-[var(--text-secondary)]">مقالات</h6>
          <h2>پر بازدیدترین مقالات</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 place-items-center">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Articles;
