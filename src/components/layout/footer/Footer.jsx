import { FaTelegramPlane, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section id="footer" className="relative border-t border-[var(--brand-muted)] mt-20">
      <div className="container grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_2fr] py-20 text-center">
        <div className="flex flex-col gap-5 text-center justify-center items-center">
          <div className="flex gap-3 justify-center">
            <div className="w-8 h-8 rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--brand-surface)]">
              <a href="#">
                <FaTelegramPlane />
              </a>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-yellow-500 rounded-full shadow-lg flex items-center justify-center">
              <a href="#">
                <FaInstagram color="white" />
              </a>
            </div>
            <div className="w-8 h-8 rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--brand-surface)]">
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <h6>شروع تجربه‌ای جدید با اپ Flyza</h6>
          <div className="flex gap-2 justify-center">
            <a href="#"><img src="../../src/assets/images/layout/googlePlay.png" alt="" /></a>
            <a href="#"><img src="../../src/assets/images/layout/playStore.png" alt="" /></a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h6>دسترسی سریع</h6>
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            صفحه اصلی
          </Link>
          <Link to="/contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            تماس با ما
          </Link>
          <Link to="/about" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            درباره ما
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h6>مطالب</h6>
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            هزینه های خطوط هوایی
          </Link>
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            خطوط هوایی
          </Link>
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            پایین ترین نرخ ها
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h6>شرکت</h6>
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            فرصت های شغلی
          </Link>
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            همکاری با ما
          </Link>
          <Link to="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            تاریخچه
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/">
            <img
              src="../../../../../src/assets/images/logo.png"
              className="w-25 mx-auto"
            />
          </Link>
          <div className="text-[var(--text-secondary)]">
            <div>کشف کن، سفر کن، زندگی کن</div>
            <div>پرواز به مقصدهای رؤیایی</div>
          </div>
        </div>
      </div>
      <div className="copy-right flex gap-1 justify-center h-30 items-center">
        <a href="#" className="text-[var(--brand-primary)]">
          Farnoosh
        </a>
        <div>Designed & Developed by</div>
        <div>|</div>
        <div>2026©</div>
      </div>
      <div className="absolute bottom-0 right-0 w-50 h-50 bg-[var(--brand-glow)] blur-3xl rounded-tl-full pointer-events-none"/>
    </section>
  );
};
export default Footer;
