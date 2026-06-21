import Button from "../ui/Button/Button";
import traveller from "../../../src/assets/images/layout/traveller.webp";
import decore from "../../../src/assets/images/layout/decore.png";
import { FaPlay } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <section id="header" className="relative">
      <div
        className="app-container mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 scroll-anim"
        style={{ "--from": "scale(0.9)" }}
      >
        <div className="relative">
          <img
            className="lg:absolute lg:-right-37 w-full h-full object-cover lg:w-[700px] max-w-none rounded-tl-[200px]"
            src={traveller}
            alt="traveller"
          />
        </div>

        <div className="flex flex-col gap-7 mt-15">
          <h5 className="text-[var(--brand-secondary)]">
            مسیر رشد کسب و کار شما، با استراتژی درست آغاز می شود
          </h5>
          <div className="flex flex-col gap-4 text-[var(--brand-primary)]">
            <h1>کمک می کنم کسب و کار شما</h1>
            <h1>هوشمندانه رشد کند</h1>
          </div>
          <p className="leading-8 text-[var(--text-accent)]">
            من با ارائه راهکارهای استراتژیک در حوزه توسعه کسب و کار، بازاریابی،
            مدل سازی و بهینه سازی فرآیندها به شما کمک می کنم تصمیم های بهتر
            بگیرید و سریع تر به اهداف خود برسید.
          </p>
          <div className="flex gap-10 justify-end">
            <div className="flex gap-4 items-center">
              <Button to={'/contact'} variant="primary" size="lg">دریافت مشاوره رایگان</Button>
              <Button variant="secondary" btnType="outline" size="lg" >
                <div className="border border-[var(--text-secondary)] group-hover:border-white p-2 ml-3 rounded-full"><FaPlay size={12} className="text-current"/></div>
                درباره من بیشتر بدانید
              </Button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mt-4">
            <div className="flex flex-col gap-4 items-center">
              <FaUser size={35} color="var(--text-secondary)"/>
              <span className="font-bold text-[var(--text-primary-alt)]">تجربه در صنایع مختلف</span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <FaChartLine size={35} color="var(--text-secondary)"/>
              <span className="font-bold text-[var(--text-primary-alt)]">تمرکز بر رشد قابل اندازه گیری</span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <FaBullseye size={35} color="var(--text-secondary)"/>
              <span className="font-bold text-[var(--text-primary-alt)]">راهکارهای عملی و قابل اجرا</span>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
