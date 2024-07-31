import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/utils/svg";
import styles from "./header.module.css";

const pgCourses = [
  "Business studies",
  "Law",
  "Engineering",
  "IT",
  "Finance",
  "Computer Science",
];

const ugCourses = [
  "Agriculture",
  "Law",
  "Veterinary Medicine",
  "Biology",
  "Food Science and Technology",
  "Hotel Management",
];

const costAndFinance = [
  {
    title: "Find a scholarship",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
  {
    title: "Loans for studying abroad",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
  {
    title: "Costs of studying abroad",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
  {
    title: "How to manage funding?",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
];

const mobExploreDestination = [
  {
    countryName: "Study in Australia",
    src: "/mobile_destinationCountry.png",
    alt: "Study in Australia",
  },
  {
    countryName: "Study in Canada",
    src: "/mobile_destinationCountry.png",
    alt: "Study in Canada",
  },
  {
    countryName: "Study in New Zealand",
    src: "/mobile_destinationCountry.png",
    alt: "Study in New Zealand",
  },
  {
    countryName: "Study in Ireland",
    src: "/mobile_destinationCountry.png",
    alt: "Study in Ireland",
  },
  {
    countryName: "Study in UK",
    src: "/mobile_destinationCountry.png",
    alt: "Study in UK",
  },
  {
    countryName: "Study in USA",
    src: "/mobile_destinationCountry.png",
    alt: "Study in USA",
  },
];

const howToApply = [
  {
    title: "Get FREE expert advice",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
  {
    title: "Prepare for English test",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
  {
    title: "Prepare for GRE/GMAT",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
  {
    title: "Learn to apply to uni",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
];

const movingAbroad = [
  {
    title: "Find accommodation",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
  {
    title: "Buy health insurance",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
  {
    title: "Get your visa",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
  {
    title: "Prepare checklist before leaving",
    description: "Lorem ipsum dolor sit amet rutrum consectetur adipiscing",
  },
];

const Dropdown = ({ isDropdownOpen, children }) => {
  return (
    <div
      className={`transition-all duration-800 ease-in-out transform ${
        isDropdownOpen
          ? "translate-y-0  visible z-50"
          : "-translate-y-10  -z-10 invisible"
      } absolute top-[70px] bg-gray-100 shadow-lg border z-50 w-full mx-auto pt-10 pb-14 left-0`}
    >
      {children}
    </div>
  );
};

const Headerv2 = () => {
  const [isOpen, setIsOpen] = useState();
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setOpenMenu(null);
    setOpenSubMenu(null);
  };

  const openMenuItem = (menu) => {
    setOpenMenu(menu);
    setOpenSubMenu(null);
  };

  const openSubMenuItem = (submenu) => {
    setOpenSubMenu(submenu);
  };

  const closeSubMenu = () => {
    if (openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenMenu(null);
    }
  };
  const [openDropdown, setOpenDropdown] = useState("");
  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? "" : section);
  };

  //implicit close
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (!ref?.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // prevent body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <header className="bg-white relative z-[55]">
        <div className="mx-auto relative flex justify-between border-b-[1px] border-greyBorder shadow-[0_1px_2px_0_rgba(16, 24, 40, 0.05)]">
          <div className="flex gap-4 items-center justify-center xl:hidden">
            {/* mobile navigation */}
            <div>
              {/* hamburger icon */}
              <div className=" xl:hidden py-[22px] ps-4">
                <button onClick={toggleNav}>
                  <Image
                    src="/hamburger_Icon.svg"
                    alt="hamburgerIcon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              {/* top nav */}
              <nav
                className={`fixed top-0  w-full h-[100vh] ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } duration-500 z-50 `}
              >
                {/* menu */}
                <div
                  ref={ref}
                  id="mobileNav"
                  className={` ${styles.mobileNav__menu} transition-transform transform  duration-500`}
                >
                  {/* menuItems*/}
                  <div
                    className={`mx-[20px] transition-transform transform duration-500 ${
                      openMenu ? "-translate-x-full " : "translate-x-0"
                    }`}
                  >
                    <div
                      onClick={() => openMenuItem("courses")}
                      className="flex justify-between mt-[60px] p-8 text-darkGrey font-bold bg-hoverGrey cursor-pointer text-paralarge"
                    >
                      Courses & Uni
                      {/* {icons.rightArrowBlack("w-6 h-6")} */}
                    </div>
                    <div
                      onClick={() => openMenuItem("explore")}
                      className="flex justify-between mt-[20px] p-8 text-darkGrey font-bold bg-hoverGrey cursor-pointer text-paralarge"
                    >
                      Explore Destinations
                      {/* {icons.rightArrowBlack("w-6 h-6")} */}
                    </div>
                    <div
                      onClick={() => openMenuItem("costs")}
                      className="flex justify-between mt-[20px] p-8 text-darkGrey font-bold bg-hoverGrey cursor-pointer text-paralarge"
                    >
                      Costs & Finance
                      {/* {icons.rightArrowBlack("w-6 h-6")} */}
                    </div>
                    <div
                      onClick={() => openMenuItem("apply")}
                      className="flex justify-between mt-[20px] p-8 text-darkGrey font-bold bg-hoverGrey cursor-pointer text-paralarge"
                    >
                      How to apply?
                      {/* {icons.rightArrowBlack("w-6 h-6")} */}
                    </div>
                    <div
                      onClick={() => openMenuItem("moving")}
                      className="flex justify-between mt-[20px] p-8 text-darkGrey font-bold bg-hoverGrey cursor-pointer text-paralarge"
                    >
                      Moving abroad
                      {/* {icons.rightArrowBlack("w-6 h-6")} */}
                    </div>
                  </div>

                  {/* submenu--1 */}
                  <div
                    className={`${
                      styles.mobileNav__submenu
                    } transition-transform transform duration-500 ${
                      openMenu ? "translate-x-0 " : "translate-x-full "
                    }`}
                  >
                    <div
                      className={`transition-transform transform duration-500 ${
                        openSubMenu ? "-translate-x-full " : "translate-x-0"
                      }`}
                    >
                      <div
                        className={`transform duration-500 transition-transform ${
                          openMenu === "courses"
                            ? "translate-x-0"
                            : " w-full absolute top-0 -z-10 translate-x-full"
                        }`}
                      >
                        <div
                          onClick={closeSubMenu}
                          className="flex gap-[14px] mb-[20px] items-center justify-center p-4 text-darkGrey font-bold text-paralarge cursor-pointer"
                        >
                          <Image
                            src="/leftArrow_Icon.svg"
                            alt="back"
                            width={24}
                            height={24}
                            className="my-[2px]"
                          />
                          Courses & Uni
                        </div>
                        <div className="max-h-[calc(100vh-60px)] overflow-y-auto">
                          <div>
                            <p className="bg-gray-300 p-[20px] text-black uppercase text-paralarge font-bold">
                              POSTGRADUATE COURSES
                            </p>
                            <div className=" bg-white mx-[20px]">
                              <ul className="flex flex-col text-mediumGrey text-base">
                                {pgCourses.map((pg) => (
                                  <li className="py-[5px]" key={pg}>
                                    <a
                                      href="#"
                                      className="text-xsmall hover:text-blue-600"
                                    >
                                      {pg}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* <div
                            onClick={() => openSubMenuItem("postgraduate")}
                            className="flex justify-between ps-[54px] pe-6 py-4 text-mediumGrey font-medium hover:bg-hoverGrey cursor-pointer"
                          >
                            Postgraduate courses
                            <Image
                              src="/rightarrowBlack_Icon.svg"
                              alt="back"
                              width={24}
                              height={24}
                            />
                          </div> */}
                          {/* <div
                            onClick={() => openSubMenuItem("undergraduate")}
                            className="flex justify-between ps-[54px] pe-6 py-4 text-mediumGrey font-medium hover:bg-hoverGrey cursor-pointer"
                          >
                            Undergraduate courses
                            <Image
                              src="/rightarrowBlack_Icon.svg"
                              alt="back"
                              width={24}
                              height={24}
                            />
                          </div>
                          <Link
                            href="/"
                            className="flex ps-[54px] pe-6 py-4 text-mediumGrey font-medium hover:bg-hoverGrey"
                          >
                            How to choose a course?
                          </Link> */}
                          <div>
                            <p className="bg-gray-300 p-[20px] text-black uppercase text-paralarge font-bold">
                              UNDERGRADUATE COURSES
                            </p>
                            <div className=" bg-white mx-[20px]">
                              <ul className="flex flex-col text-mediumGrey text-base">
                                {ugCourses.map((ug) => (
                                  <li className="py-[8px]" key={ug}>
                                    <a
                                      href="#"
                                      className="flex gap-[15px] items-center text-xsmall hover:text-blue-600"
                                    >
                                      <div className="inline-block align-middle rounded-[50%] p-[5px] border border-greyBorder">
                                        <Image
                                          src={"/profileIcon.svg"}
                                          alt="headerLogo"
                                          width={30}
                                          height={30}
                                          className="inline-block align-middle rounded-[50%]"
                                        />
                                      </div>
                                      <div className="flex gap-[10px] items-center w-full border-b border-greyBorder h-[40px]">
                                        {" "}
                                        {ug}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <p className="bg-gray-300 p-[20px] text-black uppercase text-paralarge font-bold">
                              Uni
                            </p>
                            <div className=" bg-white mx-[20px]">
                              <ul className="flex flex-col text-mediumGrey text-base">
                                {ugCourses.map((ug) => (
                                  <li className="py-[8px]" key={ug}>
                                    <a
                                      href="#"
                                      className="flex gap-[15px] items-center text-xsmall hover:text-blue-600"
                                    >
                                      <div className="inline-block align-middle rounded-[50%] p-[5px] border border-greyBorder">
                                        <Image
                                          src={"/profileIcon.svg"}
                                          alt="headerLogo"
                                          width={30}
                                          height={30}
                                          className="inline-block align-middle rounded-[50%]"
                                        />
                                      </div>
                                      <div className="flex gap-[10px] items-center w-full border-b border-greyBorder h-[40px]">
                                        {" "}
                                        {ug}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div>
                            <p className="bg-gray-300 p-[20px] text-black uppercase text-paralarge font-bold">
                              Lorum
                            </p>
                            <div className="bg-white m-[20px]">
                              <a
                                className="bg-hoverGrey p-[20px] flex flex-row items-center justify-center gap-[20px] mb-[20px]"
                                href="/#"
                              >
                                <div className="text-darkGrey font-bold text-para uppercase">
                                  Unreal finds, unreal summer
                                </div>
                                <div>
                                  <Image
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="object-cover w-full h-[60px] rounded-[50%]"
                                    src="/global_serving_summer.webp"
                                  />
                                </div>
                              </a>
                              <a
                                className="bg-hoverGrey p-[20px] flex flex-row items-center justify-center gap-[20px] mb-[20px]"
                                href="/#"
                              >
                                <div className="text-darkGrey font-bold text-para uppercase">
                                  Unreal finds, unreal summer
                                </div>
                                <div>
                                  <Image
                                    alt=""
                                    width="100"
                                    height="100"
                                    className="object-cover w-full h-[60px] rounded-[50%]"
                                    src="/global_serving_summer.webp"
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`transform duration-500 transition-transform ${
                          openMenu === "explore"
                            ? "translate-x-0"
                            : " w-full absolute top-0 -z-10 translate-x-full"
                        }`}
                      >
                        <div
                          onClick={closeSubMenu}
                          className="flex gap-[14px] mb-4 items-center p-4 text-darkGrey font-semibold cursor-pointer"
                        >
                          <Image
                            src="/leftArrow_Icon.svg"
                            alt="back"
                            width={24}
                            height={24}
                            className="my-[2px]"
                          />
                          Explore Destinations
                        </div>

                        <div className="max-h-[calc(100vh-60px)] overflow-y-auto">
                          <div>
                            {mobExploreDestination.map((destination, index) => (
                              <Link
                                key={index}
                                href="/"
                                className="text-base flex items-center justify-between ps-[54px] pe-6 py-2  hover:bg-hoverGrey"
                              >
                                <p className="text-mediumGrey font-medium">
                                  {destination.countryName}
                                </p>
                                <Image
                                  src={destination.src}
                                  alt={destination.alt}
                                  width={40}
                                  height={40}
                                  objectFit="contain"
                                />
                              </Link>
                            ))}
                          </div>
                          <div className="pt-8 ps-[54px] pe-6 pb-2 ">
                            <p className="text-lighterGrey font-bold uppercase text-xs pb-2 border-b border-b-hoverGrey">
                              other destinations
                            </p>
                          </div>

                          {["Study in Malaysia", "Study in Singapore"].map(
                            (destination) => (
                              <Link
                                key={destination}
                                href="/"
                                className="flex  ps-[54px] pe-6 py-4 text-mediumGrey font-medium hover:bg-hoverGrey"
                              >
                                {destination}
                              </Link>
                            )
                          )}

                          <div className="flex gap-[10px] group cursor-pointer hover:underline hover:decoration-ctaBlue hover:bg-hoverGrey hover:rounded transition-all ps-[54px] pe-6 py-4">
                            <span className="text-ctaBlue hover:text-ctaHoverBlue">
                              How to choose a destinations?
                            </span>
                            <div className="ms-0 transition-all group-hover:ms-1">
                              {icons.rightArrow("w-6 h-6")}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`transform duration-500 transition-transform ${
                          openMenu === "costs"
                            ? "translate-x-0"
                            : " w-full absolute top-0 -z-10 translate-x-full"
                        }`}
                      >
                        <div
                          onClick={closeSubMenu}
                          className="flex gap-[14px] mb-4 items-center p-4 text-darkGrey font-semibold cursor-pointer"
                        >
                          <Image
                            src="/leftArrow_Icon.svg"
                            alt="back"
                            width={24}
                            height={24}
                            className="my-[2px]"
                          />
                          Costs & finance
                        </div>
                        <div className="flex flex-col">
                          {costAndFinance.map((item, index) => (
                            <Link
                              key={index}
                              href="/"
                              className="ps-[54px] pe-6 py-4 text-mediumGrey font-medium hover:bg-hoverGrey"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div
                        className={`transform duration-500 transition-transform ${
                          openMenu === "apply"
                            ? "translate-x-0"
                            : " w-full absolute top-0 -z-10 translate-x-full"
                        }`}
                      >
                        <div
                          onClick={closeSubMenu}
                          className="flex gap-[14px] mb-4 items-center p-4 text-darkGrey font-semibold cursor-pointer"
                        >
                          <Image
                            src="/leftArrow_Icon.svg"
                            alt="back"
                            width={24}
                            height={24}
                            className="my-[2px]"
                          />
                          How to Apply?
                        </div>

                        <div className="max-h-[calc(100vh-60px)] overflow-y-auto">
                          <div className="flex flex-col">
                            {howToApply.map((apply, index) => (
                              <Link
                                key={index}
                                href="/"
                                className=" ps-[54px] pe-6 py-4 text-mediumGrey font-medium hover:bg-hoverGrey"
                              >
                                {apply.title}
                              </Link>
                            ))}
                          </div>
                          <div className="ps-[54px] pe-6 py-4">
                            <div className="flex flex-col gap-2 py-4 px-5 bg-boxGrey border-l-4 border-ctaBlue mt-4">
                              <p className="font-semibold text-lg text-mediumGrey">
                                Get personalized recommendations
                              </p>
                              <p className="text-darkGrey text-base mb-2">
                                Ad natoque tincidunt per magna nascetur, eros
                                etiam ridi.
                              </p>
                              <button className={styles.ctaBtn}>
                                CTA Button
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`transform duration-500 transition-transform ${
                          openMenu === "moving"
                            ? "translate-x-0"
                            : " w-full absolute top-0 -z-10 translate-x-full"
                        }`}
                      >
                        <div
                          onClick={closeSubMenu}
                          className="flex gap-[14px] mb-4 items-center p-4 text-darkGrey font-semibold cursor-pointer"
                        >
                          <Image
                            src="/leftArrow_Icon.svg"
                            alt="back"
                            width={24}
                            height={24}
                            className="my-[2px]"
                          />
                          Moving abroad
                        </div>
                        <div className="flex flex-col">
                          {movingAbroad.map((item, index) => (
                            <Link
                              key={index}
                              href="/"
                              className=" ps-[54px] pe-6 py-4 text-mediumGrey font-medium hover:bg-hoverGrey"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* submenu--2 */}
                  <div
                    className={`${
                      styles.mobileNav__submenu
                    } transition-transform transform duration-500 ${
                      openSubMenu ? "translate-x-0  " : "translate-x-full"
                    }`}
                  >
                    <div
                      className={`transform duration-500 transition-transform ${
                        openSubMenu === "postgraduate"
                          ? "translate-x-0"
                          : " w-full absolute top-0 -z-10 translate-x-full"
                      }`}
                    >
                      <div
                        onClick={closeSubMenu}
                        className="flex gap-[14px] mb-4 items-center px-6 py-4 text-darkGrey font-semibold cursor-pointer"
                      >
                        <Image
                          src="/leftArrow_Icon.svg"
                          alt="back"
                          width={24}
                          height={24}
                        />
                        Postgraduate Courses
                      </div>
                      <div className="flex flex-col">
                        {pgCourses.map((pg) => (
                          <Link
                            key={pg}
                            href="/"
                            className=" ps-[54px] pe-6 py-4 text-mediumGrey font-medium hover:bg-hoverGrey"
                          >
                            {pg}
                          </Link>
                        ))}
                        <div className="flex gap-[10px] group cursor-pointer hover:underline hover:decoration-ctaBlue hover:bg-hoverGrey hover:rounded transition-all ps-[54px] pe-6 py-4">
                          <span className="text-ctaBlue hover:text-ctaHoverBlue">
                            Explore all
                          </span>
                          <div className="ms-0 transition-all group-hover:ms-1">
                            {icons.rightArrow("w-6 h-6")}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`transform duration-500 transition-transform ${
                        openSubMenu === "undergraduate"
                          ? "translate-x-0"
                          : " w-full absolute top-0 -z-10 translate-x-full"
                      }`}
                    >
                      <div
                        onClick={closeSubMenu}
                        className="flex gap-[14px] mb-4 items-center px-6 py-4 text-darkGrey font-semibold cursor-pointer"
                      >
                        <Image
                          src="/leftArrow_Icon.svg"
                          alt="back"
                          width={24}
                          height={24}
                        />
                        Undergraduate Courses
                      </div>
                      <div className="flex flex-col">
                        {ugCourses.map((ug) => (
                          <Link
                            key={ug}
                            href="/"
                            className=" ps-[54px] pe-6 py-4 text-mediumGrey font-medium hover:bg-hoverGrey"
                          >
                            {ug}
                          </Link>
                        ))}

                        <div className="flex gap-[10px] group cursor-pointer hover:underline hover:decoration-ctaBlue hover:bg-hoverGrey hover:rounded transition-all ps-[54px] pe-6 py-4">
                          <span className="text-ctaBlue hover:text-ctaHoverBlue">
                            Explore all
                          </span>
                          <div className="ms-0 transition-all group-hover:ms-1">
                            {icons.rightArrow("w-6 h-6")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* close button */}
                <div
                  className={`${
                    isOpen
                      ? "absolute z-[3] top-0 left-[320px] bg-black p-[15px]"
                      : "hidden"
                  } `}
                >
                  <button onClick={toggleNav}>
                    <Image
                      src="/close_Icon.svg"
                      alt="close"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </nav>
              {isOpen && (
                <div
                  className="fixed inset-0 bg-black opacity-50 z-[2] findme left-0 top-0"
                  onClick={toggleNav}
                ></div>
              )}
            </div>
            {/* tablet logo */}
            <div className="tab:block xl:hidden py-[22px]">
              <Link href={"/"}>
                <Image
                  src={"/hc_tabletLogo.svg"}
                  alt="headerLogo"
                  width={145}
                  height={16}
                />
              </Link>
            </div>
          </div>

          {/* desktop logo */}
          <div className="py-[10px] ps-4 hidden xl:flex">
            <Link href={"/"}>
              <Image
                src={"/hc_headerLogo.svg"}
                alt="headerLogo"
                width={204}
                height={50}
              />
            </Link>
          </div>

          {/* desktop top nav */}
          <div className="hidden xl:flex">
            {/* courses & Uni */}
            <div className="flex gap-1">
              <div
                className={`flex items-center gap-1 px-4 cursor-pointer hover:bg-hoverGrey ${
                  openDropdown === "courses"
                    ? "bg-gray-200 text-darkGrey"
                    : "text-mediumGrey"
                }  duration-800`}
                onClick={() => toggleDropdown("courses")}
              >
                <p className="py-[23px] xxl:text-base lg:text-sm font-semibold">
                  Courses & uni
                </p>
                {/* <div
                  className={`py-[25px] transform transition-transform duration-300 ${
                    openDropdown === "courses" ? "rotate-180" : ""
                  }`}
                >
                  {icons.chevronDown("w-5 h-5")}
                </div> */}
              </div>

              <Dropdown isDropdownOpen={openDropdown === "courses"}>
                <div className="grid grid-cols-4 max-w-[1240px] mx-auto">
                  <div className="col-span-1 border-r border-lightestGrey px-[30px]">
                    {/* pg */}
                    <div>
                      <p className="uppercase mb-4 text-xs text-darkGrey pb-2 text-para font-bold">
                        Postgraduate courses
                      </p>
                      <ul className="flex flex-col text-mediumGrey text-base">
                        {pgCourses.map((pg) => (
                          <li className="py-[5px]" key={pg}>
                            <a
                              href="#"
                              className="text-xsmall hover:text-blue-600"
                            >
                              {pg}
                            </a>
                          </li>
                        ))}
                        {/* <li>
                            <div className="flex gap-[10px] group cursor-pointer hover:underline hover:decoration-ctaBlue hover:bg-hoverGrey hover:rounded transition-all pt-4 pb-3 ps-2">
                              <span className="text-ctaBlue hover:text-ctaHoverBlue">
                                Explore all
                              </span>
                              <div className="ms-0 transition-all group-hover:ms-1">
                                {icons.rightArrow("w-6 h-6")}
                              </div>
                            </div>
                          </li> */}
                      </ul>
                    </div>
                    {/* <div className="col-span-2 mt-4 group text-ctaBlue hover:bg-hoverGrey hover:rounded  hover:underline hover:decoration-ctaBlue hover:text-ctaHoverBlue flex gap-[10px] cursor-pointer py-3 px-2">
                      <Link href={"/"}>How to choose a course?</Link>
                      <div className="ms-0 transition-all group-hover:ms-1">
                        {icons.rightArrow("w-6 h-6")}
                      </div>
                    </div> */}
                  </div>
                  {/* ug */}
                  <div className="col-span-1 border-r border-lightestGrey px-[30px]">
                    <p className="uppercase mb-4 text-xs text-darkGrey pb-2 text-para font-bold">
                      Undergraduate courses
                    </p>
                    <ul className="flex flex-col text-mediumGrey text-base">
                      {ugCourses.map((ug) => (
                        <li className="py-[8px]" key={ug}>
                          <a
                            href="#"
                            className="flex gap-[15px] items-center text-xsmall hover:text-blue-600"
                          >
                            <div className="inline-block align-middle rounded-[50%] p-[5px] border border-greyBorder">
                              <Image
                                src={"/profileIcon.svg"}
                                alt="headerLogo"
                                width={30}
                                height={30}
                                className="inline-block align-middle rounded-[50%]"
                              />
                            </div>
                            <div className="flex gap-[10px] items-center w-full border-b border-greyBorder h-[40px]">
                              {" "}
                              {ug}
                            </div>
                          </a>
                        </li>
                      ))}
                      {/* <li>
                            <div className="flex gap-[10px] group cursor-pointer hover:underline hover:rounded hover:decoration-ctaBlue hover:bg-hoverGrey transition-all pt-4 pb-3 ps-2">
                              <span className="text-ctaBlue hover:text-ctaHoverBlue">
                                Explore all
                              </span>
                              <div className="ms-0 transition-all group-hover:ms-1">
                                {icons.rightArrow("w-6 h-6")}
                              </div>
                            </div>
                          </li> */}
                    </ul>
                  </div>

                  {/* uni */}
                  <div className="col-span-1 border-r border-lightestGrey px-[30px]">
                    <p className="uppercase mb-4 text-xs text-darkGrey pb-2 text-para font-bold">
                      Unis
                    </p>
                    <ul className="flex flex-col text-mediumGrey text-base">
                      {["Find a uni", "Uni ranking", "Uni Prospectus"].map(
                        (uni) => (
                          <li className="py-[5px]" key={uni}>
                            <a
                              href="#"
                              className="flex gap-[15px] items-center text-xsmall hover:text-blue-600"
                            >
                              <div className="inline-block align-middle rounded-[50%] p-[5px] border border-greyBorder">
                                <Image
                                  src={"/profileIcon.svg"}
                                  alt="headerLogo"
                                  width={30}
                                  height={30}
                                  className="inline-block align-middle rounded-[50%]"
                                />
                              </div>
                              <div className="flex gap-[10px] items-center w-full border-b border-greyBorder h-[40px]">
                                {" "}
                                {uni}
                              </div>
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="col-span-1 px-[30px]">
                    <p className="uppercase mb-4 text-xs text-darkGrey pb-2 text-para font-bold">
                      Lorum
                    </p>

                    <a
                      className="relative p-[20px] flex flex-col items-center justify-center h-[145px] mb-[20px]"
                      href="/#"
                    >
                      <div className="text-white text-para font-bold uppercase text-center relative z-20">
                        Unreal finds, unreal summer
                      </div>
                      <Image
                        alt=""
                        width="270"
                        height="141"
                        className="object-cover w-full h-full absolute rounded-[5px]"
                        src="/global_serving_summer.webp"
                      />
                    </a>
                    <a
                      className="relative p-[20px] flex flex-col items-center justify-center h-[145px] mb-[20px]"
                      href="/#"
                    >
                      <div className="text-white text-para font-bold uppercase text-center relative z-20">
                        DISNEY | ASOS
                      </div>
                      <Image
                        alt=""
                        width="270"
                        height="141"
                        className="object-cover w-full h-full absolute rounded-[5px]"
                        src="/global_disney.webp"
                      />
                    </a>
                  </div>
                </div>
              </Dropdown>
            </div>

            {/* Explore Destinations */}
            <div className="flex gap-1">
              <div
                className={`flex items-center gap-1 px-4 cursor-pointer hover:bg-hoverGrey ${
                  openDropdown === "explore"
                    ? "bg-gray-200 text-darkGrey"
                    : "text-mediumGrey"
                }  duration-300`}
                onClick={() => toggleDropdown("explore")}
              >
                <p className="py-[23px] xxl:text-base lg:text-sm font-semibold ">
                  Explore destinations
                </p>
                {/* <div
                  className={`py-[25px] transform transition-transform duration-300  ${
                    openDropdown === "explore" ? "rotate-180" : ""
                  }`}
                >
                  {icons.chevronDown("w-5 h-5")}
                </div> */}
              </div>

              <Dropdown isDropdownOpen={openDropdown === "explore"}>
                <div className="grid grid-cols-[3fr_1fr] gap-5 max-w-[980px] mx-auto">
                  <div className="grid grid-cols-3 gap-5">
                    {[
                      {
                        src: "/australia_destination.png",
                        alt: "Study in Australia",
                      },
                      {
                        src: "/canada_destination.png",
                        alt: "Study in Canada",
                      },
                      {
                        src: "/newzea_destination.png",
                        alt: "Study in New Zealand",
                      },
                      {
                        src: "/ireland_destination.png",
                        alt: "Study in Ireland",
                      },
                      { src: "/uk_destination.png", alt: "Study in UK" },
                      { src: "/usa_destination.png", alt: "Study in USA" },
                    ].map((destination) => (
                      <div
                        key={destination.alt}
                        className="w-[230px] h-[230px] relative group overflow-hidden"
                      >
                        <Image
                          src={destination.src}
                          alt={destination.alt}
                          objectFit="cover"
                          width={230}
                          height={230}
                          className="z-0 rounded group-hover:scale-[1.2] transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-custom-gradient z-10 rounded"></div>
                        <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold z-20 text-lg whitespace-nowrap">
                          {destination.alt}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className=" flex flex-col gap-4">
                    <div>
                      <p className="mb-4 ml-2 uppercase text-xs font-medium text-lighterGrey pb-2 border-b border-hoverGrey">
                        Other destination
                      </p>
                      <ul className="flex flex-col text-mediumGrey text-base">
                        {["Study in Malaysia", "Study in Singapore"].map(
                          (destination) => (
                            <li
                              key={destination}
                              className="p-2 hover:bg-hoverGrey hover:text-darkGrey transition-all rounded"
                            >
                              {destination}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className="flex items-center gap-[10px] group cursor-pointer hover:underline hover:decoration-ctaBlue hover:bg-hoverGrey hover:rounded transition-all p-2">
                      <span className="text-ctaBlue hover:text-ctaHoverBlue">
                        How to choose a destination?
                      </span>
                      <div className="ms-0 transition-all group-hover:ms-1">
                        {icons.rightArrow("w-6 h-6")}
                      </div>
                    </div>
                  </div>
                </div>
              </Dropdown>
            </div>

            {/* Cost & Finance */}
            <div className="flex gap-1">
              <div
                className={`flex items-center gap-1 px-4 cursor-pointer hover:bg-hoverGrey ${
                  openDropdown === "costs"
                    ? "bg-gray-200 text-darkGrey"
                    : "text-mediumGrey"
                }  duration-300`}
                onClick={() => toggleDropdown("costs")}
              >
                <p className="py-[23px] xxl:text-base lg:text-sm font-semibold ">
                  Costs & finance
                </p>
                {/* <div
                  className={`py-[25px] transform transition-transform duration-300  ${
                    openDropdown === "costs" ? "rotate-180" : ""
                  }`}
                >
                  {icons.chevronDown("w-5 h-5")}
                </div> */}
              </div>

              <Dropdown isDropdownOpen={openDropdown === "costs"}>
                <div className="grid gap-5 grid-cols-3 max-w-[980px] mx-auto">
                  {costAndFinance.map((item, index) => (
                    <div
                      key={index}
                      className="p-2 flex flex-col gap-2 hover:bg-hoverGrey"
                    >
                      <p className="text-mediumGrey font-semibold text-base">
                        {item.title}
                      </p>
                      <p className="text-lighterGrey text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Dropdown>
            </div>

            {/* how to apply */}
            <div className="flex gap-1">
              <div
                className={`flex items-center gap-1 px-4 cursor-pointer hover:bg-hoverGrey ${
                  openDropdown === "apply"
                    ? "bg-gray-200 text-darkGrey"
                    : "text-mediumGrey"
                }  duration-300`}
                onClick={() => toggleDropdown("apply")}
              >
                <p className="py-[23px] xxl:text-base lg:text-sm font-semibold ">
                  How to apply?
                </p>
                {/* <div
                  className={`py-[25px] transform transition-transform duration-300 ${
                    openDropdown === "apply" ? "rotate-180" : ""
                  }`}
                >
                  {icons.chevronDown("w-5 h-5")}
                </div> */}
              </div>

              <Dropdown isDropdownOpen={openDropdown === "apply"}>
                <div className="grid grid-cols-[2fr_1fr] gap-5 max-w-[980px] mx-auto  ">
                  <div>
                    <div className="grid grid-cols-2 gap-5">
                      {howToApply.map((item, index) => (
                        <div
                          key={index}
                          className="p-2 flex flex-col self-start  gap-2 hover:bg-hoverGrey"
                        >
                          <p className="text-mediumGrey font-semibold text-base">
                            {item.title}
                          </p>
                          <p className="text-lighterGrey text-sm">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 py-4 px-5 bg-boxGrey border-l-4 border-ctaBlue w-[313px] h-fit">
                    <p className="font-semibold text-lg text-mediumGrey">
                      Get an Instant Offer with FastLane
                    </p>
                    <p className="text-darkGrey text-base mb-2">
                      Check your admission eligibility in minutes and get a
                      decision in real time.
                    </p>
                    <button className={styles.ctaBtn}>Get started</button>
                  </div>
                </div>
              </Dropdown>
            </div>

            {/* Moving Abroad */}
            <div className="flex gap-1">
              <div
                className={`flex items-center gap-1 px-4 cursor-pointer hover:bg-hoverGrey ${
                  openDropdown === "movingAbroad"
                    ? "bg-gray-200 text-darkGrey"
                    : "text-mediumGrey"
                }  duration-300`}
                onClick={() => toggleDropdown("movingAbroad")}
              >
                <p className="py-[23px] xxl:text-base lg:text-sm font-semibold ">
                  Moving abroad
                </p>
                {/* <div
                  className={`py-[25px] transform transition-transform duration-300 ${
                    openDropdown === "movingAbroad" ? "rotate-180" : ""
                  }`}
                >
                  {icons.chevronDown("w-5 h-5")}
                </div> */}
              </div>

              <Dropdown isDropdownOpen={openDropdown === "movingAbroad"}>
                <div className="grid gap-5 grid-cols-3 max-w-[980px] mx-auto  ">
                  {movingAbroad.map((item, index) => (
                    <div
                      key={index}
                      className="p-2 flex flex-col gap-2 hover:bg-hoverGrey"
                    >
                      <p className="text-mediumGrey font-semibold text-base">
                        {item.title}
                      </p>
                      <p className="text-lighterGrey text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Dropdown>
            </div>
          </div>

          {/* desktop icons */}
          <div className="flex">
            <div className="p-[23px]">{icons.search("w-6 h-6")}</div>
            <div className="p-[23px]">{icons.like("w-6 h-6")}</div>
            <div className="p-[23px]">{icons.profile("w-6 h-6")}</div>
          </div>
        </div>
      </header>
      {openDropdown != "" && (
        <div
          className="fixed w-full h-full top-0 left-0 bg-black opacity-50 z-[54]"
          onClick={() => setOpenDropdown("")}
        ></div>
      )}
    </>
  );
};

export default Headerv2;
