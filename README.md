# 🍴 Food Delivery Backend Application

This backend application is built to streamline interactions between **Customers**, **Restaurants**, and **Delivery Staff**, ensuring efficient order management, real-time status updates, and seamless communication via email notifications. 

The project demonstrates advanced backend development skills in the JavaScript environment, with robust functionality and a clear structure.

## 🌟 Features
### User Roles
- **Customer**: Browse menus, place orders, and track updates.
- **Restaurant**: Manage menu items, handle orders (accept/reject/prepare/dispatch).
- **Delivery Staff**: View and update delivery statuses.

### Key Functionalities
#### **Customer Features**
- View a list of restaurants.
- Browse restaurant menus and add items to the cart.
- Place orders and receive real-time email notifications.
- Track order status updates.

#### **Restaurant Features**
- Add and manage menu items.
- Receive order notifications via email.
- Handle orders with the following actions:
  - **Accept/Reject**: Decide whether to process the order.
  - **Prepare**: Update order status to "Prepared."
  - **Dispatch**: Mark the order as dispatched.

#### **Order Management Workflow**
1. Order Placement (Customer).
2. Order Notification (Email to Restaurant).
3. Order Status Updates:
   - Accepted → Prepared → Dispatched → Delivered.


## 🔧 Built With
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building REST APIs.
- **MongoDB**: Database for storing user, menu, and order data.
- **Nodemailer**: Library for sending email notifications.



## How to Run the Project

Follow these steps to set up and run the project locally:

1. Clone the repository:
   ```bash
    git clone https://github.com/amitranjan75way/food-delivery-app
2. go to project directory
   ```bash
    cd food-delivery-backend
3. Install dependencies:
   ```bash
    npm install
   ```
4. run file
   ```bash
    npm run local
   ```
## Project Structure
- Authentication: Secure login and sign-up mechanisms.
- Email Notifications: Automatic emails for customers and restaurants after order placement.
- Order Management: Real-time order placement and status updates.
- Menu Management: Restaurants can manage their menu listings.
  ![diagram-export-18-01-2025-16_12_10](https://github.com/user-attachments/assets/989cc7a2-72c2-4fa6-a7c3-8953f6fd2998)

## Folder Structure
![diagram-export-18-01-2025-16_30_45](https://github.com/user-attachments/assets/69c322ce-5ba8-48d6-8cf1-e2f63d000ef2)

## Built With
- Node.js: Backend runtime environment.
- Express.js: Framework for building REST APIs.
- MongoDB: Database for storing user and order data.
- Nodemailer: Library for email notifications.


   
