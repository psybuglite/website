import React from "react"; 
import { Seo } from "../components/seo"
import { Link } from "gatsby";
import Layout from "../components/layout";
import roavaBanner from "../images/roava/roava-banner.png";
import zoafiaBanner from "../images/zoafia/zoafia-banner.png";
import dappyBanner from "../images/dappy/dappy-banner.png";
import portrait from "../images/dennis.jpg";


const IndexPage = () => {

  return (
    <Layout>
      <main className="w-full px-4">
        <section className="max-w-[1080px] py-4 pt-36 md:flex items-center mx-auto">
          <div className="ml-8 mr-12 my-12 md:my-0 w-[100px] h-[100px] relative">
            <Link to="/about" className="relative z-20 link-item">
              <img src={portrait} alt="portrait" transition={{ duration: 0.1}} className="grayscale w-[100px] h-[100px] rounded-full object-cover hover:p-1" />
            </Link>
            <span className=" w-[150px] absolute z-10 h-[150px] top-[5px] left-[5px] translate-x-[-50%] translate-y-[-50%]">
              <svg width={240} height={240} className={"spin animate-pulse duration-150 fill-slate-400 hover:fill-orange-500"}>
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
                <text fontFamily={"serif"} fontSize={23.6}>
                  <textPath href="#MyPath">.DESIGN. .CODE. .WRITE. .TEACH.</textPath>
                </text>
              </svg>
            </span>
          </div>
          <div className="max-w-[600px]">
            <p>My name is Dennis, and I design user interfaces for mobile and web applications. 
            I have been designing for 5+ years, and worked for 3 financial institutions and 4 start-ups. By designing and teaching, I create impactful work that resonates with people.
            </p>
          </div>
        </section>
        <section className="max-w-[1080px] py-4 mx-auto">
          <h1 className="text-[44px] md:text-[52px] font-semibold cursive pt-12">Work </h1>
          
          <Link to="/roava" className="block portfolio-item hover:bg-[#eeeeee] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] my-8 px-4 py-12 hover:scale-[0.98] md:py-2 rounded-xl min-h-[500px] md:h-[300px] relative overflow-clip">
            <div className="text-[#212121] dark:text-[#dddddd]">
              <div className=" text-[14px] absolute top-6 left-6 font-semibold">
                <span className="">ROAVA</span> <br/>
                <span className="italic font-normal">Fintech</span>
              </div>
              <div className=" text-[14px] absolute bottom-6 left-6 font-semibold">
                <span className="">Role: <em className="font-normal">Product Designer</em> </span><br/>
                <span className="font-normal">IA, UX, UI, Testing</span>
              </div>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">2021</span>
            </div>
            <img src={roavaBanner} alt="home" className="h-[500px] md:h-full object-cover mx-auto" />
          </Link>

          <Link to="/zoafia" className="block portfolio-item hover:bg-[#eeeeee] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] mt-16 px-4 py-24 hover:scale-[0.98] md:py-12 rounded-xl md:min-h-[600px] md:h-[300px] relative">
            <div className="text-[#212121] dark:text-[#dddddd]">
              <div className=" text-[14px] absolute top-6 left-6 font-semibold">
                <span className="">ZOAFIA Inventory</span> <br/>
                <span className="italic font-normal">E-commerce</span>
              </div>
              <div className=" text-[14px] absolute bottom-6 left-6 font-semibold">
                <span className="">Role: <em className="font-normal">Product Designer</em> </span><br/>
                <span className="font-normal">UX Strategy, UX, UI</span>
              </div>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">2022 (ongoing)</span>
            </div>
            <div className="h-[250px] md:h-full">
              <img src={zoafiaBanner} alt="home" className="h-full object-cover md:object-cover mx-auto" />        
            </div>
          </Link>

          <Link to="/dappy" className="block portfolio-item hover:bg-[#eeeeee] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] mt-16 px-4 py-24 hover:scale-[0.98] md:py-12 rounded-xl md:min-h-[600px] md:h-[300px] relative">
            <div className="text-[#212121] dark:text-[#dddddd]">
              <div className=" text-[14px] absolute top-6 left-6 font-semibold">
                <span className="">DAPPY</span> <br/>
                <span className="italic font-normal">Blockchain</span>
              </div>
              <div className=" text-[14px] absolute bottom-6 left-6 font-semibold">
                <span className="">Role: <em className="font-normal">UX/UI Designer & Developer</em> </span><br/>
                <span className="font-normal">UX, UI, Development</span>
              </div>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">2021</span>
            </div>
            <div className="h-[250px] md:h-full">
              <img src={dappyBanner} alt="home" className="h-full object-cover md:object-cover mx-auto" />        
            </div>
          </Link>
        </section>

        <section className="max-w-[1080px] md:grid grid-cols-2 mx-auto gap-8 py-24 border-b border-[#999999] dark:border-[#444444]">
          <div className="">
            <h2 className="font-semibold text-[44px] md:text-[52px] cursive pb-4">Publications</h2>
            <p>
            I often write about project case studies, tutorials, and articles on all things front-end design engineering.
            </p>
          </div>
          <div className="md:pt-16 ">
            <div className="py-8">
              <h3 className="font-semibold text-[18px] mb-4">Recent Articles</h3>
              <Link to="/writing/window-document-not-defined-gatsby-build/" className="underline inline-block py-2 my-2 link-item">
              How to fix 'document not defined' in Gatsby Build
              </Link>
              <Link to="/writing/how-to-setup-react-project-on-a-virtual-private-server/" className="underline inline-block py-2 my-2 link-item">
              How to Set Up React Project on a Virtual Server
              </Link>
            </div>
            <div className="my-4">
              <Link to="/writing" className="underline link-item">See all articles</Link>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo title="UX/UI Designer & Developer - Dennis Tamunotonye Dickson" />
)
