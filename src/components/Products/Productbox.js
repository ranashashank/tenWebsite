import React from "react";

const Productbox = ({ media, name, price, urlPart }) => {
  const url = media?.url;
  const height = media?.height;
  const width = media?.width;
  return (
    <a
      href={`https://www.entrepreneurshipnetwork.net/product-page/${urlPart}`}
      rel="noopener"
    >
      <div className="product">
        <div className="product-img-block">
          <img
            src={`https://static.wixstatic.com/media/${url}/v1/fill/w_${width},h_${height},al_c,lg_1,q_80/${url}`}
            alt=""
          />
        </div>
        <div className="product-text">
          <div className="product-text-name">{name}</div>
          <div className="product-text-price">{price}</div>
        </div>
      </div>
    </a>
  );
};

export default Productbox;
