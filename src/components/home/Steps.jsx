import { FaRegSquareFull } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
import { MdDirectionsCar } from "react-icons/md";
import { MdEco } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import businessManager from "../../assets/images/layout/businessManager.png";

const Steps = () => {
  return (
    <section id="steps" className="bg-[var(--brand-primary)]">
      <div className="app-container">
        <div className="flex flex-col lg:flex-row gap-3 py-10 items-center px-10">
          <div className="flex flex-col gap-7 text-center lg:w-2/3">
            <div className="flex flex-col gap-3 text-center">
              <h6 className="text-[var(--text-secondary)]">درباره من</h6>
              <h2 className="text-[var(--brand-surface)]">
                مشاوری همراه با تجربه و نگاه استراتژیک
              </h2>
            </div>
            <div className="text-[var(--brand-muted)] leading-7">
              با بیش از 10 سال تجربه در حوزه مشاوره مدیریت، توسعه کسب و کار و
              استراتژی به کسب و کار ها کمک کرده ام تا با تصمیم های بهتر، رشد
              پایدار و مزیت رقابتی ایجاد کنند.
            </div>
            <div className="flex justify-center gap-30">
              <div className="flex flex-col">
                <h3 className="text-[var(--text-secondary)]">30+</h3>
                <div className="text-[var(--brand-muted)]">مشتری راضی</div>
              </div>
              <div>
                  <div className="flex flex-col">
                <h3 className="text-[var(--text-secondary)]">50+</h3>
                <div className="text-[var(--brand-muted)]">پروژه موفق</div>
              </div>
              </div>
              <div>
                  <div className="flex flex-col">
                <h3 className="text-[var(--text-secondary)]">10+</h3>
                <div className="text-[var(--brand-muted)]">سال تجربه</div>
              </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-tl-3xl rounded-tr-[50%] rounded-br-[50%] rounded-bl-[50%]">
            <img src={businessManager} className="w-[500px]" alt="businessManager" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Steps;
