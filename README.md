# Airline-Management

## Technologies Used

- **Frontend**: HTML, CSS, React.js
- **Backend**: Express, Node.js, MongoDB

## Project Structure

- **backend/** → Node.js + Express server, MongoDB integration  
- **frontend/** → React.js application (UI for booking & management)  


## Installation Commands to Run the App

### Step-by-Step Instructions

1. **Install Node.js and npm**
   - If not already installed, download and install Node.js and npm from [Node.js official website](https://nodejs.org/).

2. **Clone the Repository**
   - Replace `<repository-url>` with your repository's URL and run the following command:

     ```bash
     git clone <repository-url>
     ```

3. **Navigate to the Project Directory**
   - Replace `<project-directory>` with the name of your cloned repository and run the following command:
   
     ```bash
     cd <project-directory>
     ```

### To Start the App

### Environment Setup

Create a `.env` file inside the `backend/` folder with the following variables:

MONGO_URI=your-mongodb-uri
PORT=5000

Run the following commands in a terminal:
```bash
cd backend
npm install
node index.js
```
```bash
cd frontend
npm install
npm start
```
### To Modify Flights and Airport Data 
Log in as an Admin using the following credentials:

Username: Admin

password: Admin123

### Features

1. Flight Search and Booking: Allowing users to search for flights based on their destination and travel date.

2. User Profiles: Enabling users to create profiles where they can store their personal information and view current, completed, and  cancelled bookings for a seamless booking experience.

3. Reviews and Ratings: Allowing users to leave reviews and ratings for airlines they have booked, helping others make informed decisions based on past experiences.

4. Notification System: Implementing a notification system to send alerts and reminders to users about check-in deadlines, updates on booked flights, and other important travel-related information.


