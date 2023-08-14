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
        <section className="mt-10 flex flex-col justify-between pl-5 pr-10">
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
          <section className="flex ">
            {/* Twitter */}

      

            {/* FaceBook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 rounded-full border-2 border-[#0f342a]  fill-[#e3decf] p-3 "
              viewBox="0 0 24 24"
            >
              <path d="M9.833,22V13.2H6.669V9.6H9.833V6.849C9.833,3.726,11.694,2,14.541,2a19.194,19.194,0,0,1,2.79.243V5.311H15.76a1.8,1.8,0,0,0-2.032,1.946V9.6h3.457l-.552,3.6h-2.9V22Z" />
            </svg>
            {/* LinkedIn */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 rounded-full border-2 border-[#0f342a]  fill-[#e3decf] p-3 "
              viewBox="0 0 24 24"
            >
              <path d="M20.9,20.9H17.166V15.053c0-1.394-.028-3.188-1.944-3.188-1.945,0-2.242,1.517-2.242,3.085V20.9H9.249V8.877h3.584v1.639h.048a3.932,3.932,0,0,1,3.538-1.942c3.78,0,4.479,2.488,4.479,5.726v6.6ZM5.036,7.232A2.167,2.167,0,1,1,7.2,5.064,2.165,2.165,0,0,1,5.036,7.232ZM6.906,20.9H3.165V8.877H6.906Z" />
            </svg>
            {/* whatsapp */}
          
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
