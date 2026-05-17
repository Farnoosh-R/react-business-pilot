import Button from "../ui/Button/Button";

const Support = () => {
  return (
    <section id="support">
      <div className="app-container">
        <div className="relative py-20 bg-[var(--brand-glow-light)] rounded-tl-[100px] rounded-2xl scroll-anim" style={{ "--from": "translateY(100px)" }}>
          <div className="flex flex-col gap-7 justify-center items-center text-[#5E6282]">
            <img className="absolute -right-3 -top-3" src="../../src/assets/images/layout/message.png" alt="" />
            <img className="absolute left-0 bottom-0 opacity-10" src="../../src/assets/images/layout/decorecircles-left.png" alt="" />
            <img className="absolute right-0 top-0 opacity-10" src="../../src/assets/images/layout/decorecircles-right.png" alt="" />
            <h2>با پشتیبانی Flyza تنها نیستی</h2>
            <h6>۷ روز هفته، ۲۴ ساعته همراهت هستیم.</h6>
            <Button variant="pastel">021-24721247</Button>
          </div>
          <img className="absolute -right-22 -bottom-19 -z-10 scale-y-[-1]" src="../../src/assets/images/layout/dots.png" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Support;
