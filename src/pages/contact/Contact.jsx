import contact from "./assets/images/contact.webp";
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa6";
import amiraliGhorani from "./assets/images/amiraliGhorani.png";
import { FaBolt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://farnooshstudio.ir/api/wp-json/custom/v1/consultation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(form),
          body: JSON.stringify({
            fullName: form.name,
            mobile: form.phone,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        },
      );

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="page">
      <div className="app-container flex flex-col gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="scroll-anim" style={{ "--from": "translateX(40px)" }}>
            <div className="text-[var(--text-secondary)]">
              ازتباط با من
            </div>
            <div className="flex flex-col mb-4">
              <h1 className="text-[var(--text-primary-alt)]">در مسیر شد</h1>
              <h1 className="text-[var(--text-primary-alt)]">کنار شما هستم</h1>
            </div>
            <div className="text-[var(--text-accent)]">
              اگر سوالی دارید یا مایل به همکاری هستید،
            </div>
            <div className="text-[var(--text-accent)]">
              اطلاعات خود را برای من اسال کنید تا در اولین فرصت با شما تماس
              بگیرم.
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-20 gap-4">
              <div className="flex gap-3 items-center">
                <FaBolt color="var(--text-secondary)" size={30} />
                <div className="flex flex-col">
                  <h5>پاسخ سریع</h5>
                  <div className="text-[var(--text-accent)]">
                    در کمتر از 24 ساعت
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <FaUserTie color="var(--text-secondary)" size={30} />
                <div className="flex flex-col">
                  <h5>مشاوره تخصصی</h5>
                  <div className="text-[var(--text-accent)]">
                    متناسب با نیاز شما
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <FaShieldAlt color="var(--text-secondary)" size={30} />
                <div className="flex flex-col">
                  <h5>حفظ اطلاعات شما</h5>
                  <div className="text-[var(--text-accent)]">کاملا محرمانه</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col relative scroll-anim"
            style={{ "--from": "translateX(-40px)" }}
          >
            <div className="w-fit lg:absolute lg:-right-26 lg:-top-4 rounded-3xl gap-3 bg-[var(--brand-primary)] p-5">
              <FaQuoteLeft color="var(--text-secondary)" size={50} />
              <div className="flex flex-col  text-white">
                <div>هر پیام،</div>
                <div>آغاز یک مسیر جدید</div>
                <div>برای رشد و موفقیت</div>
                <div>کسب و کار شماست.</div>
              </div>
              <img className="w-[200px]" src={amiraliGhorani} alt="" />
            </div>
            <img className="rounded-br-[200px]" src={contact} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
          <div className="flex flex-col bg-[var(--brand-primary)] gap-10 text-white rounded-3xl p-7">
            <h4>راه های ارتباطی</h4>
            <div className="flex flex-col gap-12">
              <div className="flex gap-2">
                <FaPhoneAlt color="var(--text-secondary)" size={25} />
                <a href="tel:09128939845" className="">
                  8939845 - 0912
                </a>
              </div>
              <div className="flex gap-2">
                <MdEmail color="var(--text-secondary)" size={25} />
                <a
                  href="mailto:info@amiralighorbani.ir?subject=درخواست مشاوره"
                  className=""
                >
                  info@amiralighorbani.ir
                </a>
              </div>
              <div className="flex gap-2">
                <FaMapMarkerAlt color="var(--text-secondary)" size={25} />
                <span className="">تهران، ...</span>
              </div>
              <div className="flex gap-2">
                <FaClock color="var(--text-secondary)" size={25} />
                <span className="">ساعت پاسخگویی 9 صبح تا 6 عصر</span>
              </div>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* نام و نام خانوادگی */}
              <div className="md:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  نام و نام خانوادگی
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#cba152]"
                />
              </div>

              {/* شماره تماس */}
              <div className="md:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  شماره تماس
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="09xxxxxxxxx"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#cba152]"
                />
              </div>

              {/* ایمیل */}
              <div className="md:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  ایمیل
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#cba152]"
                />
              </div>

              {/* موضوع */}
              <div className="md:col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  موضوع
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="موضوع درخواست خود را وارد کنید"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#cba152]"
                />
              </div>

              {/* پیام */}
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  پیام
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="پیام خود را بنویسید..."
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-[#cba152]"
                />
              </div>

              {/* دکمه ارسال */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#cba152] hover:opacity-90 transition-all text-white px-8 py-3 rounded-xl"
                >
                  {loading ? "در حال ارسال..." : "ارسال درخواست"}
                </button>
              </div>
              {success && (
                <div className="text-green-600 mt-4">
                  درخواست شما با موفقیت ارسال شد ✔
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
