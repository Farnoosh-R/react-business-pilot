import Button from "../../components/ui/Button/Button";
import servicesBanner from "./assets/images/servicesBanner.png";

import { FaComments } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services" className="page flex flex-col gap-20">
      <div
        className="relative flex justify-center text-center py-20 h-[500px] scroll-anim"
        // style={{ "--from": "scale(0.9)" }}
        style={{
          backgroundImage: `url(${servicesBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          "--from": "scale(0.9)",
        }}
      >
        <div className="absolute inset-0 bg-[var(--brand-primary)]/70"></div>

        <div className="flex flex-col items-center gap-7 z-10">
          <div>
            <div className="tracking-[20px] text-[var(--text-secondary)]">
              خدمات ما
            </div>
            <h1 className="text-white">راهکارهای تخصصی برای شما</h1>
          </div>
          <div className="text-white text-lg">
            با ترکیب دانش استراتژی، تجربه اجرایی و شناخت بازار، به شما کمک می
            کنیم تصمیم های درست بگیرید، رشد کنید و جلوتر از رقبا باشید.
          </div>
          <Button to={'/contact'} variant="secondary" btnType="outline" size="lg">
            رزور جلسه مشاوره
          </Button>
          <div className="text-4xl text-white tracking-[10px] font-bold">
            9876543 - 0912
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-20">
        <div className="app-container">
          <div className="text-center">
            <div className="tracking-[20px] text-[var(--text-secondary)]">
              خذمات
            </div>
            <h1 className="text-[var(--text-primary-alt)]">حوزه‌های تخصصی</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <Link
              to={"#"}
              className="hover:bg-[var(--brand-surface)] shadow-lg rounded-3xl scroll-anim"
              style={{ "--from": "translateX(50px)" }}
            >
              <div className="flex flex-col items-center text-center p-7 gap-7">
                <FaComments color="var(--text-secondary)" size={40} />
                <h5>مشاوره کسب و کار</h5>
                <div>
                  تحلیل وضعیت فعلی، رفع چالش ها و ارائه راهکارهای کاربردی برای
                  بهبود عملکرد و بهره وری
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[var(--text-accent)]">
                    مشاهده جزئیات خدمت
                  </span>
                  <FaLongArrowAltLeft color="var(--text-secondary)" size={15} />
                </div>
              </div>
            </Link>
            <Link
              to={"#"}
              className="hover:bg-[var(--brand-surface)] shadow-lg rounded-3xl scroll-anim" style={{ "--from": "translateX(100px)" }}
            >
              <div className="flex flex-col items-center text-center p-7 gap-7">
                <FaChessKnight className="text-blue-600" size={40} />
                <h5>طراحی استراتژی</h5>
                <div>
                  طراحی استراتژی های عملیاتی و رقابتی متناسب با اهداف و شرایط
                  منحصر به فرد کسب و کار شما
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[var(--text-accent)]">
                    مشاهده جزئیات خدمت
                  </span>
                  <FaLongArrowAltLeft className="text-blue-600" size={15} />
                </div>
              </div>
            </Link>
            <Link
              to={"#"}
              className="hover:bg-[var(--brand-surface)] shadow-lg rounded-3xl scroll-anim" style={{ "--from": "translateX(150px)" }}
            >
              <div className="flex flex-col items-center text-center p-7 gap-7 ">
                <FaChartLine className="text-green-600" size={40} />
                <h5>توسعه بازار</h5>
                <div>
                  شناسایی فرصت های جدید و گسترش سهم بازار برای رشد پایدار و
                  افزایش سودآوری
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[var(--text-accent)]">
                    مشاهده جزئیات خدمت
                  </span>
                  <FaLongArrowAltLeft className="text-green-600" size={15} />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-[var(--brand-secondary)] py-7">
          <div className="app-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
              <div className="bg-white/10 backdrop-blur-xl border p-4 border-white/20 rounded-2xl">
                <h2 className="text-white tracking-[15px]">9876543 - 0912</h2>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border p-4 border-white/20 rounded-2xl">
                <div className="text-white text-[30px] font-light tracking-[15px]">
                  ghorbani@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
