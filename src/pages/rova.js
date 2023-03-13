import React from "react"
import { Link } from "gatsby";
import CaseStudy from "../components/case-study";
import hauserLogin from "../images/shots/hauser-login.png";

const Pixels = () => {

  return (
    <CaseStudy>
       <main className="w-full">
        <section className="mx-auto">
          <nav className="py-4">
            <Link to="/">Back</Link>
          </nav>
          <div className="bg-pink-400 h-[400px]">
          </div>
        </section>

        <section className="max-w-[1080px] mx-auto py-12 mx-auto">
          <h1 className="text-[58px]">ROVA : Borderless Banking</h1>
          <div className="grid grid-cols-2">
            <div>
              <div className="grid grid-cols-3 py-4">
                <p>Role</p>
                <p className="col-span-2">Product Designer, Strategy, UX, UI</p>
              </div>
              <div className="grid grid-cols-3 py-4">
                <p>Role</p>
                <p className="col-span-2">Product Designer, Strategy, UX, UI</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </CaseStudy>
  )
}

export default Pixels
