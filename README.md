# 👗 **Fashion Mart** - Your One-Stop Fashion Destination 👚

> **"Fashion is the armor to survive the reality of everyday life." — Bill Cunningham**

**Fashion Mart** is an innovative, fully functional e-commerce platform where users can browse, shop, and manage their fashion needs. From trendy apparel for men, women, and kids to beauty products and home & living essentials, Fashion Mart brings you the best of the fashion world right to your fingertips!

---

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🛠️ About the Project

**Fashion Mart** is a modern e-commerce website offering a seamless shopping experience. The website uses **React.js** for frontend development and **Firebase** for user authentication. Users can easily browse fashion products, add them to their cart, apply coupons, and proceed to checkout.

### Features:
- **Firebase Authentication**: Login and sign up with email/password.
- **Product Catalog**: A diverse range of fashion products in multiple categories (Men, Women, Kids, Beauty, Home & Living).
- **Cart & Wishlist**: Users can manage products in their cart and wishlist.
- **Search Functionality**: Easily search for products by name, category, price, etc.
- **Modern UI Design**: Built using **React.js**, **Bootstrap**, and **Toastify** for notifications.
- **Error Handling**: Robust error handling for authentication and user actions.
- **Responsive Design**: The site is fully responsive, optimized for both desktop and mobile.
- **Product Filters**: Filter products based on categories, brands, prices, and more.
- **Discount Coupons**: Apply discount coupons at checkout for savings.

---

## 💡 Features

### 1. **Firebase Authentication**

- Users can sign up and log in using email and password, stored securely with **Firebase Authentication**.
- Firebase also handles user session management, ensuring that users are logged in and logged out smoothly.
  
**Sign In/Sign Up Process**:
- On the login page, users can enter their credentials to sign in or sign up.
- If the user is new, they can create an account by providing an email and password.
- If there are any errors (e.g., invalid email or weak password), **Toastify** notifications will display error messages.

### 2. **Cart Functionality**

- **Cart Management**: Users can add products to the cart, view their cart, and remove items.
- **Quantity Management**: Users can increase or decrease the quantity of items in the cart.
- **Cart Summary**: The total price and discount (if any) will be displayed dynamically.
- **Toastify**: Notifications for adding/removing products from the cart.

### 3. **Wishlist**

- Users can add products to the **wishlist** for later viewing or purchasing.
- Wishlist is persistent across sessions, stored in **Firebase Firestore**.
- The wishlist is easily accessible through the user's profile dropdown.

### 4. **Search Functionality**

- A search bar allows users to quickly find products by name, category, and price.
- Search results are dynamically updated as the user types in the search query.

### 5. **Modern UI Design**

- The website uses **React.js** combined with **Bootstrap** for a responsive, mobile-first design.
- **Material-UI** components are used for enhanced styling and modern UI patterns.
- **Toastify** is used for displaying toast notifications (e.g., for errors, success messages).

### 6. **Menu Bar & Categories**

- A fully responsive **navigation menu** allows users to browse through various product categories (Men, Women, Kids, Beauty, Home & Living).
- **Mega menu** for easier access to product categories and promotions.

### 7. **Error Handling**

- Robust error handling ensures smooth user experience. If a user tries to perform an invalid action (e.g., login with incorrect credentials), a clear message will be displayed using **Toastify**.
- All authentication errors (e.g., incorrect email/password) are caught and displayed.

---

## 🛠️ Technologies Used

- **Frontend**:
  - **React.js**: For building the user interface.
  - **React Router**: For navigation and handling routing.
  - **Bootstrap**: For responsive grid system and UI components.
  - **Material-UI**: For modern, responsive design.
  - **Toastify**: For notifications and alerts (success, error, etc.).
  - **Swiper.js**: For creating product image sliders and carousels.
  - **Firebase**: For user authentication, user data storage, and real-time Firestore database.

---

## ⚙️ Setup

### 1. Set up Firebase Project:
Go to the Firebase Console and create a new project.

- Enable Firebase Authentication and Firestore.
- Set up your Firebase credentials and replace them in the `src/Firebase.js` file.

```js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```
### 2. Create Firestore Collections:
Users: Store user data (e.g., name, email).

Products: Store product details (name, category, price, description).

Orders: Store order details (userId, productIds, quantity, price).

## 📱 Usage
Homepage: Explore featured products, trending categories, and promotions.

Category Pages: Browse through different categories (Men, Women, Kids, Beauty, Home & Living).

Product Pages: View detailed information, images, and product reviews.

Cart: Add items to your cart, view total, and proceed to checkout.

Wishlist: Save your favorite items for later.

User Account: Sign up, login, and manage your account details.

## 📸 Screenshots

### Homepage:


![image](https://github.com/user-attachments/assets/5fb52def-1329-458e-b587-8eb12e81856d)

 
### Mordern designs:


![image](https://github.com/user-attachments/assets/345050f3-5792-46aa-91b2-67f08f34f2b6)
![image](https://github.com/user-attachments/assets/7611560b-2607-4170-ab05-393048a991c4)
![image](https://github.com/user-attachments/assets/9e4d125e-515b-4ec3-960b-a716e3a8e280)
![image](https://github.com/user-attachments/assets/6b35e6a7-49e5-4cf2-808d-0bffe3da3106)


### Search:


![image](https://github.com/user-attachments/assets/94338bba-18f8-4add-8c01-e8192a5de837)


### Login:


![image](https://github.com/user-attachments/assets/983e354c-6a8f-49d3-8122-9afbe166b45e)


### Product Page:


![image](https://github.com/user-attachments/assets/2660918d-1f18-454e-8dfc-5180324f4ce4)
![image](https://github.com/user-attachments/assets/c9ff1a76-a7ad-4fdd-a7bd-e5078c710795)
![image](https://github.com/user-attachments/assets/e54373e1-26eb-41f8-b307-d0caa4dbdf4b)
![image](https://github.com/user-attachments/assets/a370121c-0624-4cc0-a13e-e7c750055a2f)


### Wishlist:


![image](https://github.com/user-attachments/assets/e1ef0991-b598-4cf7-bf61-9e3e420d1453)


### Cart:


![image](https://github.com/user-attachments/assets/aa0ef227-255f-4148-b06e-51cc108210b6)
![image](https://github.com/user-attachments/assets/dbba0075-aa8d-4e6d-92ab-f1885477f1b9)
![image](https://github.com/user-attachments/assets/1f31864e-5054-4213-88ed-05a987a28cd9)


### Footer: 


![image](https://github.com/user-attachments/assets/b4a7fa69-b959-47fd-806f-fd8002e77917)


## 📞 Contact
For any queries or suggestions, feel free to contact us:

Email: gokulnath461123456@gmail.com

Thank you for visiting Fashion Mart! We hope you enjoy shopping with us.

Happy Shopping! 🛍️👗✨



## This README file includes:

- **Firebase Authentication** setup and error handling.
- **Cart, Wishlist, and Search** functionalities.
- **Responsive UI design** with Bootstrap and **Toastify** for notifications.
- Instructions on setting up Firebase, Firestore, and using the e-commerce features.

