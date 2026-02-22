import React from "react"
import { Seo } from "../components/seo"
import Layout from "../components/layout";
import portrait from "../images/dennis.jpg";

const About = () => {

  return (
    <Layout>
      <main className="w-full px-4 pt-24 md:pt-24">
        <section className="md:grid md:grid-cols-5 border-b-2 border-[#cccccc] dark:border-[#323232] mb-24 pb-24 gap-16 max-w-[1080px] pt-32 mx-auto">
          <div className="col-span-2 pb-8 md:pb-0">
            <div className="w-full max-w-[400px] h-[400px] rounded-xl ">
              <img
                src={portrait}
                alt="portrait"
                transition={{ duration: 0.1 }}
                className="grayscale duration-[2000ms] hover:grayscale-[20%]	w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="md:text-[54px] text-[32px] font-semibold cursive mb-4 mt-0">
              {" "}
              Dennis Tamunotonye Dickson
            </h2>
            <p className="py-2">
              I build digital experiences. I specialize in Web Design, UX / UI,
              Webflow, and Front End Development.
            </p>
            <p className="py-2">
              I enjoy working as part of a team in a collaborative,
              team-centered environment with opportunities to learn and grow. I
              love to contribute and collaborate to solve problems.
            </p>
            <div className="mt-8">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1CUx8TXMdFBRRO8eMsLwcHlzUNoHw-7pM/view?usp=sharing"
                className="inline-flex link-item"
              >
                <button className="border border-[#323232] flex items-center rounded-full px-6 py-2">
                  View Resume
                  <span className="link-arrow ml-4">
                    <svg
                      width={18}
                      height={16}
                      viewBox="0 0 18 16"
                      fill="none"
                      className="dark:stroke-white stroke-[#212121]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.40918 11.3334L12.5476 4.66675"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.40918 4.66675H12.5476V11.3334"
                        strokeWidth="0.666667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-[1080px] border-b-2 border-[#323232] mb-24 pb-24 py-4 mx-auto md:grid grid-cols-5 items-start gap-16">
          <div className="col-span-2">
            <p className="font-semibold">Clients / Projects</p>
          </div>
          <div className="col-span-2">
            <p className="text-[56px]">Embedly</p>
            <p className="text-[56px]">MTN</p>
            <p className="text-[56px]">Roava</p>
            <p className="text-[56px]">Payflow</p>
            <p className="text-[56px]">FCCPC</p>
            <p className="text-[56px]">Eyowo</p>
            <p className="text-[56px]">Zoafia</p>
          </div>
        </section>

        <section className="max-w-[1080px] border-b-2 border-[#323232] mb-24 pb-24 py-4 mx-auto md:grid grid-cols-5 items-start gap-16">
          <div className="col-span-2">
            <p className="font-semibold">Experience / History</p>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 py-4">
              <p className="text-[16px]">Mar. ‘25  – Present</p>
              <p className="text-[16px]">Sterling Bank</p>
              <p className="text-[16px]">Product Designer</p>
            </div>
            <div className="grid grid-cols-3 py-4">
              <p className="text-[16px]">Mar. ‘23  –  Present</p>
              <p className="text-[16px]">Nokhouse</p>
              <p className="text-[16px]">Founder, UX Engineer</p>
            </div>
            <div className="grid grid-cols-3 py-4">
              <p className="text-[16px]">Oct. ‘19  –  Mar. ‘23</p>
              <p className="text-[16px]">Protocoh</p>
              <p className="text-[16px]">UX/UI Designer, UI Engineer</p>
            </div>
            <div className="grid grid-cols-3 py-4">
              <p className="text-[16px]">Dec. ‘20  –  June ‘21</p>
              <p className="text-[16px]">Roava</p>
              <p className="text-[16px]">Product Designer</p>
            </div>
            <div className="grid grid-cols-3 py-4">
              <p className="text-[16px]">Nov. ‘18  –  Feb. ‘20</p>
              <p className="text-[16px]">Mkobo</p>
              <p className="text-[16px]">UX/UI Designer</p>
            </div>
            <div className="grid grid-cols-3 py-4">
              <p className="text-[16px]">Feb. ‘18  –  Aug. ‘18</p>
              <p className="text-[16px]">Softcom</p>
              <p className="text-[16px]">UX/UI Designer & Developer</p>
            </div>
          </div>
        </section>

        <section className="max-w-[1080px] border-b-2 border-[#323232] mb-24 pb-24 py-4 mx-auto md:grid grid-cols-5 items-start gap-16">
          <div className="col-span-2">
            <p className="font-semibold">Skills / Tools</p>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-x-4 gap-y-8">
              <div className="">
                <h3 className="pb-4 mt-0 text-[18px] font-semibold">UX</h3>
                <ul>
                  <li>User Research</li>
                  <li>User Flows</li>
                  <li>Design Systems</li>
                  <li>Journey Mapping</li>
                  <li>Information Architechture</li>
                  <li>Wireframes</li>
                  <li>Visual Design</li>
                  <li>Prototyping</li>
                  <li>User Testing</li>
                </ul>
              </div>
              <div className="">
                <h3 className="pb-4 mt-0 text-[18px] font-semibold">Tools</h3>
                <ul>
                  <li>Figma</li>
                  <li>Adobe Suite</li>
                  <li>Sketch</li>
                  <li>Whimsical</li>
                  <li>Miro</li>
                  <li>Balsamiq</li>
                  <li>Maze</li>
                  <li>Useberry</li>
                </ul>
              </div>
              <div className="">
                <h3 className="pb-4 mt-0 text-[18px] font-semibold">
                  Development
                </h3>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Gatsby.js</li>
                  <li>Next.js</li>
                  <li>WordPress</li>
                  <li>Webflow</li>
                </ul>
              </div>
              <div className="">
                <h3 className="pb-4 mt-0 text-[18px] font-semibold">
                  Analytics
                </h3>
                <ul>
                  <li>Hotjar</li>
                  <li>Mixpanel</li>
                  <li>Google Analytics</li>
                </ul>
              </div>
              <div className="">
                <h3 className="pb-4 mt-0 text-[18px] font-semibold">
                  Management
                </h3>
                <ul>
                  <li>Jira</li>
                  <li>Trello</li>
                  <li>Asana</li>
                  <li>Notion</li>
                  <li>Google Suite</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About

export const Head = () => (
  <Seo title="About me - Dennis Tamunotonye Dickson" />
)