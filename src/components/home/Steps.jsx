import { FaRegSquareFull } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { MdEco } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import stepsTraveller from "../../../src/assets/images/layout/steps-traveller.jpg"
import rome from "../../../src/assets/images/layout/rome.png"
import progressbar from "../../../src/assets/images/layout/progressbar.png"


const Steps = () => {
  return (
    <section id="steps">
      <div className="app-container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="scroll-anim mb-5" style={{ "--from": "translateX(100px)" }}>
            <h6 className="text-[var(--text-secondary)]">چند گام ساده</h6>
            <h2 className="leading-16">سفر بعدی خود را</h2>
            <h2>در ۳ مرحله آسان رزرو کنید</h2>
            <div className="flex flex-col gap-7 mt-8 w-[70%]">
              <div className="flex gap-3 items-center">
                <div className="bg-[var(--brand-secondary)] p-3 rounded-lg">
                  <FaRegSquareFull color="white" size={20} />
                </div>
                <div>
                  <h6 className="text-[var(--text-secondary)]">انتخاب مقصد</h6>
                  <div className="text-[var(--text-secondary)]">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-[var(--brand-primary)] p-3 rounded-lg">
                  <MdPool color="white" size={20} />
                </div>
                <div>
                  <h6 className="text-[var(--text-secondary)]">پرداخت</h6>
                  <div className="text-[var(--text-secondary)]">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-[var(--brand-accent)] p-3 rounded-lg">
                  <MdDirectionsCar color="white" size={20} />
                </div>
                <div>
                  <h6 className="text-[var(--text-secondary)]">فرودگاه</h6>
                  <div className="text-[var(--text-secondary)]">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="scroll-anim" style={{ "--from": "translateX(-100px)" }}>
            <div className="relative rounded-3xl border border-[var(--brand-muted)] p-4 !bg-white h-fit shadow-brand">
            <div className="absolute -z-10 -top-5 -left-5 w-50 h-50 bg-[var(--brand-sky)] blur-3xl rounded-tl-full pointer-events-none" />
            <img
              src={stepsTraveller}
              alt=""
            />
            <div className="flex flex-col mt-5 text-[var(--text-secondary)]">
            <div className="flex flex-col gap-4 text-left">
                <h6 className="text-[var(--text-primary)]">تجربه سفر به یونان</h6>
              <div>14-29 June | by Robbin joseph</div>
              <div className="flex gap-3 justify-end">
                <div className="bg-[var(--brand-muted)] p-2 rounded-full">
                  <FaTelegramPlane />
                </div>
                <div className="bg-[var(--brand-muted)] p-2 rounded-full">
                  <MdArticle />
                </div>
                <div className="bg-[var(--brand-muted)] p-2 rounded-full">
                  <MdEco />
                </div>
              </div>
              <div className="flex justify-end gap-2 items-center">
                <div>
                  <MdApartment
                    size={20}
                    style={{ color: "var(--text-muted)" }}
                  />
                </div>
                <div>24 نفر سفر کرده اند</div>
              </div>
            </div>
              <div className="flex absolute top-50 -right-30 gap-3 bg-white rounded-3xl p-5 shadow-brand hidden md:flex">
                <img
                  className="rounded-full h-fit"
                  src={rome}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <div>در حال انجام</div>
                  <h6 className="text-[var(--text-primary)]">سفر به روم</h6>
                 
                    <div className="flex gap-2">
                      <div className="text-[#8A79DF] font-bold">40%</div>
                      <div>تکمیل شده</div>
                    </div>
                    <img
                      src={progressbar}
                      alt=""
                    />
                
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
export default Steps;
