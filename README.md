# Shopping Cart (Ps5 Place)

A react app implementing shopping cart functionality. This is a mock shop, pretending to sell playstation games-- not a real e-commerce application. 

This was the suggested final project of the React course at [The Odin Project](https://www.theodinproject.com/lessons/javascript-shopping-cart), practicing stable knowledge of the core concepts: state, props, and hooks.


### Accessing The App

Check it out: [PS5 Place](https://technikka.github.io/ShoppingCart_Ps5Place/)


## Technologies Used

* React 18.2.0
* [Font Awesome](https://fontawesome.com/)
* [uniqid](https://github.com/adamhalasz/uniqid)


## Description

This is a basic mock shop only implementing functionality for its cart. Some of the features include:

* Dynamically displays and updates the number of items in the cart.

* Imposes limits on order quantity per item to implement strict validation.

* Selecting quantity offers an input field and increment/decrement buttons.

* Success message displaying the number of items added to cart, or alerts that 0 items were added if order quantity on item has been reached. Message is removed when that product is selected again, or if the cart is viewed.

* Checkout modal allows for changing the quantity of selected items or removing them from the cart.

* Dynamically updates item count, total cost for item row, and cart summary whenever the state of the cart changes, either from the shop page or from the checkout modal.


#### Screenshots

<img src="/public/screenshot-shop-crop.jpg" width="500" alt="screenshot of shop page">

<img src="/public/screenshot-cart-crop.jpg" width="500" alt="screenshot of cart modal">


### Setup/Installation

To run this project locally:

1. Clone this repository.
2. Run `npm install` to install dependencies
3. Run `npm start` to start development server