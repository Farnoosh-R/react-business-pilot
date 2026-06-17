import Button from "../ui/Button/Button";
import message from "../../../src/assets/images/layout/message.png";
import decorecirclesLeft from "../../../src/assets/images/layout/decorecircles-left.png";
import decorecirclesRight from "../../../src/assets/images/layout/decorecircles-right.png";
import dots from "../../../src/assets/images/layout/dots.png";
import { FaTelegram } from "react-icons/fa";

const Support = () => {
  return (
    <section id="support">
      <div className="app-container">
        <div
          className="relative py-15 px-5 bg-[var(--brand-secondary)] rounded-tl-[100px] rounded-2xl "
          style={{ "--from": "translateY(100px)" }}
        >
          <div className="flex flex-col gap-7 justify-center items-center text-[#5E6282]">
            <img className="absolute -right-3 -top-3 w-[70px]" src={message} alt="" />
            <img
              className="absolute left-0 bottom-0 opacity-10"
              src={decorecirclesLeft}
              alt=""
            />
            <img
              className="absolute right-0 top-0 opacity-10"
              src={decorecirclesRight}
              alt=""
            />
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-white">اگر به رشد کسب و کار خود فکر می کنید</h2>
            <h2 className="text-white">یک قدم جلوتر باشید!</h2>
            <div className="text-[var(--brand-accent)]">بروز ترین مطالب و نکات استراتژیک را در ایمیل خود دریافت کنید.</div>
            </div>
            {/* <Button variant="pastel" style={{ padding: "20px" }}>
              021-24721247
            </Button> */}
            <div className="flex flex-col lg:flex-row gap-3 w-80 lg:w-[53%]">
              <div className="lg:w-2/3">
                <input type="text" placeholder="ایمیل خود را وارد نمایید" className="bg-white w-full border-white p-[15px] rounded-lg"/>
              </div>
              <div><Button variant="primary" size="lg">عضویت در خبرنامه</Button></div>
            </div>
          </div>
          <img
            className="absolute -right-22 -bottom-19 -z-10 scale-y-[-1]"
            src={dots}
            alt=""
          />
          {/* <div className="flex w-fit bg-[var(--brand-accent)] p-3 rounded-full"><FaTelegram size={25} color="white"/></div> */}
        </div>
      </div>
    </section>
  );
};
export default Support;
