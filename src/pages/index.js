import * as React from "react";
import Layout from "../components/layout";
import portrait from "../images/portrait.jpg";
import home from "../images/home.png";
import board from "../images/board.png";


const IndexPage = () => {
  return (
    <Layout>
      <main className="w-full">
        <section className="grid grid-cols-3 gap-8 max-w-[1080px] pt-32 mx-auto">
          <div>
            <div className="w-full -mt-12 bg-blue-200 h-[160px] rounded-xl ">
              <img src={portrait} alt="portrait" className="w-full h-full rounded-xl  object-cover" />
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="text-[25px] mb-4">Hello. I’m Dennis. 👋</h3>
            <p>
              I build digital experiences. I focus on UX Design, UI Design, and UI Development. I’m passionate about growth design, accessibility, and usability of digital products.
            </p>
          </div>
        </section>

        <section className="max-w-[1080px] py-4 mx-auto">
          
          <h1 className="text-[55px] font-bold pt-12">Work </h1>

          <div className="bg-[#a231a4] dark:bg-[#926893] my-8 p-4 rounded-xl h-[480px] relative">
            <div className="text-white">
              <span className=" text-[14px] absolute top-6 left-6 font-bold">ROVA</span>
              <span className=" text-[14px] absolute bottom-6 left-6">Strategy, UX, UI</span>
              <span className=" text-[14px] absolute bottom-6 right-6">2021 (Ongoing)</span>
            </div>
              <img src={home} alt="home" className="h-full mx-auto" />        
            </div>
          <div className="bg-[#0F52BA] my-8 p-4 rounded-xl h-[480px] relative">
            <div className="text-white">
              <span className=" text-[14px] absolute top-6 left-6 font-bold">PRODEVS</span>
              <span className=" text-[14px] absolute bottom-6 left-6">Strategy, WEB, UI</span>
              <span className=" text-[14px] absolute bottom-6 right-6">2019</span>
            </div>
              <img src={board} alt="board" className="h-full mx-auto" />          
            </div>
          <div className="bg-[#800083] my-8 p-4 rounded-xl h-[480px] relative">
            <div className="text-white">
              <span className=" text-[14px] absolute top-6 left-6 font-bold">PAYFLOW</span>
              <span className=" text-[14px] absolute bottom-6 left-6">Strategy, UX, UI</span>
              <span className=" text-[14px] absolute bottom-6 right-6">2021</span>
            </div>
              <img src={home} alt="home" className="h-full mx-auto" />          
            </div>
          <div className="bg-[#800083] my-8 p-4 rounded-xl h-[480px] relative">
            <div className="text-white">
              <span className=" text-[14px] absolute top-6 left-6 font-bold">ZOAFIA</span>
              <span className=" text-[14px] absolute bottom-6 left-6">Strategy, UX, UI</span>
              <span className=" text-[14px] absolute bottom-6 right-6">2021</span>
            </div>
              <img src={board} alt="board" className="h-full mx-auto" />          
            </div>

        </section>


      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
