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
        <main className="w-full px-4">
          <section className="border-b-2 border-[#323232] pb-24 max-w-[1080px] pt-48 mx-auto">
            <h2 className="text-[52px] cursive">Writing</h2>
            <p className="max-w-3xl py-3">Articles on design engineering covering project case studies, thought process, front-end strategy, techniques and best practices, focused on Design, HTML, CSS, SVG, accessiblity, and everything in between.</p>
            <div className="pt-12">
              <ul className="none">
                <li className="mb-4 py-4">
                  <Link to="/writing/window-document-not-defined-gatsby-build" className="">
                    <h3 className="text-[24px] link">How to fix 'document not defined' in Gatsby Build</h3>
                  </Link>
                  <p className="my-4 max-w-2xl">The error <span className="small-code">`document is not defined`</span> or <span className="small-code">`window is not defined`</span>window is not defined you see when building a gatsby project is as a result of gatsby attempting to query the DOM on the server as it is server-side rendering.</p>
                </li>
                <li className="mb-4 py-4">
                  <Link to="/writing/how-to-setup-react-project-on-a-virtual-private-server" className="">
                    <h3 className="text-[24px] link"> How to Set Up React Project on a Virtual Server</h3>
                  </Link>
                  <p className="my-4 max-w-2xl">So, you&#39;ve finished building up the UI for your React project
              and you want to host it up on a remote machine. In this article,
              we&#39;ll be using Google Cloud Platform to host our sample React
              website.</p>
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
