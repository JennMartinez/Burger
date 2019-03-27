# Barnyard Burger

This is an assignment that utilizes **MySQL, Node, Express, Handlebars, and Object-Relational Mapping (ORM)** with a **Model-View-Controller (MVC)** design pattern.

**Heroku** is used to deploy the **Barnyard Burger App.**

https://sleepy-tor-30406.herokuapp.com/

Once deployed, the app will display three boxes that will display the options for the user to interact with Barnyard Burger. 

The first box is titled, **"Burger Menu."**

- This menu box will display the seven available burgers that the restaurant has to offer. The burgers are stored in MySQL database.
        
- Under each burger there is a button that states, **"Inhale The Burger!"** Once the user clicks the button, that specific burger will move to the second box entitled, **"Inhaled Burgers."**

**Below is a screenshot of the burgers available.**

![Image of menu](public/assets/images/menu.jpg)

The second box is titled, **"Inhaled Burgers."**

- This box will display in list form the inhaled burgers that were submitted by the **"Inhale The Burger!"** button from the Burger Menu, and the custom burger orders from the **"Burger Orders"** box.

**Below is a screenshot of a burger that has been submitted by the "Inhale The Burger!" and has been moved to the "Inhaled Burgers" box.**

![Image of inhaled burgers](public/assets/images/inhaled.jpg)

The third box is titled, **"Burger Orders."**

- There is a burger search bar that allows the user to input any custom burger that they wish to order. Once the user has typed the custom burger that they want, they can then click the **"Submit Order"** button. The **"Submit Order"** button lists the burger in the second box, **"Inhaled Burgers!"**

**Below is a screenshot of the user submitting a custom burger in the "Burger Orders" box and has been listed in the the "Inhaled Burgers" box by submitting the order.**



