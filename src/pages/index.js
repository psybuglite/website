import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import home from "../images/home.png";
import roavaSavings from "../images/roava/roava-savings.png";
import board from "../images/board.png";
import portrait from "../images/portrait.jpg";


const IndexPage = () => {
  return (
    <Layout>
      <main className="w-full px-4">
        <section className="max-w-[1080px] py-4 pt-36 md:flex items-center mx-auto">
          <div className="ml-8 mr-12 my-12 md:my-0 w-[100px] h-[100px] relative">
            <img src={portrait} alt="portrait" className="w-[100px] h-[100px] rounded-full object-cover" />
            <span className=" w-[150px] absolute z-10 h-[150px] top-[5px] left-[5px] translate-x-[-50%] translate-y-[-50%]">
              <svg width={240} height={240} className={"spin animate-pulse duration-150"}>
                <defs>
                  <path
                    id="MyPath"
                    d="
                                M 60, 120
                                a 60, 60 0 1,1 120,0
                                a 60, 60 0 1,1 -120,0
                              "
                  />
                </defs>
                <text fontFamily={"serif"} fontSize={23.6} fill={"#aaaaaa"} stroke={"#aaaaaa"}>
                  <textPath href="#MyPath">.DESIGN. .CODE. .WRITE. .TEACH.</textPath>
                </text>
              </svg>
            </span>
          </div>
          <div className="max-w-[600px]">
            <p>My name is Dennis, and I’m a designer from Nigeria 🇳🇬.
            </p>
            <p>
            I have been designing for 5+ years, and worked for 3 financial institutions and 4 start-ups.
            </p>
          </div>
        </section>
        <section className="max-w-[1080px] py-4 mx-auto">
          <h1 className="text-[44px] md:text-[52px] font-semibold cursive pt-12">Work </h1>
          <Link to="/roava" className="block hover:bg-[#dddddd] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] my-8 px-4 py-16 rounded-xl min-h-[250px] relative">
            <div className="text-[#212121] dark:text-[#dddddd]">
              <span className=" text-[14px] absolute top-6 left-6 font-semibold">ROAVA</span>
              <span className=" text-[14px] absolute bottom-6 left-6 font-semibold">Strategy, UX, UI</span>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">2021</span>
            </div>
              <img src={roavaSavings} alt="home" className="max-h-[380px] mx-auto" />        
          </Link>
          <Link to="/roava" className="block hover:bg-[#dddddd] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] my-8 py-12 px-4 rounded-xl min-h-[250px] relative">
            <div className="text-[#212121] dark:text-[#dddddd]">
              <span className=" text-[14px] absolute top-6 left-6 font-semibold">PRODEVS</span>
              <span className=" text-[14px] absolute bottom-6 left-6 font-semibold">Strategy, WEB, UI</span>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">2019</span>
            </div>
              <img src={board} alt="board" className="max-h-[500px] mx-auto" />          
            </Link>
          <Link to="/roava" className="block hover:bg-[#dddddd] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] my-8 p-4 rounded-xl min-h-[250px] relative">
            <div className="text-[#212121] dark:text-[#dddddd]">
              <span className=" text-[14px] absolute top-6 left-6 font-semibold">PAYFLOW</span>
              <span className=" text-[14px] absolute bottom-6 left-6 font-semibold">Strategy, UX, UI</span>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">2021</span>
            </div>
              <img src={home} alt="home" className="max-h-[480px] mx-auto" />          
            </Link>
          <Link to="/roava" className="block hover:bg-[#dddddd] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] my-8 py-12 px-4 rounded-xl min-h-[250px] relative">
            <div className="text-[#212121] dark:text-[#dddddd]">
              <span className=" text-[14px] absolute top-6 left-6 font-semibold">ZOAFIA</span>
              <span className=" text-[14px] absolute bottom-6 left-6 font-semibold">Strategy, UX, UI</span>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">2021</span>
            </div>
              <img src={board} alt="board" className="max-h-[500px] mx-auto" />          
            </Link>
        </section>

        <section className="max-w-[1080px] md:grid grid-cols-2 mx-auto gap-8 py-24 border-b border-[#999999] dark:border-[#444444]">
          <div className="">
            <h2 className="font-semibold text-[44px] md:text-[52px] cursive pb-4">Publications</h2>
            <p>
            I often write about project case studies, tutorials, and articles on all things front-end design engineering.
            </p>
            <div className="py-8">
              <h3 className="font-semibold text-[18px]">Recent Articles</h3>
              <Link to="/writing/" className="underline inline-block py-2">
              How to fix 'document not defined' in Gatsby Build
              </Link>
              <Link to="/writing/" className="underline inline-block py-2">
              How to Set Up React Project on a Virtual Server
              </Link>
            </div>
            <div className="my-4">
              <Link to="/writing" className="underline">See all articles</Link>
            </div>
          </div>
          <div className="bg-black rounded-xl">
            
          </div>
        </section>

      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
