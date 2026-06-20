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
          <Link
            to="https://demo4.farnooshstudio.ir/#/blog/5-%d8%b4%d8%a7%d8%ae%d8%b5-%da%a9%d9%84%db%8c%d8%af%db%8c-%d8%b9%d9%85%d9%84%da%a9%d8%b1%d8%af-%d8%af%d8%b1-%d8%a8%d8%a7%d8%b2%d8%a7%d8%b1%db%8c%d8%a7%d8%a8%db%8c"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
           شاخص کلیدی عملکرد
          </Link>
          <Link
            to="https://demo4.farnooshstudio.ir/#/blog/%d8%aa%d8%b5%d9%85%db%8c%d9%85-%da%af%db%8c%d8%b1%db%8c-%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%da%98%db%8c%da%a9-%d8%af%d8%b1-%d8%b4%d8%b1%d8%a7%db%8c%d8%b7-%d8%b9%d8%af%d9%85-%d9%82%d8%b7%d8%b9%db%8c"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
            استراتژی و برنامه ریزی
          </Link>
          <Link
            to="https://demo4.farnooshstudio.ir/#/blog/%da%86%da%af%d9%88%d9%86%d9%87-%d8%a7%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%da%98%db%8c-%d8%b1%d8%b4%d8%af-%da%a9%d8%b3%d8%a8-%d9%88-%da%a9%d8%a7%d8%b1-%d8%aa%d8%af%d9%88%db%8c%d9%86-%da%a9%d9%86%db%8c%d9%85"
            className="text-gray-300 hover:text-[var(--text-secondary)]"
          >
           تدوین و مدل سازی استراتژی
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
