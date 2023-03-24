import React from "react"
import Layout from "../components/layout";
import portrait from "../images/portrait.jpg";

const About = () => {

  return (
    <Layout>
      <main className="w-full px-4 pt-48 md:pt-32">
        <section className="md:grid md:grid-cols-5 border-b-2 border-[#cccccc] mb-24 pb-24 gap-16 max-w-[1080px] pt-32 mx-auto">
          <div className="col-span-2 pb-8">
            <div className="w-full -mt-12 bg-blue-200 md:h-[500px] h-[260px] rounded-xl ">
              <img src={portrait} alt="portrait" className="w-full h-full rounded-xl  object-cover" />
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="md:text-[48px] text-[32px] font-semibold cursive mb-4"> Dennis Tamunotonye Dickson</h2>
            <p className="py-2">
              I build digital experiences. I specialize in Web Design, UX / UI, Webflow, and Front End Development.
            </p>
            <p className="py-2">
              I enjoy working as part of a team in a collaborative, team-centered environment with opportunities to learn and grow. I love to contribute and collaborate to solve problems. 
            </p>
            <div className="mt-8">
              <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1S4pKsXHnEhIIoUOFdBw1JW9Amja2gWA_/view?usp=sharing" className="">
                <button className="border border-[#323232] rounded-sm px-6 py-2">View Resume</button>
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-[1080px] border-b-2 border-[#323232] mb-24 pb-24 py-4 mx-auto md:grid grid-cols-5 items-start gap-16">
          <div className="col-span-2">
            <p className="font-semibold">Clients / Projects</p>
          </div>
          <div className="col-span-2">
            <p className="text-[56px]">MTN</p>
            <p className="text-[56px]">Payflow</p>
            <p className="text-[56px]">FCCPC</p>
            <p className="text-[56px]">Eyowo</p>
            <p className="text-[56px]">Universal API</p>
            <p className="text-[56px]">CNS-Marine</p>
            <p className="text-[56px]">Clinq Gold</p>
            <p className="text-[56px]">Zoafia</p>
          </div>
        </section>

        <section className="max-w-[1080px] border-b-2 border-[#323232] mb-24 pb-24 py-4 mx-auto md:grid grid-cols-5 items-start gap-16">
          <div className="col-span-2">
            <p className="font-semibold">Experience / History</p>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 py-4">
              <p className="text-[16px]">Oct. ‘19  –  Mar. ‘23</p>
              <p className="text-[16px]">Protocoh</p>
              <p className="text-[16px]">UX/UI Designer, UI Engineer</p>
            </div>
            <div className="grid grid-cols-3 py-4">
              <p className="text-[16px]">Dec. ‘20  –  June ‘21</p>
              <p className="text-[16px]">Rova</p>
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
            <div className="grid grid-cols-3 py-4">
              <p className="text-[16px]">July ‘17  –  Jan. ‘18</p>
              <p className="text-[16px]">Rudigo</p>
              <p className="text-[16px]">Frontend Intern</p>
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
                <h3 className="pb-4 mt-0 text-[18px] font-semibold">UX</h3>
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
                <h3 className="pb-4 mt-0 text-[18px] font-semibold">Analytics</h3>
                <ul>
                  <li>Hotjar</li>
                  <li>Mixpanel</li>
                  <li>Google Analytics</li>
                </ul>
              </div>
              <div className="">
                <h3 className="pb-4 mt-0 text-[18px] font-semibold">Management</h3>
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
  )
}

export default About
