import React from "react";
import { CgPlayButton } from "react-icons/cg";
import { Link } from "react-router-dom";

const Heading = ({ title, breadcrumb = [], paragraph }) => {
  return (
    <div className="page-header">
      <h1>{title}</h1>

      <div className="page-breadcrumb">
        <p>
          {breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;

            return (
              <span key={index}>
                {item.pageLink && !isLast ? (
                  <Link to={item.pageLink}>{item.subPage}</Link>
                ) : (
                  <span className="current">{item.subPage}</span>
                )}

                {!isLast && <CgPlayButton />}
              </span>
            );
          })}
        </p>

        {paragraph && <p className="breadcrumb-text">{paragraph}</p>}
      </div>
    </div>
  );
};

export default Heading;