import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const PostCard = ({ post }) => {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

const toJalali = (date) => {
  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

  return (
    <Link to={`/blog/${post.slug}`}>
    <div className="rounded-4xl  overflow-hidden shadow-brand mb-20">
      {image && (
        <div className="h-[260px] overflow-hidden">
          <img
            src={image}
            alt={post.title.rendered}
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-col gap-2 p-4 text-[var(--text-primary-alt)]">
        
          <h3 className="truncate w-[355px]">{post.title.rendered}</h3>
        

        <div className="text-[var(--text-accent)]">{toJalali(post.date)}</div>

        <div className="flex items-center gap-1 mr-auto text-[var(--text-primary-alt)]">
          <span>مطالعه بیشتر</span>
          <FaLongArrowAltLeft />
        </div>

        {/* <div
          className="mt-3 leading-7 truncate text-[var(--text-accent)]"
          dangerouslySetInnerHTML={{
            __html: post.excerpt.rendered,
          }}
        /> */}
      </div>
    </div>
    </Link>
  );
};

export default PostCard;
