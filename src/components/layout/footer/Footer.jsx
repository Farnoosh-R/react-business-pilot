//   FaYoutube,
import {
  FaTelegramPlane,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../../src/assets/images/logo.png";
import logoLight from "../../../assets/images/layout/logo-light.png";
import bale from "../../../assets/images/layout/bale.png"

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
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[var(--brand)] hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]"
              />
            </Link>
            <a
              href="https://www.linkedin.com/in/amiraliqorbani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={18}
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[var(--brand)] hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]"
              />
            </a>
            <Link to={"#"}>
              <FaInstagram
                size={18}
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[var(--brand)] hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]"
              />
            </Link>
            <a
              href="https://wa.me/989128939845"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={18}
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[var(--brand)] hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]"
              />
            </a>
            <a
              href="https://ble.ir/amiralighorbani2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bale} className="w-4 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[var(--brand)] hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]" alt="bale" />
              {/* <FaWhatsapp
                size={18}
                className="text-white hover:text-[var(--text-secondary)]"
              /> */}
            </a>
            <Link to={"#"}>
              <FaYoutube
                size={18}
                className="text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[var(--brand)] hover:text-white hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]"
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
            خدمات
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
          <a
            href="https://demo4.farnooshstudio.ir/#/blog/5-%D8%B4%D8%A7%D8%AE%D8%B5-%DA%A9%D9%84%DB%8C%D8%AF%DB%8C-%D8%B9%D9%85%D9%84%DA%A9%D8%B1%D8%AF-%D8%AF%D8%B1-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1%DB%8C%D8%A7%D8%A8%DB%8C"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
           شاخص کلیدی عملکرد
          </a>
          <a
            href="https://demo4.farnooshstudio.ir/#/blog/%D8%AA%D8%B5%D9%85%DB%8C%D9%85-%DA%AF%DB%8C%D8%B1%DB%8C-%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%DA%98%DB%8C%DA%A9-%D8%AF%D8%B1-%D8%B4%D8%B1%D8%A7%DB%8C%D8%B7-%D8%B9%D8%AF%D9%85-%D9%82%D8%B7%D8%B9%DB%8C"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            استراتژی و برنامه ریزی
          </a>
          <a
            href="https://demo4.farnooshstudio.ir/#/blog/%DA%86%DA%AF%D9%88%D9%86%D9%87-%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%DA%98%DB%8C-%D8%B1%D8%B4%D8%AF-%DA%A9%D8%B3%D8%A8-%D9%88-%DA%A9%D8%A7%D8%B1-%D8%AA%D8%AF%D9%88%DB%8C%D9%86-%DA%A9%D9%86%DB%8C%D9%85"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
           تدوین و مدل سازی استراتژی
          </a>
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
            to="/contact"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            تاریخچه
          </Link>
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <Link href="/about">
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
