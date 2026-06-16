import SwiperSlider from "../ui/Slider/SwiperSlider";
import { MdArticle } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEco } from "react-icons/md";
import msg from "../../../src/assets/images/layout/msg.png"
import slide1 from "../../../src/assets/images/layout/slide1.png"

const Testimonials = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "شرکت فناوری اطلاعات",
      description:
        "همکاری با آقای امیری دیدگاه ما را نسبت به بازار و مشتریان کاملا تغییر داد. راهکارهای ارائه شده تاثیر مستقیم بر رشد فروش و بهبود فرآیند های ما داشت. ",
      buttonText: "Explore",
    },
    {
      id: 1,
      image: slide1,
      title: "شرکت فناوری اطلاعات",
      description:
        "همکاری با آقای امیری دیدگاه ما را نسبت به بازار و مشتریان کاملا تغییر داد. راهکارهای ارائه شده تاثیر مستقیم بر رشد فروش و بهبود فرآیند های ما داشت. ",
      buttonText: "Explore",
    },
    {
      id: 1,
      image: slide1,
      title: "شرکت فناوری اطلاعات",
      description:
        "همکاری با آقای امیری دیدگاه ما را نسبت به بازار و مشتریان کاملا تغییر داد. راهکارهای ارائه شده تاثیر مستقیم بر رشد فروش و بهبود فرآیند های ما داشت. ",
      buttonText: "Explore",
    },
  ];

  return (
    <section id="testimonials">
      <div className="app-container">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h6 className="text-[var(--text-secondary)]">نظرات مشتریان</h6>
            <h2>نظر شما درباره</h2>
            <h2>Flyza</h2>
            <div className="flex gap-3">
              <div className="bg-[var(--brand-muted)] p-3 rounded-full">
                <FaTelegramPlane size={24} style={{ color: "var(--brand-accent)" }}/>
              </div>
              <div className="bg-[var(--brand-muted)] p-3 rounded-full">
                <MdArticle size={24} style={{ color: "var(--brand-accent)" }}/>
              </div>
              <div className="bg-[var(--brand-muted)] p-3 rounded-full">
                <MdEco size={24} style={{ color: "var(--brand-accent)" }}/>
              </div>
                  <div className="bg-[var(--brand-muted)] p-3 rounded-full">
                <MdEco size={24} style={{ color: "var(--brand-accent)" }}/>
              </div>
            </div>
            <img
              className="opacity-5 hidden lg:block scale-x-[-1] -mt-25"
              src={msg}
              alt=""
            />
          </div>
          <SwiperSlider items={slides} />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
