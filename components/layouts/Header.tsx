"use client";
import Image from "next/image";
import Logo from "@/public/Images/logo.png";
import Link from "next/link";
import { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import ArrowDown from "@/public/Images/arrowDown.svg";
import { Kanit } from "next/font/google";

const roboto = Kanit({
  weight: "400",
  subsets: ["latin"],
});
// For large screeen devices
interface HoveredState {
  services_hovered: boolean;
  capabilities_hovered: boolean;
  company_hovered: boolean;
}
//for Mobile screen devices
interface ButtonClickedState {
  services_clicked: boolean;
  capabilities_clicked: boolean;
  company_clicked: boolean;
}
// large screen
const Header = () => {
  const [isHovered, setHovered] = useState<HoveredState>({
    services_hovered: false,
    capabilities_hovered: false,
    company_hovered: false,
  });
  // for mobile hamburger
  const [menuButton, setMenuButton] = useState(false);
  // mobile dropdown buttons
  const [mobileDropdown, setMobileDropdown] = useState<ButtonClickedState>({
    services_clicked: false,
    capabilities_clicked: false,
    company_clicked: false,
  });
  console.log(mobileDropdown);
  // Use the FontFamily2 font
  const setMenuButtonFunction = () => {
    setMenuButton(!menuButton);
  };
  console.log(menuButton);
  return (
    <>
      {/* container of asides */}
      <aside className="hidden lg:block">
        {/* Services Dropdown  */}
        <aside
          onMouseLeave={() =>
            setHovered({
              ...isHovered,
              services_hovered: false,
              capabilities_hovered: false,
              company_hovered: false,
            })
          }
          className={`${
            isHovered.services_hovered ? "translate-y-full" : "translate-y-0"
          }  fixed inset-x-0 -top-[22.7rem] flex h-[29.5rem] bg-fontColor text-white transition-all duration-500  `}
        >
          {/* Content Box */}
          <article className="flex w-full justify-between pl-40 pr-60">
            <section className="py-[4.5rem] ">
              <h1 className="text-5xl">Services</h1>
              <h2 className="mb-4 mt-2 text-lg text-secondaryFont ">
                Trusted Indian Ingenuity.
              </h2>
              <p className="w-[22rem]">
                With a focus on a wide spectrum of cutting-edge technologies,
                Obii KriationZ has been a driving catalyst in the creation and
                evolution of exceptional digital solutions since 2016. We
                engineer the core components that power a diverse range of
                modern applications, ensuring excellence in every facet of the
                digital landscape.
              </p>
            </section>
            <section className="w-64 border-[#10352b] pt-[4.5rem] text-[0.884rem] text-secondaryFont">
              <hr className="border-b-[0.5px] border-[#10352b]  " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d] "
                href={""}
              >
                {" "}
                <h3 className="py-4">Product Consultation</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">Web Development</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                <h3 className="py-4">Cloud Services</h3>
              </Link>

              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                <h3 className="py-4">DevOps Transformation</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                <h3 className="py-4">Web Visibility Boost</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">Quality Assurance and Testing</h3>{" "}
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
            </section>
          </article>
        </aside>

        {/* Capabilities Dropdown */}
        <aside
          onMouseLeave={() =>
            setHovered({
              ...isHovered,
              services_hovered: false,
              capabilities_hovered: false,
              company_hovered: false,
            })
          }
          className={`${
            isHovered.capabilities_hovered
              ? "translate-y-full"
              : "translate-y-0"
          } fixed inset-x-0 -top-[22.7rem] flex h-[29.5rem] bg-fontColor text-white transition-all duration-500`}
        >
          {/* Content Box */}
          <article className="flex w-full justify-between pl-40 pr-60">
            <section className="py-[4.5rem] ">
              <h1 className="text-5xl">Capabilities</h1>
              <h2 className="mb-4 mt-2 text-lg text-secondaryFont ">
                Empowering Digital Frontiers.
              </h2>
              <p className="w-[22rem]">
                At Obii KriationZ, our capabilities are the cornerstone of
                innovation. We excel in crafting and implementing tailored
                solutions across a spectrum of applications, processes, and
                industries. Our commitment to driving technological advancement
                knows no bounds.
              </p>
            </section>
            <section className="w-64 pt-[4.5rem] text-[0.884rem] text-secondaryFont">
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">Product Management</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">Client Base Expansion</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">MVP Roadmapping</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className=" transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                <h3 className="py-4">Prototyping Expertise </h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                <h3 className="py-4">Rapid Growth Strategies</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">Agile and Scrum Implementation</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
            </section>
          </article>
        </aside>

        {/* Company Dropdown */}
        <aside
          onMouseLeave={() =>
            setHovered({
              ...isHovered,
              services_hovered: false,
              capabilities_hovered: false,
              company_hovered: false,
            })
          }
          className={`${
            isHovered.company_hovered ? "translate-y-full" : "translate-y-0"
          } fixed inset-x-0 -top-[22.7rem] flex h-[29.5rem] bg-fontColor text-white transition-all duration-500 `}
        >
          {/* Content Box */}
          <article className="flex w-full justify-between pl-40 pr-60">
            <section className="py-[4.5rem] ">
              <h1 className="text-5xl">Company</h1>
              <h2 className="mb-4 mt-2 text-lg text-secondaryFont ">
                A reputation of excellence.
              </h2>
              <p className="w-[22rem]">
                Obii KriationZ stands as a distinguished provider in the IT
                landscape. With a focus on delivering superior results, we offer
                cutting-edge solutions across industries. Our reputation for
                expertise, steadfast dedication to excellence, streamlined
                processes, and a passionate team collectively define our
                journey.
              </p>
            </section>
            <section className="w-64 pt-[4.5rem] text-[0.884rem] text-secondaryFont">
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">About</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">Leadership</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">Industries</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">Community</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
              <Link
                className="transition-all duration-300 ease-in-out hover:text-[#b0a47f7d]"
                href={""}
              >
                {" "}
                <h3 className="py-4">Lagacy</h3>
              </Link>
              <hr className="border-b-[0.5px] border-[#10352b] " />
            </section>
          </article>
        </aside>
      </aside>
      {/* All dropdowns over up || there */}

      {/* Nav bar */}
      <nav
        className={`sticky top-[5px]  hidden h-[6.5rem] w-full items-center justify-between bg-main px-14 text-fontColor lg:flex`}
      >
        {/* main logo of company */}
        <Link href={"/"}>
          <h1
            onMouseEnter={() => {
              setHovered({
                ...isHovered,
                services_hovered: false,
                capabilities_hovered: false,
                company_hovered: false,
              });
            }}
            className={`${roboto.className} select-none text-4xl  transition-colors duration-700  hover:text-buttonBorder `}
          >
            Obii KriationZ
          </h1>
        </Link>
        {/* pages links */}
        <ul className="flex items-center justify-center gap-10 ">
          {/* Services dropdown Button */}
          <li
            className="relative  block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#d9d3bf] after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
            onMouseEnter={() => {
              setHovered({
                ...isHovered,
                services_hovered: true,
                capabilities_hovered: false,
                company_hovered: false,
              });
            }}
          >
            Services
          </li>
          {/* Capabilities dropdown Button */}
          <li
            className="relative  block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#d9d3bf] after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
            onMouseEnter={() => {
              setHovered({
                ...isHovered,
                services_hovered: false,
                capabilities_hovered: true,
                company_hovered: false,
              });
            }}
          >
            Capabilities
          </li>
          {/* Company Dropdown Button */}
          <li
            className="relative block w-fit cursor-pointer after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#d9d3bf] after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
            onMouseEnter={() => {
              setHovered({
                ...isHovered,
                services_hovered: false,
                capabilities_hovered: false,
                company_hovered: true,
              });
            }}
          >
            Company
          </li>
          {/* Career Page Button */}
          <Link
            className=" relative block w-fit after:absolute after:mt-1 after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-[#d9d3bf] after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
            onMouseEnter={() => {
              setHovered({
                ...isHovered,
                services_hovered: false,
                capabilities_hovered: false,
                company_hovered: false,
              });
            }}
            href={"/careers"}
          >
            <li>Careers</li>
          </Link>
          {/* Contact Us Button */}
          <Link
            onMouseEnter={() => {
              setHovered({
                ...isHovered,
                services_hovered: false,
                capabilities_hovered: false,
                company_hovered: false,
              });
            }}
            href={"/contact"}
          >
            <li className="group flex items-center justify-between rounded-full border-2 border-buttonBorder py-2 pl-6  pr-5 transition-all duration-200 ease-in-out hover:border-fontColor hover:bg-fontColor hover:py-[.69rem]  hover:text-[#f3f3f3]">
              {" "}
              Contact Us
              {/*Arrow Svg  */}
              <svg
                className="ml-1 fill-buttonBorder transition-all duration-200 group-hover:rotate-90 "
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7" />
              </svg>
            </li>
          </Link>
        </ul>
      </nav>
      {/* Mobile screen area */}

      {/* Mobile Screen Dropdown */}
      <aside
        onMouseLeave={() => {
          setMobileDropdown({
            ...mobileDropdown,
            services_clicked: false,
            capabilities_clicked: false,
            company_clicked: false,
          });
        }}
        className={`${
          menuButton ? "translate-y-full" : "translate-y-0"
        } fixed inset-x-0 -top-[100vh]  h-[100vh] select-none overflow-scroll bg-main  text-fontColor transition-all duration-500 lg:hidden `}
      >
        <section
          className={`${
            mobileDropdown.services_clicked ? "h-[17.5rem]" : "h-[4.45rem] "
          }  mt-[3.8rem] overflow-hidden border-y-2 border-[#d9d3bf6c] transition-height duration-700 ease-in-out md:mt-[5.4rem]`}
        >
          <div
            onClick={() => {
              setMobileDropdown({
                ...mobileDropdown,
                services_clicked: !mobileDropdown.services_clicked,
                capabilities_clicked: false,
                company_clicked: false,
              });
            }}
            className={`flex justify-between px-5 py-4 md:px-10`}
          >
            <h1 className={`${roboto.className} text-2xl`}>SERVICES</h1>
            <Image
              className={`${
                mobileDropdown.services_clicked ? "-rotate-180" : "rotate-0"
              } duration-600 transition-all ease-in-out`}
              src={ArrowDown}
              alt="Arrow down button"
            />
          </div>
          <ul className=" mb-2 list-square  px-8 text-[.95rem] md:px-14 ">
            <li className="py-[.30rem]">Product Consultation</li>
            <li className="py-[.30rem]">Web Development</li>
            <li className="py-[.30rem]">Cloud Services</li>
            <li className="py-[.30rem]">DevOps Transformation</li>
            <li className="py-[.30rem]">Web Visibility Boost</li>
            <li className="py-[.30rem]">Qualitiy Assurance and Testing</li>
          </ul>
        </section>

        <section
          className={`${
            mobileDropdown.capabilities_clicked ? "h-[17.5rem]" : "h-[4.45rem]"
          } overflow-hidden border-b-2 border-[#d9d3bf6c] transition-height duration-700 ease-in-out`}
        >
          <div
            onClick={() => {
              setMobileDropdown({
                ...mobileDropdown,
                services_clicked: false,
                capabilities_clicked: !mobileDropdown.capabilities_clicked,
                company_clicked: false,
              });
            }}
            className="flex justify-between px-5 py-4 md:px-10 "
          >
            <h1 className={`${roboto.className} text-2xl`}>CAPABILITIES </h1>
            <Image
              className={`${
                mobileDropdown.capabilities_clicked ? "-rotate-180" : "rotate-0"
              } duration-600 transition-all ease-in-out`}
              src={ArrowDown}
              alt="Arrow down button"
            />
          </div>
          <ul className=" mb-2 list-square px-8 text-[.95rem] md:px-14 ">
            <li className="py-[.30rem]">Product Management</li>
            <li className="py-[.30rem]">Client Base Expansion</li>
            <li className="py-[.30rem]">MVP Roadmapping </li>
            <li className="py-[.30rem]">Prototyping Expertise</li>
            <li className="py-[.30rem]">Rapid Growth Strategies</li>
            <li className="py-[.30rem]">Agile and Scrum Implementation</li>
          </ul>
        </section>
        <section
          className={`${
            mobileDropdown.company_clicked ? "h-[15.5rem]" : "h-[4.45rem]"
          } overflow-hidden border-b-2 border-[#d9d3bf6c] transition-height duration-700 ease-in-out`}
        >
          <div
            onClick={() => {
              setMobileDropdown({
                ...mobileDropdown,
                services_clicked: false,
                capabilities_clicked: false,
                company_clicked: !mobileDropdown.company_clicked,
              });
            }}
            className="flex justify-between px-5 py-4 md:px-10"
          >
            <h1 className={`${roboto.className} text-2xl`}>COMPANY</h1>
            <Image
              className={`${
                mobileDropdown.company_clicked ? "-rotate-180" : "rotate-0"
              } duration-600 transition-all ease-in-out`}
              src={ArrowDown}
              alt="Arrow down button"
            />
          </div>
          <ul className=" mb-2 list-square px-8 text-[.95rem] md:px-14 ">
            <li className="py-[.30rem]">About</li>
            <li className="py-[.30rem]">Leadership</li>
            <li className="py-[.30rem]">Industries</li>
            <li className="py-[.30rem]">Community</li>
            <li className="py-[.30rem]">Legacy</li>
          </ul>
        </section>
        <section className="border-b-2 border-[#d9d3bf6c]">
          <div className="flex justify-between px-5 py-4 md:px-10">
            <h1 className={`${roboto.className} text-2xl`}>CAREERS</h1>
          </div>
        </section>
        <section className="border-b-2 border-[#d9d3bf6c]">
          <div className="flex justify-between px-5 py-4 md:px-10">
            <h1 className={`${roboto.className} text-2xl`}>CONTACT US</h1>
          </div>
        </section>
      </aside>
      {/* Aside for everyscreen sizes progressbar background  */}
      <aside
        className={` fixed inset-x-0 top-0 h-[4px] bg-fontColor lg:h-[5px] `}
      ></aside>

      {/* Mobile screen navbar */}
      <nav className="sticky inset-x-0 top-[4px] flex h-14 items-center justify-between bg-main pl-4 pr-1 md:h-20 md:pl-10 md:pr-10 lg:hidden">
        <h1
          className={`${roboto.className} select-none text-2xl hover:text-fontColor md:text-3xl`}
        >
          Obii KriationZ
        </h1>
        <Hamburger
          toggled={menuButton}
          toggle={setMenuButtonFunction}
          color="#b0a47f"
          distance="sm"
          size={24}
        />
      </nav>
    </>
  );
};

export default Header;
