import SquareDecorationBig from "../../components/shared/decoration/SquareDecorationBig";
import Button from "../../components/ui/Button/Button";
import aboutpic from "./assets/images/about.png";
import { FaChartLine } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import aboutMe from "./assets/images/aboutme.webp";

const About = () => {
  return (
    <div id="about" className="page flex flex-col gap-20">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between">
          <div
            className="flex flex-col gap-6 scroll-anim"
            style={{ "--from": "translateX(40px)" }}
          >
            <div>
              <div className="text-[var(--text-secondary)]">امیرعلی قربانی</div>
              <h1 className="text-[var(--text-primary-alt)]">درباره من</h1>
            </div>
            <p className="leading-12 text-justify">
              من امیرعلی قربانی هستم. همیشه دوست داشتم در محیطی کار کنم که
              بتوانم یاد بگیرم، رشد کنم و در کنار آن تأثیر مثبتی روی کسب‌وکار
              داشته باشم. به برقراری ارتباط با آدم‌ها، پیدا کردن راه‌حل برای
              چالش‌ها و کار تیمی علاقه دارم و سعی می‌کنم هر کاری را با
              مسئولیت‌پذیری و انرژی بالا انجام دهم. باور دارم که پیشرفت از
              یادگیری مداوم و تلاش مستمر به دست می‌آید و همیشه دنبال فرصت‌هایی
              هستم که بتوانم مهارت‌هایم را توسعه دهم و ارزش بیشتری برای
              مجموعه‌ای که در آن فعالیت می‌کنم ایجاد کنم.
            </p>

            <div className="flex justify-center gap-4 lg:gap-18">
              <div className="flex flex-col gap-4 items-center">
                <FaChartLine color="var(--text-secondary)" size={35} />
                <span className="font-bold">استراتژی های داده محور</span>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <FaUser color="var(--text-secondary)" size={35} />
                <span className="font-bold">رویکرد عملی و اجرایی</span>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <FaBullseye color="var(--text-secondary)" size={35} />
                <span className="font-bold">تمرکز بر نتایج</span>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button to={"/contact"} variant="primary" size="lg">
                رزرو وقت مشاوره{" "}
              </Button>
            </div>
          </div>
          <div
            className="relative scroll-anim"
            style={{ "--from": "translateX(-40px)" }}
          >
            <img className="-z-10" src={aboutMe} alt="" />
            <SquareDecorationBig
              style={{
                bottom: "50px",
                right: "-37px",
                width: "258px",
                height: "126px",
                zIndex: "10",
                background: "var(--brand-accent)",
              }}
            >
              <div className="text-white -mb-7">your business</div>
              <div className="text-5xl text-white">Grow</div>
            </SquareDecorationBig>
          </div>
        </div>
      </div>
      <div className="bg-[var(--brand-primary)] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 place-items-center">
          <div
            className="flex gap-2 items-center scroll-anim"
            style={{ "--from": "translateX(40px)" }}
          >
            <div className="w-16 h-16 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <FaBullseye
                className="text-[var(--text-secondary)] text-xl"
                size={25}
              />
            </div>
            <div className="flex flex-col text-white">
              <h2>50+</h2>
              <span className="text-lg text-[var(--text-muted)]">
                پروژه موفق
              </span>
            </div>
          </div>
          <div
            className="flex gap-3 items-center scroll-anim"
            style={{ "--from": "translateX(80px)" }}
          >
            <div className="w-16 h-16 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <FaUsers
                className="text-[var(--text-secondary)] text-xl"
                size={25}
              />
            </div>
            <div className="flex flex-col text-white">
              <h2>30+</h2>
              <span className="text-lg text-[var(--text-muted)]">
                مشتری راضی
              </span>
            </div>
          </div>
          <div
            className="flex gap-3 items-center scroll-anim"
            style={{ "--from": "translateX(120px)" }}
          >
            <div className="w-16 h-16 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <FaHandshake
                className="text-[var(--text-secondary)] text-xl"
                size={25}
              />
            </div>
            <div className="flex flex-col text-white">
              <h2>250+</h2>
              <span className="text-lg text-[var(--text-muted)]">
                جلسه موفق
              </span>
            </div>
          </div>
          <div
            className="flex gap-3 items-center scroll-anim"
            style={{ "--from": "translateX(160px)" }}
          >
            <div className="w-16 h-16 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <FaAward
                className="text-[var(--text-secondary)] text-xl"
                size={25}
              />
            </div>
            <div className="flex flex-col text-white">
              <h2>10+</h2>
              <span className="text-lg text-[var(--text-muted)]">
                سال تجربه
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <img src={aboutpic} alt="" />
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <div className="text-[var(--text-secondary)]">تجربه</div>
              <h1 className="text-[var(--text-primary-alt)]">
                سفری در مسیر رشد
              </h1>
            </div>
            <div className="text-[var(--text-accent)]">
              در این سال ها، با تمرکز بر استراتژی های رشد و توسعه پایدار، به کسب
              و کار ها کمک کرده ام تا مسیر موفقیت را سریع تر طی کنند.
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
              <div className="w-full flex flex-col gap-3 p-5 border border-[var(--border)] shadow-lg rounded-3xl">
                <h2 className="text-[var(--text-secondary)]">1392</h2>
                <div className="flex flex-col gap-2">
                  <h6>شروع فعالیت</h6>
                  <div className="text-[var(--text-accent)]">
                    آغاز مسیر حرفه‌ای در حوزه مشاوره و توسعه کسب‌وکار
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 p-5 border border-[var(--border)] shadow-lg rounded-3xl">
                <h2 className="text-[var(--text-secondary)]">1395</h2>
                <div className="flex flex-col gap-2">
                  <h6>توسعه تیم و خدمات</h6>
                  <div className="text-[var(--text-accent)]">
                    گسترش خدمات مشاوره‌ای و همکاری با کسب‌وکارهای مختلف
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 p-5 border bg-[var(--brand-primary)] border-[var(--border)] shadow-lg rounded-3xl">
                <h2 className="text-[var(--text-secondary)]">1398</h2>
                <div className="flex flex-col gap-2 text-white">
                  <h6>رشد و اثرگذاری بیشتر</h6>
                  <div className="text-[var(--text-accent)]">
                    اجرای پروژه‌های بزرگ و ایجاد نتایج قابل اندازه‌گیری
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3 p-5 border border-[var(--border)] shadow-lg rounded-3xl">
                <h2 className="text-[var(--text-secondary)]">1402</h2>
                <div className="flex flex-col gap-2">
                  <h6>اعتماد و موفقیت پایدار</h6>
                  <div className="text-[var(--text-accent)]">
                    دریافت بازخوردهای مثبت و ساختن روابط بلندمدت
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
