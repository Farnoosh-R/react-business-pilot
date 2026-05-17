import { DotDecoration } from "../shared/decoration/DotDecoration";
import { SquareDecoration } from "../shared/decoration/SquareDecoration";
import SquareDecorationBig from "../shared/decoration/SquareDecorationBig";

const Category = () => {
  return (
    <section id="#category" className="relative">
      <DotDecoration style={{top: "0px", right: "100px"}}/>
      <div className="app-container flex flex-col gap-5 text-center">
        <h6 className="text-[var(--text-secondary)]">دسته بندی ها</h6>
        <h2>ما بهترین خدمات را ارائه می‌دهیم</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-20 place-items-center">
          <div className="relative flex flex-col w-50 items-center scroll-anim" style={{ "--from": "translateX(40px)" }}>
            <img
              className="w-auto h-auto"
              src="../../src/assets/images/layout/gear.png"
              alt=""
            />
            <SquareDecoration style={{ top: "30px", right: "60px" }} />
            <div className="flex flex-col gap-4 mt-10">
              <h6>سفارشی سازی</h6>
              <div>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-4 w-50 items-center scroll-anim" style={{ "--from": "translateX(80px)" }}>
            <img
              className="w-auto h-auto"
              src="../../src/assets/images/layout/mic.png"
              alt=""
            />
            <SquareDecoration style={{ top: "-10px", right: "60px" }} />
                  <div className="flex flex-col gap-4 mt-10">
              <h6>رویدادهای محلی</h6>
              <div>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </div>
            </div>
          </div>
          <div className="relative flex flex-col md:w-70 gap-4 items-center shadow-brand rounded-4xl p-10 z-10 scroll-anim" style={{ "--from": "translateX(100px)" }}>
            <img
              className="w-auto h-auto"
              src="../../src/assets/images/layout/plane.png"
              alt=""
            />
            <SquareDecoration style={{ top: "35px", right: "120px" }} />
                  <div className="flex flex-col gap-4 mt-10">
              <h6>بهترین پروازها</h6>
              <div>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </div>
            </div>
            <SquareDecorationBig style={{ bottom: "-30px", left: "-25px" }}/>
          </div>
          <div className="relative flex flex-col w-50 gap-4 items-center scroll-anim" style={{ "--from": "translateX(120px)" }}>
            <img
              className="w-auto h-auto"
              src="../../src/assets/images/layout/satellite-dish.png"
              alt=""
            />
            <SquareDecoration style={{ top: "30px", right: "60px" }} />
                  <div className="flex flex-col gap-4 mt-10">
              <h6>پیش بینی آب و هوا</h6>
              <div>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
