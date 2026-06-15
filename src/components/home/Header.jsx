import Button from "../ui/Button/Button";
import traveller from "../../../src/assets/images/layout/traveller.png";
import plane from "../../../src/assets/images/layout/plane.png";
import marker from "../../../src/assets/images/layout/marker.png";
import decore from "../../../src/assets/images/layout/decore.png";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  return (
    <section id="header" className="relative min-h-screen">
      <div
        className="app-container mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5 scroll-anim"
        style={{ "--from": "scale(0.9)" }}
      >
        <div className="relative">
          <img
            className="lg:absolute lg:-right-37 w-full lg:w-[700px] max-w-none rounded-tl-[200px]"
            src={traveller}
            alt="traveller"
          />
        </div>

        <div className="flex flex-col gap-3 mt-20">
          <h5 className="text-[var(--brand-secondary)]">
            مسیر رشد کسب و کار شما، با استراتژی درست آغاز می شود
          </h5>
          <div className="flex flex-col gap-4 text-[var(--brand-primary)]">
            <h1>کمک می کنم کسب و کار شما</h1>
            <h1>هوشمندانه رشد کند</h1>
          </div>
          <p className="leading-8 text-[var(--text-secondary)]">
            من با ارائه راهکارهای استراتژیک در حوزه توسعه کسب و کار، بازاریابی،
            مدل سازی و بهینه سازی فرآیندها به شما کمک می کنم تصمیم های بهتر
            بگیرید و سریع تر به اهداف خود برسید.
          </p>
          <div className="flex gap-10 justify-end mt-15">
            <div className="flex gap-4 items-center">
              <Button variant="primary" size="lg">دریافت مشاوره رایگان</Button>
              <Button variant="primary" btnType="outline" size="lg">
                <div className="border border-[var(--text-secondary)] p-2 ml-3 rounded-full"><FaPlay size={12}/></div>
                درباره من بیشتر بدانید
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
