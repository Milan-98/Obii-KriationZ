import { Kanit } from "next/font/google";

const roboto = Kanit({
  weight: "400",
  subsets: ["latin"],
});
const Footer = () => {
  return (
    <footer className="bg-fontColor">
      <section className="pl-5 pr-3">
        <h1 className={`${roboto.className} pb-5 pt-12 text-4xl  text-main`}>
          Obii KriationZ
        </h1>
        <p className="text-[1.1rem] text-[#f3f3f3]">
          An innovative IT partner, driving technological excellence through the
          design, development, and deployment of advanced software solutions for
          diverse industries.
        </p>
      </section>
      {/* this for all links section */}
      <section className="mt-10">
        {/* services and Company section */}
        <section className="flex justify-between pl-5 pr-10">
          {/* sevices */}
          <section>
            <h1 className={`${roboto.className} pb-2 text-main`}>SERVICES</h1>
            <ul className=" text-sm text-secondaryFont ">
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Product Consultation
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Web Development
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Cloud Services
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                DevOps Transformation
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Web Visibility Boost
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Qualitiy Assurance and Testing
              </li>
            </ul>
          </section>
          {/* Company */}
          <section>
            <h1 className={`${roboto.className} pb-2 text-main`}>COMPANY</h1>
            <ul className=" text-sm  text-secondaryFont ">
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">About</li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">Leadership</li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">Industries</li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">Community</li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">Legacy</li>
            </ul>
          </section>
        </section>

        {/* section for Capabilities career and contacts */}
        <section className="mt-10 flex justify-between pl-5 pr-10">
          {/* Capabilities section */}
          <section>
            <h1 className={`${roboto.className} pb-2 text-main`}>
              CAPABILITIES
            </h1>
            <ul className=" text-sm  text-secondaryFont ">
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Product Management
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Client Base Expansion
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                MVP Roadmapping
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Prototyping Expertise
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Rapid Growth Strategies
              </li>
              <li className="pb-[.40rem] hover:text-[#b0a47f7d]">
                Agile and Scrum Implementation
              </li>
            </ul>
          </section>
          {/* Career and inquires section */}
          <section>
            {/* Mini section for Careers */}
            <section className="mb-3">
              <h1 className={`${roboto.className} pb-1 text-main`}>CAREERS</h1>
              <h3 className="pb-[.35rem] text-sm text-secondaryFont hover:text-[#b0a47f7d]">
                {" "}
                Careers
              </h3>
            </section>
            {/* mini section for Inquiries */}
            <section>
              <h1 className={`${roboto.className} pb-1 text-main`}>INQUIRES</h1>
              <h3 className="pb-[.35rem] text-sm text-secondaryFont hover:text-[#b0a47f7d]">
                Contact us
              </h3>
            </section>
          </section>
        </section>
        {/* contacts and socials  */}
        <section className="mt-10 flex flex-col justify-between gap-8 pl-5 pr-10">
          {/* section for contact  */}
          <section className="grid ">
            <h1 className={`${roboto.className} pb-1 text-main`}>CONTACT</h1>
            <a
              className="pb-[.40rem] text-sm text-secondaryFont hover:text-[#b0a47f7d]"
              href=""
            >
              Info@obiikriationz.com
            </a>
            <a
              className="pb-[.40rem] text-sm text-secondaryFont hover:text-[#b0a47f7d]"
              href=""
            >
              {" "}
              +91 7760 93 92 33
            </a>

            <p className="text-sm text-secondaryFont ">
              <span>2886, 15th A Main Road,</span>
              <br />
              <span>Behind Uma Maheshwara Layout,</span>
              <br />
              <span>BSK 2nd Stage,</span>
              <br />
              <span>Bengaluru 560070</span>
              <br />
            </p>
          </section>

          {/* section for socials */}
          <section className="flex gap-2 ">
            {/* Twitter */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="duration-400 w-12 rounded-full border-2 border-[#0f342a] fill-[#e3decf] px-3  py-3 transition-all ease-in-out hover:w-16 hover:border-main  hover:bg-main hover:fill-fontColor hover:px-5 "
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
            </svg>

            {/* FaceBook */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="duration-400 h-12 w-12 rounded-full border-2 border-[#0f342a] fill-[#e3decf] px-3  py-3 transition-all ease-in-out hover:w-16 hover:border-main  hover:bg-main hover:fill-fontColor hover:px-5 "
              viewBox="0 0 24 24"
            >
              <path d="M9.833,22V13.2H6.669V9.6H9.833V6.849C9.833,3.726,11.694,2,14.541,2a19.194,19.194,0,0,1,2.79.243V5.311H15.76a1.8,1.8,0,0,0-2.032,1.946V9.6h3.457l-.552,3.6h-2.9V22Z" />
            </svg>

            {/* LinkedIn */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="duration-400 h-12 w-12 rounded-full border-2 border-[#0f342a] fill-[#e3decf] px-3  py-3 transition-all ease-in-out hover:w-16 hover:border-main  hover:bg-main hover:fill-fontColor hover:px-5 "
              viewBox="0 0 24 24"
            >
              <path d="M20.9,20.9H17.166V15.053c0-1.394-.028-3.188-1.944-3.188-1.945,0-2.242,1.517-2.242,3.085V20.9H9.249V8.877h3.584v1.639h.048a3.932,3.932,0,0,1,3.538-1.942c3.78,0,4.479,2.488,4.479,5.726v6.6ZM5.036,7.232A2.167,2.167,0,1,1,7.2,5.064,2.165,2.165,0,0,1,5.036,7.232ZM6.906,20.9H3.165V8.877H6.906Z" />
            </svg>
            {/* whatsapp */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="duration-400 h-12 w-12 rounded-full border-2 border-[#0f342a] fill-[#e3decf] px-3  py-3 transition-all ease-in-out hover:w-16 hover:border-main  hover:bg-main hover:fill-fontColor hover:px-5 "
              viewBox="0 0 30 30"
            >
              {" "}
              <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" />
            </svg>
          </section>
        </section>
      </section>
      {/* Ending Of Footer */}
      <section className="mt-10 pb-12 pl-5 pr-4 text-xs text-[#394b3b]">
        <h1 className="pr-4 ">The Obii KriationZ © 2023 </h1>
        <ul className="flex gap-3 pt-[.45rem]">
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Accsssibility</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
