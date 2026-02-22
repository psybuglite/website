import React from "react"; 
import { Seo } from "../components/seo"
import { Link } from "gatsby";
import Layout from "../components/layout";
import roavaBanner from "../images/roava/roava-banner.png";
import zoafiaBanner from "../images/zoafia/zoafia-banner.png";
import dappyBanner from "../images/dappy/dappy-banner.png";
import portrait from "../images/dennis.jpg";

const d = new Date();
let year = d.getFullYear();


const IndexPage = () => {

  return (
    <Layout>
      <main className="w-full px-4">
        <section className="max-w-[1080px] py-4 pt-36 md:flex items-center mx-auto">
          <div className="ml-8 mr-12 my-12 md:my-0 w-[100px] h-[100px] relative">
            <Link to="/about" className="relative z-20 link-item">
              <img
                src={portrait}
                alt="portrait"
                transition={{ duration: 0.1 }}
                className="grayscale w-[100px] h-[100px] rounded-full object-cover hover:p-1"
              />
            </Link>
            <span className=" w-[150px] absolute z-10 h-[150px] top-[5px] left-[5px] translate-x-[-50%] translate-y-[-50%]">
              <svg
                width={240}
                height={240}
                className={
                  "spin animate-pulse duration-150 fill-slate-400 hover:fill-orange-500"
                }
              >
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
                  <textPath href="#MyPath">
                    .DESIGN. .CODE. .WRITE. .TEACH.
                  </textPath>
                </text>
              </svg>
            </span>
          </div>
          <div className="max-w-[720px]">
            <p className="leading-6">
              My name is Dennis. I'm a senior product designer with{" "}
              {year - 2018}+ years of experience designing intuitive, scalable
              digital products across web and mobile. Strong in end-to-end
              product thinking, design systems, and cross-functional
              collaboration, translating user needs and business goals into
              clear, impactful experiences.
            </p>
          </div>
        </section>
        <section className="max-w-[1080px] py-4 mx-auto">
          <div className="flex items-center justify-between pt-12">
            <h1 className="text-[44px] md:text-[52px] font-semibold cursive">
              Work{" "}
            </h1>
            <a
              className="border border-[#999999] dark:border-[#444444] flex items-center my-8 px-4 py-4 rounded-full link-item"
              href="https://www.toptal.com/designers/resume/dennis-tamunotonye-dickson#qKrazE"
            >
              <span className="mr-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1893 0H10.2059L17.2256 7.09409L19.156 9.04396L19.7721 9.66744C19.8797 9.77627 20.0346 9.94054 20.1484 10.0369C20.0528 10.1652 19.9248 10.2748 19.8129 10.3907C19.573 10.6425 19.3308 10.8921 19.0862 11.1393L16.4659 13.7842C15.371 14.9129 14.2669 16.0325 13.1534 17.1429C12.9325 17.3638 12.7161 17.6068 12.4917 17.8267C12.3858 17.9303 12.2336 18.0988 12.1138 18.1832C12.7199 18.7902 13.3217 19.4014 13.9191 20.0169L15.8369 21.9717C15.6968 22.1339 15.5193 22.3037 15.3662 22.4569L14.6265 23.1968L14.1138 23.7098C14.038 23.786 13.8951 23.9379 13.8186 24H13.7891C13.6709 23.8923 13.5395 23.7519 13.4247 23.6357L12.7846 22.9883L10.5293 20.6999L3.85059 13.9539C6.52462 11.2266 9.21276 8.5133 11.9149 5.81395L8.2068 2.02841C8.28289 1.93269 8.41493 1.80554 8.50364 1.71572L9.0058 1.20737C9.41021 0.797406 9.77185 0.402709 10.1893 0ZM8.32441 14.2793C8.6397 14.5869 8.95207 14.8973 9.26151 15.2108C9.30706 15.2565 9.53489 15.4989 9.56944 15.5183C9.839 15.2177 10.1957 14.877 10.4838 14.5877C11.0052 14.0668 11.5231 13.5427 12.0376 13.015C12.7818 12.2554 13.5313 11.501 14.2861 10.752L15.074 9.96268C15.223 9.81346 15.4004 9.62831 15.5554 9.48931C15.1824 9.13109 14.8226 8.75667 14.4554 8.39221C14.4332 8.37007 14.3395 8.26911 14.32 8.25761C14.1859 8.42279 13.9928 8.60662 13.8396 8.76026L13.1047 9.49696L10.6769 11.931L9.08129 13.5489C8.87395 13.7584 8.55091 14.1211 8.32441 14.2793Z"
                    fill="#204ED0"
                  />
                </svg>
              </span>
              Hire me on Toptal
            </a>
          </div>

          <Link
            to="/roava"
            className="block portfolio-item hover:bg-[#eeeeee] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] my-8 px-4 py-12 hover:scale-[0.98] md:py-2 rounded-xl min-h-[500px] md:h-[300px] relative overflow-clip"
          >
            <div className="text-[#212121] dark:text-[#dddddd]">
              <div className=" text-[14px] absolute top-6 left-6 font-semibold">
                <span className="">ROAVA</span> <br />
                <span className="italic font-normal">Fintech</span>
              </div>
              <div className=" text-[14px] absolute bottom-6 left-6 font-semibold">
                <span className="">
                  Role: <em className="font-normal">Product Designer</em>{" "}
                </span>
                <br />
                <span className="font-normal">IA, UX, UI, Testing</span>
              </div>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">
                2021
              </span>
            </div>
            <img
              src={roavaBanner}
              alt="home"
              className="h-[500px] md:h-full object-cover mx-auto"
            />
          </Link>

          <Link
            to="/zoafia"
            className="block portfolio-item hover:bg-[#eeeeee] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] mt-16 px-4 py-24 hover:scale-[0.98] md:py-12 rounded-xl md:min-h-[600px] md:h-[300px] relative"
          >
            <div className="text-[#212121] dark:text-[#dddddd]">
              <div className=" text-[14px] absolute top-6 left-6 font-semibold">
                <span className="">ZOAFIA Inventory</span> <br />
                <span className="italic font-normal">E-commerce</span>
              </div>
              <div className=" text-[14px] absolute bottom-6 left-6 font-semibold">
                <span className="">
                  Role: <em className="font-normal">Product Designer</em>{" "}
                </span>
                <br />
                <span className="font-normal">UX Strategy, UX, UI</span>
              </div>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">
                2022
              </span>
            </div>
            <div className="h-[250px] md:h-full">
              <img
                src={zoafiaBanner}
                alt="home"
                className="h-full object-cover md:object-cover mx-auto"
              />
            </div>
          </Link>

          <Link
            to="/dappy"
            className="block portfolio-item hover:bg-[#eeeeee] dark:hover:bg-[#212121] bg-transparent border border-[#999999] dark:border-[#444444] mt-16 px-4 py-24 hover:scale-[0.98] md:py-12 rounded-xl md:min-h-[600px] md:h-[300px] relative"
          >
            <div className="text-[#212121] dark:text-[#dddddd]">
              <div className=" text-[14px] absolute top-6 left-6 font-semibold">
                <span className="">DAPPY</span> <br />
                <span className="italic font-normal">Blockchain</span>
              </div>
              <div className=" text-[14px] absolute bottom-6 left-6 font-semibold">
                <span className="">
                  Role:{" "}
                  <em className="font-normal">
                    UX/UI Designer & Developer
                  </em>{" "}
                </span>
                <br />
                <span className="font-normal">UX, UI, Development</span>
              </div>
              <span className=" text-[14px] absolute bottom-6 right-6 font-semibold">
                2021
              </span>
            </div>
            <div className="h-[250px] md:h-full">
              <img
                src={dappyBanner}
                alt="home"
                className="h-full object-cover md:object-cover mx-auto"
              />
            </div>
          </Link>
        </section>

        <section className="flex mx-auto gap-8 py-24 border-b border-[#999999] dark:border-[#444444]">
          <div className="mx-auto ">
            <div id="r">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '@import"https://use.typekit.net/kmj5qkr.css";:root{--h:polygon(50% 0,100% 24%,100% 76%,50% 100%,0 76%,0 24%)}.h{display:inline-block;background:#25a9ef;padding:6px;clip-path:var(--h)}.a{width:200px;padding:24px 0 40px;display:flex;flex-direction:column;align-items:center;gap:8px;color:#fff;text-align:center;background:linear-gradient(153deg,#0667ff 18%,#204ecf 40%,#0f256e 80%);clip-path:var(--h);box-shadow:0 28px 50px rgba(6,30,96,.35)}#r{font-family:proxima-nova,Arial,sans-serif}.b{margin:0;font-size:19px;font-weight:700;line-height:1}.c{width:120px;height:1px;background:#25a9ef}.d{font-size:16px;opacity:.8;margin-bottom:-6px}.f{display:inline-flex;align-items:center;justify-content:center;padding:4px 20px;border-radius:6px;background:#296bff;color:#fff;font-size:16px;font-weight:500;text-decoration-thickness:.5px;text-underline-offset:2px}',
                }}
              />
              <div className="h">
                <div className="a">
                  <svg
                    width={64}
                    viewBox="0 0 60 17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m20.85 6.38 6.06-.89 2.72-5.49 2.71 5.49 6.06.89-4.39 4.28 1.04 6.03-5.42-2.85-5.43 2.85 1.04-6.03zm33.06 7.17 1.85-.27.82-1.67.83 1.67 1.84.27-1.33 1.31.31 1.83-1.65-.87-1.66.87.32-1.83zm-3.38-3.01-3.61-.52-1.61-3.26-1.62 3.26-3.6.52 2.6 2.55-.61 3.59 3.23-1.69 3.21 1.69-.61-3.59zm-45.19 3.01-1.85-.27-.82-1.67-.83 1.67-1.84.27 1.33 1.31-.31 1.83 1.65-.87 1.65.87-.31-1.83zm3.38-3.01 3.61-.52 1.61-3.26 1.61 3.26 3.61.52-2.6 2.55.61 3.59-3.23-1.69-3.22 1.69.62-3.59z"
                      fill="#fff"
                    />
                  </svg>
                  <h3 className="b">TOP 3% TALENT</h3>
                  <div className="c" />
                  <span className="d">Vetted by</span>
                  <svg
                    viewBox="0 0 108 30"
                    width={100}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
                      <path d="m8.11 0 6.71 6.7c.05.05.09.1.15.15l5.85 5.85-9.51 9.46 4.35 4.36-2.91 2.89-6.66-6.66c-.08-.07-.16-.15-.24-.23l-5.85-5.84 9.48-9.43-4.32-4.31zm4.25 10.5c-.09-.02-.18-.02-.26 0-.09.03-.16.07-.32.22l-5.41 5.39c-.16.16-.2.23-.22.31-.03.09-.03.18 0 .26.02.09.07.17.22.32l1.72 1.72c.15.15.22.19.31.22.09.02.17.02.26 0 .09-.03.16-.07.31-.22l5.41-5.39c.16-.15.2-.23.23-.31.02-.09.02-.17 0-.26s-.07-.16-.22-.31l-1.72-1.72c-.15-.16-.23-.2-.31-.23z" />
                      <path d="m62.65 7.76c2.11 0 3.91.82 5.34 2.4 1.46 1.53 2.19 3.64 2.18 6.26 0 2.56-.75 4.8-2.24 6.38-1.47 1.57-3.34 2.37-5.58 2.37-1.93-.01-3.68-.7-4.84-1.89l-.16-.17-.01 6.75-3.82-.01v-.28l.04-21.61h3.8l-.01 2.64c1.25-1.41 3.26-2.84 5.3-2.84zm24.45.06c2.18 0 3.68.49 4.84 1.44 1.11.92 1.7 2.56 1.75 4.29v.26l-.02 11.14h-3.87v-.46c0-.48 0-.97 0-1.47-1.12 1.55-2.68 2.3-4.76 2.3-1.65 0-3.05-.5-4.07-1.43-1.03-.94-1.58-2.23-1.58-3.73.02-2.83 2.02-4.79 5.52-5.4l.27-.05 4.64-.73v-.37c0-.78-.23-1.72-.69-2.11-.47-.4-1.04-.73-2.03-.73-2.73 0-3.29 2.01-3.32 3.02v.09l-3.42.04c0-1.49.69-3.42 2.08-4.63 1.12-.97 2.75-1.42 4.33-1.47h.3zm-14.98-4.36h3.81l-.01 4.56h3.53v3.18l-3.54-.01-.01 8.54c0 .94.19 1.56.6 1.85.43.3 1.3.02 1.3.02l.34 3.32s-1.2.31-1.96.31c-.99 0-1.84-.25-2.49-.75-1.06-.8-1.6-2.2-1.6-4.17l.02-9.12-3.19-3.19 3.2.01zm-22.46 6.8c1.1 1.13 2.41 3.14 2.4 6.26-.01 3.11-1.32 5.11-2.41 6.24-1.5 1.54-3.54 2.42-5.59 2.42-.08 0-.16 0-.25-.01-2.19-.01-4.13-.79-5.75-2.33-1.63-1.55-2.46-3.68-2.46-6.36s.84-4.82 2.47-6.36c1.62-1.53 3.55-2.3 5.75-2.3 2.17-.07 4.29.83 5.84 2.44zm-8.81-7.04v3.77l-7.36.01.02 17.97-3.97-.01v-.34l.03-17.63h-7.51l.01-3.77zm54.68.25 3.42.01v.09l-.03 21.38-3.42-.01v-.1zm-5.71 13.58-3.81.64c-1.86.32-2.72 1.04-2.73 2.3-.01 1.15.81 1.92 2.09 1.99h.16.02c2.44 0 4.17-1.9 4.26-4.67l.01-.22zm-46.02-5.84c-1.28 0-2.39.49-3.29 1.47-.88.96-1.33 2.24-1.33 3.81 0 1.58.45 2.86 1.33 3.82.89.98 2 1.47 3.28 1.48 1.3 0 2.42-.49 3.31-1.47.9-.98 1.35-2.26 1.36-3.81.01-1.56-.45-2.84-1.35-3.82s-2.01-1.48-3.31-1.48zm17.94.12h-.02c-1.28 0-2.34.46-3.24 1.43-.9.94-1.35 2.16-1.36 3.63 0 1.49.45 2.83 1.35 3.8.92.95 1.98 1.42 3.25 1.42 1.29 0 2.38-.48 3.25-1.41.91-.97 1.35-2.3 1.36-3.79 0-1.48-.46-2.7-1.34-3.63-.87-.96-1.96-1.45-3.25-1.45z" />
                    </g>
                  </svg>
                  <a
                    className="f link-item"
                    href="https://www.toptal.com/designers/resume/dennis-tamunotonye-dickson#qKrazE"
                  >
                    Hire me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1080px] md:grid grid-cols-2 mx-auto gap-8 py-24 border-b border-[#999999] dark:border-[#444444]">
          <div className="">
            <h2 className="font-semibold text-[44px] md:text-[52px] cursive pb-4">
              Publications
            </h2>
            <p>
              I often write about project case studies, tutorials, and articles
              on all things front-end design engineering.
            </p>
          </div>
          <div className="md:pt-16 ">
            <div className="py-8">
              <h3 className="font-semibold text-[18px] mb-4">
                Recent Articles
              </h3>
              <Link
                to="/writing/window-document-not-defined-gatsby-build/"
                className="underline inline-block py-2 my-2 link-item"
              >
                How to fix 'document not defined' in Gatsby Build
              </Link>
              <Link
                to="/writing/how-to-setup-react-project-on-a-virtual-private-server/"
                className="underline inline-block py-2 my-2 link-item"
              >
                How to Set Up React Project on a Virtual Server
              </Link>
            </div>
            <div className="my-4">
              <Link to="/writing" className="underline link-item">
                See all articles
              </Link>
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
