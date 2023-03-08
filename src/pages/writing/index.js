import React, { useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";

const Writing = () => {
  useEffect(() => {
    // const writingTl = gsap.timeline()
    // writingTl.to(".writing-heading", { opacity: 1, y: 0, duration: 0.5, delay: 0.2 })
    // writingTl.to(".article-item", { opacity: 1, y: 0, duration: 0.5, stagger: 0.3 })
  }, []);

  return (
    <>
      <Layout>
        <main className="w-full">
          <section className="grid grid-cols-5 border-b-2 border-[#323232] mb-24 pb-24 gap-16 max-w-[1080px] pt-32 mx-auto">
            <h2 className="text-[28px]">Writing</h2>
            <div className="wrapper">
              <ul className="none">
                <li className="article article-item wrapper-y mb-2">
                  <Link to="" className="link article-link">
                    <h3 className="mt-0 largetext co-white"></h3>
                  </Link>
                  <span className="ff-aquire co-white"></span>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Writing;
