import axios from "axios";
import React from "react";
// import drinks from "../drinks.json";
class Drinks extends React.Component {
  // state = {
  //   products: [],
  //   type: "reset",
  // };
  componentDidMount() {
    axios.get("http://localhost:4000/api/products").then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }
  // productFilter(selection) {
  //   return () => {
  //     this.setState({ selection });
  //   };
  // }
  render() {
    return (
      <>
        <div className="product-container">
          {this.state.products.map((card) => {
            return (
              <div className="product">
                <img src={card.image} alt={card.name} />
                <h2 className="title">{card.name}</h2>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <h3>{card.description}</h3>
                <p className="price">${card.price}</p>
                <a href="contact.html" className="button">
                  ADD TO CART
                </a>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Drinks;
