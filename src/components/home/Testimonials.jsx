import SwiperSlider from "../ui/Slider/SwiperSlider";
import { MdArticle } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEco } from "react-icons/md";
import slide1 from "../../../src/assets/images/layout/slide1.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import msg2 from '../../assets/images/layout/msg2.png'

const Testimonials = () => {
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "شرکت فناوری اطلاعات",
      description: "همکاری با آقای قربانی دیدگاه ما را نسبت به بازار و رفتار مشتریان به شکل قابل توجهی تغییر داد. راهکارهای ارائه‌شده توسط ایشان تاثیر مستقیم و قابل اندازه‌گیری بر رشد فروش و افزایش بهره‌وری تیم ما داشت. همچنین باعث شد فرآیندهای داخلی کسب‌وکار ما ساختارمندتر، سریع‌تر و کم‌هزینه‌تر اجرا شوند. در مجموع این همکاری مسیر تصمیم‌گیری‌های ما را حرفه‌ای‌تر کرد و به بهبود نتایج کلی مجموعه منجر شد.",
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
          <div className="flex flex-col gap-7 mb-10">
            <div>
              <h6 className="text-[var(--text-secondary)]">نظرات مشتریان</h6>
              <div className="flex flex-col gap-2 text-[var(--text-primary-alt)]">
                <h2>نظرات مدیران و</h2>
                <h2>صاحبان کسب‌ و کار</h2>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                to={"#"}
                className="group bg-[var(--brand-muted)] p-3 rounded-full transition-all duration-300 hover:bg-[var(--brand-accent)] hover:-translate-y-1 hover:shadow-lg"
              >
                <FaWhatsapp
                  size={20}
                  className="text-[var(--brand-accent)] transition-colors duration-300 group-hover:text-white"
                />
              </Link>
              <Link
                to={"#"}
                className="group bg-[var(--brand-muted)] p-3 rounded-full transition-all duration-300 hover:bg-[var(--brand-accent)] hover:-translate-y-1 hover:shadow-lg"
              >
                <FaTelegramPlane
                  size={20}
                  className="text-[var(--brand-accent)] transition-colors duration-300 group-hover:text-white"
                />
              </Link>
              <Link
                to={"#"}
                className="group bg-[var(--brand-muted)] p-3 rounded-full transition-all duration-300 hover:bg-[var(--brand-accent)] hover:-translate-y-1 hover:shadow-lg"
              >
                <FaInstagram
                  size={20}
                  className="text-[var(--brand-accent)] transition-colors duration-300 group-hover:text-white"
                />
              </Link>
              <Link
                to={"#"}
                className="group bg-[var(--brand-muted)] p-3 rounded-full transition-all duration-300 hover:bg-[var(--brand-accent)] hover:-translate-y-1 hover:shadow-lg"
              >
                <FaLinkedin
                  size={20}
                  className="text-[var(--brand-accent)] transition-colors duration-300 group-hover:text-white"
                />
              </Link>
              <Link
                to={"#"}
                className="group bg-[var(--brand-muted)] p-3 rounded-full transition-all duration-300 hover:bg-[var(--brand-accent)] hover:-translate-y-1 hover:shadow-lg"
              >
                <FaYoutube
                  size={20}
                  className="text-[var(--brand-accent)] transition-colors duration-300 group-hover:text-white"
                />
              </Link>
            </div>
            <img
              className=" hidden lg:block w-[90%] -mt-18 -z-1"
              src={msg2}
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
