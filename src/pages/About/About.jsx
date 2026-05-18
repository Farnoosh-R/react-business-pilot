import SquareDecorationBig from "../../components/shared/decoration/SquareDecorationBig";
import Button from "../../components/ui/Button/Button";
import aboutpic from "./assets/images/about.png";
const About = () => {
  return (
    <div id="about" className="page">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between">
          <div className="flex flex-col gap-5">
            <div className="tracking-[20px] text-[var(--text-muted)]">
              Flyza
            </div>
            <h1>درباره ما</h1>
            <p className="leading-12 text-justify">
              آژانس هواپیمایی ما با هدف ارائه تجربه‌ای متفاوت، راحت و مطمئن در
              سفرهای داخلی و خارجی فعالیت خود را آغاز کرده است. ما باور داریم
              سفر فقط جابه‌جایی نیست، بلکه آغاز یک تجربه جدید، کشف فرهنگ‌های
              تازه و ساختن خاطراتی ماندگار است. با تکیه بر تیمی حرفه‌ای و آشنا
              به صنعت گردشگری، تلاش می‌کنیم بهترین خدمات رزرو بلیط هواپیما،
              تورهای مسافرتی، هتل و پشتیبانی سفر را با مناسب‌ترین قیمت و
              بالاترین کیفیت در اختیار شما قرار دهیم. ما همواره در کنار شما
              هستیم تا از لحظه برنامه‌ریزی سفر تا رسیدن به مقصد، آرامش و اطمینان
              را تجربه کنید. هدف ما ساختن سفری امن، سریع و لذت‌بخش برای همه
              مشتریان است.
            </p>
            <Button to={"/contact"} variant="pastel">تماس با ما</Button>
          </div>
          <div className="relative">
            <img className="-z-10" src={aboutpic} alt="" />
            <SquareDecorationBig
              style={{
                bottom: "-30px",
                right: "-37px",
                width: "258px",
                height: "207px",
                zIndex: "10",
                background: "var(--brand-accent)"
              }}
            >
              <div className="text-5xl text-white">10+ مقصد</div>
            </SquareDecorationBig>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
