import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../../services/wordpressApi";
import Button from "../../components/ui/Button/Button";
import { FaTelegramPlane, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineCalendar, HiOutlineTag, HiOutlineUser } from "react-icons/hi";
import baleDark from "../../assets/images/layout/baleDark.png";

const SinglePost = () => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);

  const toJalali = (date) => {
    return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  useEffect(() => {
    getPostBySlug(slug).then((data) => {
      setPost(data[0]);
    });
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div id="single-post" className="page">
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-[var(--brand-muted)] pb-7 mb-5">
          <div className="flex flex-col gap-3">
            <h2 className="mb-4">{post.title.rendered}</h2>
            <div className="flex gap-1">
              <HiOutlineCalendar color="var(--brand-primary" />
              <div className="text-[var(--text-secondary)]">
                {toJalali(post.date)}
              </div>
            </div>
            <div className="flex gap-1">
              <HiOutlineTag color="var(--brand-primary" />
              <div className="text-[var(--text-secondary)]">دسته بندی:</div>
              <div className="text-[var(--text-secondary)]">
                {post.categories}
              </div>
              <div className="text-[var(--brand-muted)] mx-2">|</div>
              <HiOutlineUser color="var(--brand-primary" />
              <div className="text-[var(--text-secondary)]">نویسنده:</div>
              <div className="text-[var(--text-secondary)]">{post.author}</div>
            </div>
            <div
              className="font-bold"
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
              className="line-clamp-3 leading-11"
            />
            <div className="flex items-center gap-5 mt-5">
              <Button to={"/blog"} variant="primary">
                مشاهده همه مقالات
              </Button>
              <div className="flex gap-3 text-[var(--brand-accent)]">
                <a
                  href="https://ble.ir/amiralighorbani2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-4" src={baleDark} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/amiraliqorbani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={18}/>
                </a>
                <a
                  href="https://wa.me/989128939845"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={18}/>
                </a>
              </div>
            </div>
          </div>
          <div>
            {image && (
              <div className="overflow-hidden mx-auto rounded-3xl shadow-brand h-[400px]">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
          className="leading-12"
        />
      </div>
    </div>
  );
};

export default SinglePost;
