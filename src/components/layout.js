import React from "react";
import Header from "./header";
import Footer from "./footer"
import Cursor from "./cursor";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `)
    return (
      <React.Fragment>
        <Cursor />
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        {/* <span className="bars h-screen w-[300px] bg-[#DC5132] border-l-[100px] border-r-[100px] translate-x-[-50%] border-grey-100 fixed top-0 left-[50%]"></span> */}
        <div className="dark:text-[#eee]">{children}</div>
        <Footer></Footer>
      </React.Fragment>
    )
  };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
