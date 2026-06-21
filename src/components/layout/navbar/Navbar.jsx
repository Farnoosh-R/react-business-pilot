import { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuItem from "./MenuItem.jsx";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button.jsx";
import logo from "../../../../src/assets/images/logo.png";

const menuData = [
  {
    label: "خانه",
    path: "/",
  },
    {
    label: "خدمات",
    path: "/services",
  },
  {
    label: "درباره من",
    path: "/about",
  },
  //     {
  //   label: "مطالعات",
  //   path: "/blog",
  // },
    {
    label: "مقالات",
    path: "/blog",
  },
  {
    label: "تماس با ما",
    path: "/contact",
  },
  // {
  //   label: "اقامت",
  //   children: [
  //     {
  //       label: "هتل ها",
  //       path: "hotels",
  //     },
  //     {
  //       label: "ویلا و اقامتگاه",
  //       path: "villas and residences",
  //     },
  //   ],
  // },
  // {
  //   label: "تورهای خارجی",
  //   children: [
  //     {
  //       label: "تورهای اروپایی",
  //       children: [
  //         {
  //           label: "تور انگلیس",
  //           path: "england",
  //         },
  //         {
  //           label: "تور ترکیه",
  //           path: "turkish",
  //         },
  //         {
  //           label: "تور اسپانیا",
  //           path: "espain",
  //         },
  //       ],
  //     },
  //     {
  //       label: "تورهای خاورمیانه",
  //       children: [
  //         {
  //           label: "تور امارات",
  //           path: "emirates",
  //         },
  //         {
  //           label: "تور کشتی کروز خلیج فارس",
  //           path: "persian gulf cruise ship",
  //         },
  //         {
  //           label: "تور عمان",
  //           path: "oman",
  //         },
  //         {
  //           label: "تور قطر",
  //           path: "qatar",
  //         },
  //       ],
  //     },
  //     {
  //       label: "تورهای آمریکا",
  //       path: "america",
  //     },
  //   ],
  // },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-betwee h-[80px] bg-transparent">
      {/* Right Side */}
      <div className="flex app-container items-center gap-4">
        {/* Logo */}
        <Link to="/">
          <div className="flex">
            <img src={logo} className="w-12" />
            <div className="flex flex-col">
              <span className="font-bold">امیرعلی قربانی</span>
              <span className="text-sm text-[var(--text-secondary)]">مشاور توسعه کسب و کار</span>
            </div>
          </div>
        </Link>

        {/* Menu */}
        <div
          className={`
    absolute lg:static
    top-full left-0
    w-full lg:w-auto
    transition-all duration-300
    bg-white lg:bg-transparent
    lg:opacity-100 lg:visible lg:pointer-events-auto

    ${
      mobileOpen
        ? "opacity-100 visible pointer-events-auto"
        : "opacity-0 invisible pointer-events-none"
    }
  `}
        >
          <ul
            className="flex flex-col lg:flex-row gap-2 lg:gap-6 p-4 lg:p-0"
            onClick={() => setMobileOpen(false)}
          >
            {menuData.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
          </ul>
        </div>

        <Button variant="primary">
          <FaRegLightbulb style={{ marginLeft: "5px" }} />
          رزرو جلسه مشاوره
        </Button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-2xl"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
