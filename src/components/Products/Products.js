import React, { Component } from "react";
import Productbox from "./Productbox";

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }
  componentDidMount() {
    fetch("/api/products.json")
      .then((res) => res.json())
      .then((data) => {
        const productlist =
          data.data.catalog.category.productsWithMetaData.list;
        this.setState({ productList: productlist });
      });
  }
  render() {
    return (
      <div className="products">
        {this.state.productList.map((product) => (
          <Productbox
            media={product.media[0]}
            name={product.name}
            price={product.formattedPrice}
            key={product.id}
            urlPart={product.urlPart}
          />
        ))}
      </div>
    );
  }
}
