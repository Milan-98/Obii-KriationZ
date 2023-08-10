"use client"
import Image from "next/image";
import Logo from "@/public/Images/logo.png"
import Link from "next/link";
import { useState,useEffect } from "react";


interface HoveredState {
  services_hovered: boolean;
  capabilities_hovered: boolean;
  company_hovered: boolean;
}



const Header = () => {

  const [isHovered,setHovered] = useState<HoveredState>({services_hovered:false,capabilities_hovered:false,company_hovered:false});
  console.log(isHovered)

  const [currentPosition,setCurrentPosition] = useState(0);
  const [previousPosition,setPreviousPosition] = useState(1)


  
  useEffect(() => {
    const handleScroll = () => {
       setPreviousPosition(currentPosition)
      setCurrentPosition(window.pageYOffset);
      console.log(currentPosition,previousPosition); // Log the current position

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPosition,previousPosition]);

  


  return (
<>

{/* dropdown zone */}
{/* Services Dropdown  */}

<aside onMouseLeave={()=>setHovered({...isHovered,services_hovered:false,capabilities_hovered:false,company_hovered:false})} className={`${ isHovered.services_hovered ? "translate-y-full" : "translate-y-0"} transition-all duration-500 fixed inset-x-0 -top-[22.7rem] h-[29.5rem] bg-fontColor text-white flex  `}>
{/* Content Box */}
<article className="flex gap-32">

<section className="py-[4.5rem] pl-32">

<h1 className="text-5xl">Services</h1>
<h2 className="text-lg text-secondaryFont mt-2 mb-4 ">Trusted Indian Ingenuity.</h2>
<p className="w-[19.6rem]">With a focus on a wide spectrum of cutting-edge technologies, Obii KriationZ has been a driving catalyst in the creation and evolution of exceptional digital solutions since 2016. We engineer the core components that power a diverse range of modern applications, ensuring excellence in every facet of the digital landscape.</p>
</section>
<section className="w-64 pt-[4.5rem] text-secondaryFont text-[0.884rem]">
<hr className="border-[#10352b] border-b-[0.5px] "  />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out " href={""}> <h3 className="py-4">Web Development</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] "/>
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}> <h3 className="py-4">Product Consultation</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] "/>
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}><h3 className="py-4">Digital Transformation</h3></Link>

<hr className="border-[#10352b] border-b-[0.5px] " />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}><h3 className="py-4">Search Engine Campaigns</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] " />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}>
  <h3 className="py-4">Cloud Migration & Management</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] " />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}>  <h3 className="py-4">Quality Assurance and Testing</h3> </Link>
<hr className="border-[#10352b] border-b-[0.5px] "/>

</section>
</article>
{/* Image Box */}
<Image src={Logo} width={550}  alt="logo"/>
</aside>
{/* --------------------------------------------------------------------------------------*/}

{/* Capabilities Dropdown */}
<aside onMouseLeave={()=>setHovered({...isHovered,services_hovered:false,capabilities_hovered:false,company_hovered:false})} className={`${ isHovered.capabilities_hovered ? "translate-y-full" : "translate-y-0"} transition-all duration-500 fixed inset-x-0 -top-[22.7rem] h-[29.5rem] bg-fontColor text-white flex`}>
{/* Content Box */}
<article className="flex gap-32">

<section className="py-[4.5rem] pl-32">

<h1 className="text-5xl">Capabilities</h1>
<h2 className="text-lg text-secondaryFont mt-2 mb-4 ">Empowering Digital Frontiers.</h2>
<p className="w-[19.6rem]">At Obii KriationZ, our capabilities are the cornerstone of innovation. We excel in crafting and implementing tailored solutions across a spectrum of applications, processes, and industries. Our commitment to driving technological advancement knows no bounds.</p>
</section>
<section className="w-64 pt-[4.5rem] text-secondaryFont text-[0.884rem]">
<hr className="border-[#10352b] border-b-[0.5px] "  />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}> <h3 className="py-4">Product Management</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] "/>
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}> <h3 className="py-4">Customer Acquisition</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] "/>
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}> <h3 className="py-4">Growth Hacking</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] " />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}> <h3 className="py-4">Growth Hacking</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] " />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}> <h3 className="py-4">MVP Strategy Development</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] " />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}> <h3 className="py-4">Agile and Scrum Implementation</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] "/>

</section>
</article>
{/* Image Box */}
<Image src={Logo} width={400} height={20} alt="logo"/>
</aside>

{/* ------------------------------------------------------------------------------------- */}

