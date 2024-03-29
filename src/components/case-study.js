import React from "react";
import Cursor from "./cursor";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

const CaseStudy = ({ children }) => (
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
        <Cursor />
        <div className="dark:text-[#eee]">{children}</div>
        
      </React.Fragment>
    )}
  />
);

CaseStudy.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CaseStudy;
