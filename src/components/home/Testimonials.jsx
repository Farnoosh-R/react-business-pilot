import SwiperSlider from "../ui/Slider/SwiperSlider";
import { MdArticle } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEco } from "react-icons/md";

const Testimonials = () => {
  const slides = [
    {
      id: 1,
      image: "../../src/assets/images/layout/slide1.png",
      title: "Luxury Resort",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد..",
      buttonText: "Explore",
    },
    {
      id: 1,
      image: "../../src/assets/images/layout/slide1.png",
      title: "Luxury Resort",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد..",
      buttonText: "Explore",
    },
    {
      id: 1,
      image: "../../src/assets/images/layout/slide1.png",
      title: "Luxury Resort",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد..",
      buttonText: "Explore",
    },
  ];

  return (
    <section id="testimonials">
      <div className="app-container">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h6 className="text-[var(--text-secondary)]">نظرات مشتریان</h6>
            <h2>نظر شما درباره</h2>
            <h2>Flyza</h2>
            <div className="flex gap-3">
              <div className="bg-[var(--brand-muted)] p-2 rounded-full">
                <FaTelegramPlane style={{ color: "var(--brand-accent)" }}/>
              </div>
              <div className="bg-[var(--brand-muted)] p-2 rounded-full">
                <MdArticle style={{ color: "var(--brand-accent)" }}/>
              </div>
              <div className="bg-[var(--brand-muted)] p-2 rounded-full">
                <MdEco style={{ color: "var(--brand-accent)" }}/>
              </div>
            </div>
            <img
              className="opacity-5 hidden lg:block scale-x-[-1] -mt-25"
              src="../../src/assets/images/layout/msg.png"
              alt=""
            />
          </div>
          <SwiperSlider items={slides} />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
