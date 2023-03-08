import React from "react"
import Layout from "../components/layout";

const NotFoundPage = () => {

  return (
    <Layout>
      <main className="w-full">
        <section className="grid grid-cols-5 border-b-2 border-[#323232] mb-24 pb-24 gap-16 max-w-[1080px] pt-32 mx-auto">
          <h1 className="text-[88px] text-center">
            404
          </h1>
          
        </section>
      </main>
    </Layout>
  )
}

export default NotFoundPage
