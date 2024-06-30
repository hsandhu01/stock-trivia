# Stock Market Trivia App

This is a stock market/finance trivia app featuring a registration and login system using Firebase, a leaderboard, and enhanced visual effects to provide a fun and engaging user experience.

## Features

- **User Authentication**: Register and log in using Firebase Authentication.
- **Trivia Questions**: Answer trivia questions related to the stock market and finance.
- **Leaderboard**: Track top scores and compete with other users.
- **Visual Effects**: Enjoy confetti and other visual feedback for correct and incorrect answers.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Firebase Authentication**: Secure user authentication and management.
- **Firestore**: NoSQL database for storing trivia questions and leaderboard scores.
- **Material-UI**: UI components for a consistent design.
- **Framer Motion**: Animation library for interactive visual effects.
- **React Confetti**: Library for confetti effects.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js and npm from [Node.js official website](https://nodejs.org/).
- **Firebase Account**: Create a Firebase project and set up Firestore and Authentication.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/stock-trivia-app.git
   cd stock-trivia-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Add a web app to your project to get the Firebase configuration.
   - Enable Authentication (Email/Password) and Firestore Database in the Firebase Console.
   - Create a `firebase.js` file in the `src` directory and add your Firebase configuration:

     ```javascript
     import { initializeApp } from 'firebase/app';
     import { getAuth } from 'firebase/auth';
     import { getFirestore } from 'firebase/firestore';

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
       measurementId: "YOUR_MEASUREMENT_ID"
     };

     const app = initializeApp(firebaseConfig);
     const auth = getAuth(app);
     const db = getFirestore(app);

     export { auth, db };
     ```

4. **Start the development server**:

   ```bash
   npm start
   ```

5. **Open your browser and navigate to** `http://localhost:3000`.

## Usage

1. **Register a new user**: Use the registration form to create a new account.
2. **Log in**: Use the login form to access your account.
3. **Play Trivia**: Answer the trivia questions and see your score update in real-time.
4. **View Leaderboard**: Check the leaderboard to see top scores.

## Project Structure

- **public/**: Contains the public assets and `index.html`.
- **src/**: Contains the source code.
  - **components/**: Contains React components like `Trivia.js`, `Leaderboard.js`, etc.
  - **firebase.js**: Firebase configuration and initialization.
  - **App.js**: Main application component.
  - **App.css**: Application-wide styles.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


---

## Acknowledgements

- [Firebase](https://firebase.google.com/) - Backend services and database.
- [Material-UI](https://material-ui.com/) - UI components.
- [Framer Motion](https://www.framer.com/motion/) - Animation library.
- [React Confetti](https://github.com/alampros/react-confetti) - Confetti effects.