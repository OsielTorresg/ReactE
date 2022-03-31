import axios from "axios";
import React from "react";
// import drinks from "../drinks.json";
class Drinks extends React.Component {
  state = {
    products: [],
    type: "reset",
  };
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
        {/* <button onClick={this.productFilter(10)}>10</button> */}

        <div className="product-container">
          {this.state.products.map((card) => {
            return (
              <div class="product">
                <img src={card.image} alt={card.name} />
                <h2 class="title">{card.name}</h2>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <h3>{card.description}</h3>
                <p class="price">${card.price}</p>
                <a href="contact.html" class="button">
                  ADD TO CART
                </a>
              </div>
            );
          })}
          {/* <div class="product">
          <img src="./images/SkittlesP.png" alt="snack" />
          <h2 class="title">Skittles Smoothie</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <h3>Skittles latest release with New Flavors and NO SHELL</h3>
          <p class="price">$7.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>

        <div class="product">
          <img src="./images/DoritosP.png" alt="snack" />
          <h2 class="title">Doritos</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <h3>
            Taste a burger inside a chip with this limited flavor "teryiaki
            burger"
          </h3>
          <p class="price">$5.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img src="./images/FantaP.png" alt="snack" />
          <h2 class="title">Fanta</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <h3>
            Fanta white peach is extremly exclusive with its good tasting flavor
          </h3>
          <p class="price">$15.00</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img src="./images/JapSodaP.jpg" alt="snack" />
          <h2 class="title"> Japanese Soda</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          <h3>One of our best sellers the "Japanese favorite Ramune Soda"</h3>
          <p class="price">$24.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img src="./images/Kik-katP.jpg" />
          <h2 class="title">KIT-KAT</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <h3>Contains Random assorted Japanese Kit-Kats</h3>
          <p class="price">$26.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img src="./images/ShogunP.jpg" alt="snack" />
          <h2 class="title">Shogun</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <h3>Assorted Full bag of Shogun Japanese Candy</h3>
          <p class="price">$30.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img src="./images/LayesP.jpg" />
          <h2 class="title">Layes</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star "></span>
          <h3>Layes New flavored exotic Chips</h3>
          <p class="price">$8.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img src="./images/PeachP.jpg" alt="snack" />
          <h2 class="title">Peach Gummies</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <h3>Gluten Free Peach Gummies</h3>
          <p class="price">$5.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img src="./images/MochiP.jpg" alt="snack" />
          <h2 class="title">Mochi Melon</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <h3>Creamy Red Bean taste with tropical Melon Flavor </h3>
          <p class="price">$4.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img src="./images/BingP.jpg" alt="snack" />
          <h2 class="title">Bing-Bing</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <h3>Wonderful Snack for on the go "crunchy"</h3>
          <p class="price">$5.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img src="./images/StrawberryP.jpeg" alt="snack" />
          <h2 class="title">Strawberry Snack</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <h3>Traditional Japanese Snack with alot of flavors</h3>
          <p class="price">$8.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>

        <div class="product">
          <img src="./images/CheetosP.png" alt="snack" />
          <h2 class="title">Cheetos Bqq</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <h3>Limited addition BBQ Japanese Flavored chips </h3>
          <p class="price">$8.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div> */}
        </div>
      </>
    );
  }
}
export default Drinks;
