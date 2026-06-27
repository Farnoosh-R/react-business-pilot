import { DotDecoration } from "../shared/decoration/DotDecoration";
import SquareDecorationBig from "../shared/decoration/SquareDecorationBig";
import { FaMedal } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";

const Category = () => {
  return (
    <section id="#category" className="relative ">
      <DotDecoration style={{ top: "0px", right: "100px" }} />
      <div className="app-container flex flex-col gap-5 text-center">
        <h6 className="text-[var(--text-secondary)]">خدمات من</h6>
        <h2 className="text-[var(--text-primary-alt)]">
          راهکارهای تخصصی برای رشد پایدار کسب و کار شما
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-7 mt-20 place-items-center">
          <div
            className="relative flex flex-col items-center gap-3 mb-5 scroll-anim"
            style={{ "--from": "translateX(40px)" }}
          >
            <div className="relative">
              <div>
                <FaMedal
                  style={{ color: "var(--brand-secondary)" }}
                  size={50}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[var(--text-primary-alt)]">
                بهینه سازی فرآیندها
              </h6>
              <div className="text-[var(--text-accent)]">
                بهبود فرآیندها و سیستم برای افزایش بهره وری
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col gap-3 items-center mb-5 scroll-anim"
            style={{ "--from": "translateX(60px)" }}
          >
            <div className="relative">
              <div>
                <RiTeamFill
                  style={{ color: "var(--brand-secondary)" }}
                  size={50}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[var(--text-primary-alt)]">
                بازاریابی و برندینگ
              </h6>
              <div className="text-[var(--text-accent)]">
                استراتژی بازاریابی و برندینگ و ارتباط موثر با مشتریان
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col gap-3 items-center mb-5 scroll-anim"
            style={{ "--from": "translateX(80px)" }}
          >
            <div className="relative">
              <div>
                <BiSupport
                  style={{ color: "var(--brand-secondary)" }}
                  size={50}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[var(--text-primary-alt)]">
                مدل سازی کسب و کار
              </h6>
              <div className="text-[var(--text-accent)]">
                طراحی مدل کسب و کار، ارزش پیشنهادی و ساختار درآمدی
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col gap-3 items-center mb-5 scroll-anim"
            style={{ "--from": "translateX(100px)" }}
          >
            <div className="relative">
              <div>
                <FaHistory
                  style={{ color: "var(--brand-secondary)" }}
                  size={50}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[var(--text-primary-alt)]">
                استراتژی و برنامه ریزی
              </h6>
              <div className="text-[var(--text-accent)]">
                طراحی استراتژی های عملیاتی و اجرایی اهداف سازمان
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col gap-3 items-center mb-5 scroll-anim"
            style={{ "--from": "translateX(120px)" }}
          >
            <div className="relative">
              <div>
                <FaChartLine
                  style={{ color: "var(--brand-secondary)" }}
                  size={50}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[var(--text-primary-alt)]">
                توسعه کسب و کار
              </h6>
              <div className="text-[var(--text-accent)]">
                تحلیل بازار، شناسایی فرصت ها و طراحی مسیر رشد درآمد
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col items-center gap-3 mb-5 scroll-anim"
            style={{ "--from": "translateX(140px)" }}
          >
            <div className="relative">
              <div>
                <GrMoney
                  style={{ color: "var(--brand-secondary)" }}
                  size={50}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[var(--text-primary-alt)]">
                مدیریت مالی و سرمایه‌گذاری
              </h6>
              <div className="text-[var(--text-accent)]">
                تحلیل مالی، بودجه‌بندی و مدیریت جریان نقدی برای رشد
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
