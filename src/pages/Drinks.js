import React from "react";
import drinks from "../drinks.json";
class Drinks extends React.Component {
  render() {
    return (
      <div class="product-container">
        {/* {drinks.snacks.map((snack) => (
          <div className="Product">
            <img
              src="https://cdn11.bigcommerce.com/s-gdttgy2o13/images/stencil/500x659/products/2318/11821/Untitled_design_35__68237.1625683715.png?c=2"
              alt="candy"
            />
            <h2 class="title">SKITTLES</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            {/* <!-- <h3>Skittles latest release with New Flavors and NO SHELL</h3> --> */}
        {/* <p class="price">$7.99</p>
            <a href="/contact.html" class="button">
              ADD TO CART
            </a>
          </div>
        ))} */}
        <div class="product">
          <img
            src="https://cdn11.bigcommerce.com/s-gdttgy2o13/images/stencil/500x659/products/2318/11821/Untitled_design_35__68237.1625683715.png?c=2"
            alt="candy"
          />
          <h2 class="title">SKITTLES</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          {/* <!-- <h3>Skittles latest release with New Flavors and NO SHELL</h3> --> */}
          <p class="price">$7.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>

        <div class="product">
          <img
            src="https://cdn.shopify.com/s/files/1/0027/6394/8081/collections/Doritos_Teriyaki_Burger_Updated_1600x.png?v=1619758945"
            alt="chips"
          />
          <h2 class="title">DORITOS</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          {/* <!-- <h3>Tast a burger inside a chip with this limited flavor "teryiaki burger"</h3> --> */}
          <p class="price">$5.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img
            src="https://cdn.shopify.com/s/files/1/1426/3142/products/0000_fantawhitepeach_medium.jpg?v=1632983573"
            alt="Soda"
          />
          <h2 class="title">FANTA</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          {/* <!-- <h3>Fanta white peach is extremly exclusive with its good tasting flavor</h3> --> */}
          <p class="price">$15.00</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81PFMk9gnSL._AC_UL116_SR116,116_.jpg"
            alt="chips"
          />
          <h2 class="title"> JAPANESE SODA</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          {/* <!-- <h3>One of our best sellers the "Japanese favorite Ramune Soda"</h3> --> */}
          <p class="price">$24.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81HdRsOvvVL._AC_UL116_SR116,116_.jpg"
            alt="Candy"
          />
          <h2 class="title">KIT-KAT</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          {/* <!-- <h3>Contains Random assorted Japanese Kit-Kats</h3> --> */}
          <p class="price">$26.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/81PHmb-YczL._AC_UL160_SR160,160_.jpg"
            alt="Candy"
          />
          <h2 class="title">SHOGUN</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          {/* <!-- <h3>Assorted Full bag of Shogun Japanese Candy</h3> --> */}
          <p class="price">$30.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtMk29WLGXamZU5PTDsoLAyIp_BwtE1aC5LZwP5y8G4nYL6EnbdWd8iE55XhoZFkTnD0&usqp=CAU"
            alt="chips"
          />
          <h2 class="title">LAYES</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star "></span>
          {/* <!-- <h3>Layes New Steak flavored Chips</h3> --> */}
          <p class="price">$8.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img
            src="https://cdn.shopify.com/s/files/1/0338/0694/2253/products/Kasugai_Gummy_Peach_b82e0033-7a71-490d-81ad-2d323fd12a4b_900x.jpg?v=1603996837"
            alt="Gummies"
          />
          <h2 class="title">PEACH GUMMIES</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          {/* <!-- <h3>Gluten Free Peach Gummies</h3> --> */}
          <p class="price">$5.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img
            src="https://cdn.shopify.com/s/files/1/0557/4269/3571/products/BG10054MelonDaifukuMochi_800x.jpg?v=1641586159"
            alt="mochi"
          />
          <h2 class="title">MOCHI MELON</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          {/* <!-- <h3>Creamy Red Bean taste with tropical Melon Flavor </h3> --> */}
          <p class="price">$4.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/911tJvmp0yL._AC_UL116_SR116,116_.jpg"
            alt="Snack"
          />
          <h2 class="title">BING-BING</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          {/* <!-- <h3>Wonderful Snack for on the go "crunchy"</h3> --> */}
          <p class="price">$5.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
        <div class="product">
          <img
            src="https://cdn.shopify.com/s/files/1/1426/3142/products/0003_Umaibo__Strawberry_Snack_medium.jpg?v=1595926816"
            alt="candy"
          />
          <h2 class="title">Strawberry Snack</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          {/* <!-- <h3>Traditional Japanese Snack with alot of flavors</h3> --> */}
          <p class="price">$8.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>

        <div class="product">
          <img
            src="https://www.saqramart.com/resources/upload/products/thumbnail2/4902443543761.jpg"
            alt="chips"
          />
          <h2 class="title">CHEETOS BQQ</h2>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          {/* <!-- <h3>Limited addition BBQ Japanese Flavored chips </h3> --> */}
          <p class="price">$8.99</p>
          <a href="contact.html" class="button">
            ADD TO CART
          </a>
        </div>
      </div>
    );
  }
}
export default Drinks;