{/* Company Dropdown */}
<aside onMouseLeave={()=>setHovered({...isHovered,services_hovered:false,capabilities_hovered:false,company_hovered:false})} className={`${ isHovered.company_hovered ? "translate-y-full" : "translate-y-0"} transition-all duration-500 fixed inset-x-0 -top-[22.7rem] h-[29.5rem] bg-fontColor text-white flex `}>
{/* Content Box */}
<article className="flex gap-32">

<section className="py-[4.5rem] pl-32">

<h1 className="text-5xl">Company</h1>
<h2 className="text-lg text-secondaryFont mt-2 mb-4 ">A reputation of excellence.</h2>
<p className="w-[19.6rem]">Obii KriationZ stands as a distinguished provider in the IT landscape. With a focus on delivering superior results, we offer cutting-edge solutions across industries. Our reputation for expertise, steadfast dedication to excellence, streamlined processes, and a passionate team collectively define our journey.</p>
</section>
<section className="w-64 pt-[4.5rem] text-secondaryFont text-[0.884rem]">
<hr className="border-[#10352b] border-b-[0.5px] "  />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}> <h3 className="py-4">About</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] "/>
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}>  <h3 className="py-4">Leadership</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] "/>
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}>  <h3 className="py-4">Industries</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] "/>
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}>  <h3 className="py-4">Community</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] " />
<Link className="hover:text-[#b0a47f7d] transition-all duration-300 ease-in-out" href={""}>  <h3 className="py-4">Lagacy</h3></Link>
<hr className="border-[#10352b] border-b-[0.5px] " />


</section>
</article>
{/* Image Box */}
<Image src={Logo} width={400} height={20} alt="logo"/>
</aside>

{/* Aside for progressbar background only */}
<aside className={` fixed inset-x-0 h-[5px] bg-fontColor `}>
</aside>



{/* Nav bar */}
    <nav className={`bg-main text-fontColor h-[6.5rem] flex justify-between items-center sticky top-[5px] w-full px-14`}>
      {/* main logo of company */}
      <Link href={"/"}>
        <h1 onMouseEnter={()=>{setHovered({...isHovered,services_hovered:false,capabilities_hovered:false,company_hovered:false})}} className=" font-extrabold text-4xl  selection-none hover:text-buttonBorder duration-700  transition-colors ">Obii KriationZ</h1>
      </Link>
        {/* <Image className="select-none lg:w-44" src={Logo} alt={"obii kriationz logo"}/> */}
 {/* pages links */}
        <ul className="flex gap-10 justify-center items-center list ">
          {/* Services dropdown Button */}
            <li className="cursor-pointer  relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#d9d3bf] after:mt-1 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" onMouseEnter={()=>{setHovered({...isHovered,services_hovered:true,capabilities_hovered:false,company_hovered:false})}}>Services
            </li>
            {/* Capabilities dropdown Button */}
            <li className="cursor-pointer  relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#d9d3bf] after:mt-1 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" onMouseEnter={()=>{setHovered({...isHovered,services_hovered:false,capabilities_hovered:true,company_hovered:false})}} >Capabilities</li>
            {/* Company Dropdown Button */}
            <li className="cursor-pointer relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#d9d3bf] after:mt-1 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" onMouseEnter={()=>{setHovered({...isHovered,services_hovered:false,capabilities_hovered:false,company_hovered:true})}}>Company</li>
            {/* Career Page Button */}
          <Link className=" relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-[#d9d3bf] after:mt-1 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" onMouseEnter={()=>{setHovered({...isHovered,services_hovered:false,capabilities_hovered:false,company_hovered:false})}} href={"/careers"}>
            <li  >Careers</li>
          </Link>
          {/* Contact Us Button */}
          <Link onMouseEnter={()=>{setHovered({...isHovered,services_hovered:false,capabilities_hovered:false,company_hovered:false})}} href={"/contact"}>
            <li className="group border-buttonBorder hover:py-[.33rem] hover:text-[#f3f3f3] hover:bg-fontColor hover:border-fontColor transition-all duration-200 ease-in-out  border-2 pr-5 pl-6 py-2 rounded-full flex justify-between items-center"> Contact Us 
              {/*Arrow Svg  */}
            <svg className="fill-buttonBorder ml-1 transition-all duration-200 group-hover:rotate-90 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <polygon points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
</svg></li>
          </Link>
          {/* All Links Over Here */}
        </ul>
    </nav>
</>

  )
}

export default Header;