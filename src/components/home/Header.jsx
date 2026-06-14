import Button from "../ui/Button/Button";
import { FaPlay } from "react-icons/fa";
import traveller from "../../../src/assets/images/layout/traveller.png"
import plane from "../../../src/assets/images/layout/plane.png"
import marker from "../../../src/assets/images/layout/marker.png"
import decore from "../../../src/assets/images/layout/decore.png"


const Header = () => {
  return (
    <section
      id="header"
      className="relative bg-contain bg-[position:top_right] bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${decore})` }}
    >
      <h1>test</h1>
      <div className="app-container mt-20 flex flex-col lg:flex-row gap-10 scroll-anim" style={{ "--from": "scale(0.9)" }}>
        <img
          className="relative"
          src={traveller}
          alt="traveller"
        />
        <img
          className="absolute right-[43%] top-[10%] w-auto h-auto hidden lg:block"
          src={plane}
          alt="plane"
        />

        <div className="flex flex-col gap-3 mt-20">
          <h5 className="text-[var(--brand-primary)]">
            بهترین مقاصد گردشگری در سراسر جهان
          </h5>
          <h1>سفر کنید، لذت ببرید</h1>
          <div className="flex justify-start -mt-4">
            <img
              className=""
              src={marker}
              alt=""
            />
          </div>
          <h1>و یک زندگی جدید و کامل را تجربه کنید</h1>
          <p className="leading-8">
            دنیا را مانند گذشته کشف کنید، جایی که هر مقصد داستانی جدید را در
            انتظار کشف شدن به ارمغان می‌آورد. سفر بی‌نظیر خود را با تجربیات سفر
            گلچین شده، جواهرات پنهان و ماجراجویی‌های فراموش‌نشدنی که مخصوص شما
            طراحی شده‌اند، برنامه‌ریزی کنید. هوشمندانه‌تر سفر کنید، عمیق‌تر کاوش
            کنید و هر سفر را به خاطره‌ای معنادار و ارزشمند تبدیل کنید.
          </p>
          <div className="flex gap-10 justify-end mt-15">
            <div className="flex gap-4 items-center">
              <div>مشاهده دمو</div>
              <div className="w-[40px] h-[40px] rounded-full bg-[var(--brand-primary)] flex items-center justify-center shadow-lg shadow-red-400/30">
                <FaPlay color="white" size={10} />
              </div>
            </div>
            <Button variant="primary">بیشتر بدانید</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
