//   FaYoutube,
import {
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import googlePlay from "../../../../src/assets/images/layout/googlePlay.png";
import playStore from "../../../../src/assets/images/layout/playStore.png";
import logo from "../../../../src/assets/images/logo.png";
import logoLight from "../../../assets/images/layout/logo-light.png";

const Footer = () => {
  return (
    <section
      id="footer"
      className="relative border-t border-[var(--brand-muted)] bg-[var(--brand-primary)] mt-20"
    >
      <div className="app-container grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_2fr] py-12  justify-items-center">
        <div className="flex flex-col gap-4 mb-5 text-right">
          <div>
            <h5 className="text-white">امیرعلی قربانی</h5>
            <div className="text-[var(--text-secondary)]">
              مشاور توسعه کسب و کار و استراتژی
            </div>
          </div>
          <div className="text-gray-300">
            همراه شما در مسیر رشد، نوآوری و خلق ارزش پایدار
          </div>
          <div className="flex gap-3">
            <Link to={"#"}>
              <FaTelegramPlane
                size={18}
                className="text-white hover:text-[var(--text-secondary)]"
              />
            </Link>
            <Link to={"#"}>
              <FaLinkedinIn
                size={18}
                className="text-white hover:text-[var(--text-secondary)]"
              />
            </Link>
            <Link to={"#"}>
              <FaInstagram
                size={18}
                className="text-white hover:text-[var(--text-secondary)]"
              />
            </Link>
            <Link to={"#"}>
              <FaWhatsapp
                size={18}
                className="text-white hover:text-[var(--text-secondary)]"
              />
            </Link>
            <Link to={"#"}>
              <FaYoutube
                size={18}
                className="text-white hover:text-[var(--text-secondary)]"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <h6 className="text-white">دسترسی سریع</h6>
          <Link
            to="/"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            خانه
          </Link>
          <Link
            to="/services"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            خذمات
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            درباره من
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            تماس با ما
          </Link>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <h6 className="text-white">مقالات</h6>
          <Link
            to="/"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            توسعه کسب و کار
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            استراتژی و برنامه ریزی
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            مدل سازی کسب و کار
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            بازاریابی و برندینگ
          </Link>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <h6 className="text-white">شرکت</h6>
          <Link
            to="/"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            فرصت های شغلی
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            همکاری با ما
          </Link>
          <Link
            to="/"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            تاریخچه
          </Link>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <Link href="/">
            <img src={logoLight} className="w-25 mx-auto" />
          </Link>
          <div className="text-white text-center">
            <div>از ایده تا توسعه، کنار شما</div>
            <div>هر کسب‌ و کار، شایسته رشد است</div>
          </div>
        </div>
      </div>
      <div className="copy-right flex gap-1 justify-center h-24 items-center text-gray-500">
        <a
          href="https://farnooshstudio.ir"
          target="_blank"
          className="text-gray-500"
        >
          Farnoosh
        </a>
        <div>Designed & Developed by</div>
        <div>|</div>
        <div>2026©</div>
      </div>
      {/* <div className="absolute bottom-0 right-0 w-50 h-50 bg-[var(--brand-glow)] blur-3xl rounded-tl-full pointer-events-none" /> */}
    </section>
  );
};
export default Footer;
