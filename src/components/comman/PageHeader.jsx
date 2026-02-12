import React from 'react';

const PageHeader = ({ title, breadcrumb = [], paragraph }) => {
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
                  <a href={item.pageLink}>{item.subPage}</a>
                ) : (
                  <span className="current">{item.subPage}</span>
                )}

                {!isLast && ' / '}
              </span>
            );
          })}
        </p>

        {paragraph && <p className="breadcrumb-text">{paragraph}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
