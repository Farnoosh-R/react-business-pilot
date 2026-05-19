import { DotDecoration } from "../shared/decoration/DotDecoration";
import { SquareDecoration } from "../shared/decoration/SquareDecoration";
import SquareDecorationBig from "../shared/decoration/SquareDecorationBig";
import gear from "../../../src/assets/images/layout/gear.png";
import mic from "../../../src/assets/images/layout/mic.png";
import plane from "../../../src/assets/images/layout/plane.png";
import satelliteDish from "../../../src/assets/images/layout/satellite-dish.png";
import { FaMedal } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
const Category = () => {
  return (
    <section id="#category" className="relative">
      <DotDecoration style={{ top: "0px", right: "100px" }} />
      <div className="app-container flex flex-col gap-5 text-center">
        <h6 className="text-[var(--text-secondary)]">دسته بندی ها</h6>
        <h2>ما بهترین خدمات را ارائه می‌دهیم</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 mt-20 place-items-center">
          <div
            className="relative flex flex-col gap-4 items-center mb-5 scroll-anim"
            style={{ "--from": "translateX(40px)" }}
          >
            <div className="relative">
              {/* <img className="" src={gear} alt="" /> */}
              <div><FaMedal style={{color: "var(--brand-accent)"}} size={50}/></div>
              <SquareDecoration style={{ top: "-15px", right: "-20px", width: "60px", height: "60px" }} />
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <h6>رتبه یک سفر</h6>
              <div>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col gap-4 items-center mb-5 scroll-anim"
            style={{ "--from": "translateX(80px)" }}
          >
            <div className="relative">
              {/* <img className="" src={mic} alt="" /> */}
              <div><RiTeamFill style={{color: "var(--brand-accent)"}} size={50}/></div>
              <SquareDecoration style={{ bottom: "-10px", right: "-20px", width: "60px", height: "60px" }} />
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <h6>رویدادهای محلی</h6>
              <div>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col gap-4 items-center mb-5 shadow-none md:shadow-2xl md:p-10 rounded-4xl z-10 scroll-anim"
            style={{ "--from": "translateX(100px)" }}
          >
            <div className="relative">
              {/* <img className="" src={plane} alt="" /> */}
              <div><BiSupport style={{color: "var(--brand-accent)"}} size={50}/></div>
              <SquareDecoration style={{ top: "-15px", left: "-20px", width: "60px", height: "60px" }} />
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <h6>بهترین پروازها</h6>
              <div>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </div>
            </div>
            <div className="hidden md:block"><SquareDecorationBig style={{ bottom: "-30px", left: "-25px" }} /></div>
          </div>
          <div
            className="relative flex flex-col gap-4 items-center mb-5 scroll-anim"
            style={{ "--from": "translateX(120px)" }}
          >
            <div className="relative">
              {/* <img className="" src={satelliteDish} alt="" /> */}
              <div><FaHistory style={{color: "var(--brand-accent)"}} size={50}/></div>
              <SquareDecoration style={{ bottom: "-10px", left: "-20px", width: "60px", height: "60px" }} />
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <h6>پیش بینی آب و هوا</h6>
              <div>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
