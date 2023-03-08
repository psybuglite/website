import React from "react";
import Header from "./header";
import Footer from "./footer"
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data) => (
      <React.Fragment>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <div className="dark:text-[#eee]">{children}</div>
        <Footer></Footer>
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
