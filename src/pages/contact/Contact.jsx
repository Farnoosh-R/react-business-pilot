import contact from "./assets/images/contact.png";
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

const Contact = () => {
  return (
    <div id="contact" className="page">
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-7">
            <div className="tracking-[20px] text-[var(--text-muted)]">
              Flyza
            </div>
            <h1>ارتباط با ما</h1>
            <div className="relative flex flex-col gap-3">
              <div className="absolute -z-10 -top-10 -right-5 w-50 h-50 bg-[var(--brand-sky)] blur-3xl rounded-tl-full pointer-events-none" />
              <div className="flex gap-4 text-center items-center">
                <div className="flex flex-col gap-3 w-50 rounded-3xl p-7 border border-[var(--brand-muted)] bg-white hover:bg-[var(--brand-sky-light)]">
                  <div className="flex justify-center">
                    <FiMapPin
                      style={{ color: "var(--brand-primary)" }}
                      size={25}
                    />
                  </div>
                  <h6>آدرس:</h6>
                  <div>تهران ...</div>
                </div>
                <div className="flex flex-col gap-3 w-50 rounded-3xl p-7 border border-[var(--brand-muted)] bg-white hover:bg-[var(--brand-sky-light)]">
                  <div className="flex justify-center">
                    <FiPhone
                      style={{ color: "var(--brand-primary)" }}
                      size={25}
                    />
                  </div>
                  <h6>تماس:</h6>
                  <div>021-247</div>
                </div>
              </div>
                    <div className="flex gap-4 text-center items-center">
                <div className="flex flex-col gap-3 w-50 rounded-3xl p-7 border border-[var(--brand-muted)] bg-white hover:bg-[var(--brand-sky-light)]">
                  <div className="flex justify-center">
                    <FiClock
                      style={{ color: "var(--brand-primary)" }}
                      size={25}
                    />
                  </div>
                  <h6>ساعت کاری:</h6>
                  <div>شنبه تا چهارشنبه 9-9</div>
                </div>
                <div className="flex flex-col gap-3 w-50 rounded-3xl p-7 border border-[var(--brand-muted)] bg-white hover:bg-[var(--brand-sky-light)]">
                  <div className="flex justify-center">
                    <FiMail
                      style={{ color: "var(--brand-primary)" }}
                      size={25}
                    />
                  </div>
                  <h6>ایمیل:</h6>
                  <div>info@flyza.com</div>
                </div>
              </div>
            </div>
          </div>
          <img src={contact} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
