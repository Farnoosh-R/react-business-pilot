import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="rounded-4xl w-[314px] overflow-hidden shadow-brand mb-20">
      {image && (
        <div className="h-[350px] overflow-hidden">
          <img
            src={image}
            alt={post.title.rendered}
            className="w-full h-[458px] object-cover"
          />
        </div>
      )}

      <div className="flex flex-col p-4 text-[var(--text-secondary)]">
        <Link to={`/blog/${post.slug}`}>
          <h3>{post.title.rendered}</h3>
        </Link>

        <div
          className="mt-3 leading-7 truncate"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        />
      </div>
    </div>
  );
};

export default PostCard;
