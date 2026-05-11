import { SquareDecoration } from "../shared/decoration/SquareDecoration";

const Category = () => {
  return (
    <section id="#category">
      <div className="container flex flex-col gap-5 text-center">
        <h6 className="text-[var(--text-secondary)]">دسته بندی ها</h6>
        <h2>ما بهترین خدمات را ارائه می‌دهیم</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-20 place-items-center">
          <div className="relative flex flex-col w-50 items-center">
            <img
              className="w-auto h-auto"
              src="../../src/assets/images/layout/gear.png"
              alt=""
            />
            <SquareDecoration style={{ top: "30px", right: "0px" }} />
            <div className="flex flex-col gap-4 mt-10">
              <h6>سفارشی سازی</h6>
              <div>
                ما خدمات هوانوردی برون‌سپاری شده را برای مشتریان نظامی ارائه
                می‌دهیم
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-4 items-center">
            <img
              className="w-auto h-auto"
              src="../../src/assets/images/layout/mic.png"
              alt=""
            />
            <SquareDecoration style={{ top: "-10px", right: "10px" }} />
            <h6>سفارشی سازی</h6>
          </div>
          <div className="relative flex flex-col gap-4 items-center">
            <img
              className="w-auto h-auto"
              src="../../src/assets/images/layout/plane.png"
              alt=""
            />
            <SquareDecoration style={{ top: "-10px", right: "40px" }} />
            <h6>سفارشی سازی</h6>
          </div>
          <div className="relative flex flex-col gap-4 items-center">
            <img
              className="w-auto h-auto"
              src="../../src/assets/images/layout/satellite-dish.png"
              alt=""
            />
            <SquareDecoration style={{ top: "30px", right: "-10px" }} />
            <h6>سفارشی سازی</h6>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
