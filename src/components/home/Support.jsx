import Button from "../ui/Button/Button";
import message from "../../../src/assets/images/layout/message.png"
import decorecirclesLeft from "../../../src/assets/images/layout/decorecircles-left.png"
import decorecirclesRight from "../../../src/assets/images/layout/decorecircles-right.png"
import dots from "../../../src/assets/images/layout/dots.png"

const Support = () => {
  return (
    <section id="support">
      <div className="app-container">
        <div className="relative py-20 bg-[var(--brand-glow-light)] rounded-tl-[100px] rounded-2xl scroll-anim" style={{ "--from": "translateY(100px)" }}>
          <div className="flex flex-col gap-7 justify-center items-center text-[#5E6282]">
            <img className="absolute -right-3 -top-3" src={message} alt="" />
            <img className="absolute left-0 bottom-0 opacity-10" src={decorecirclesLeft} alt="" />
            <img className="absolute right-0 top-0 opacity-10" src={decorecirclesRight} alt="" />
            <h2>با پشتیبانی Flyza تنها نیستی</h2>
            <h6>۷ روز هفته، ۲۴ ساعته همراهت هستیم.</h6>
            <Button variant="pastel" style={{padding: "20px"}}>021-24721247</Button>
          </div>
          <img className="absolute -right-22 -bottom-19 -z-10 scale-y-[-1]" src={dots} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Support;
