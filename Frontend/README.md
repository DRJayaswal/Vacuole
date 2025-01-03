# Vacuole Frontend

## Overview

Vacuole is a web application that allows users to sign in using Google or Gmail. This project is built using React and Firebase for authentication.

## Project Structure

```
Vacuole/
├── Frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── googleLogo.png
│   │   │   ├── gmailLogo.png
│   │   ├── components/
│   │   │   ├── Signin.tsx
│   │   ├── utils/
│   │   │   ├── FAuthApp.tsx
│   │   │   ├── FAuthProvider.tsx
│   │   ├── App.tsx
│   │   ├── index.tsx
│   ├── public/
│   ├── package.json
│   ├── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Firebase project

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/vacuole.git
    cd vacuole/Frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Configure Firebase:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Add your Firebase configuration to `src/utils/FAuthApp.tsx`.

### Running the Application

1. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Components

### Signin.tsx

This component handles user authentication using Google and Gmail.

- **Google Sign-In**: Uses Firebase's `signInWithPopup` method with `GoogleAuthProvider`.
- **Gmail Sign-In**: Sends a sign-in link to the user's email using Firebase's `sendSignInLinkToEmail` method.

## Troubleshooting

If you encounter issues with sending the sign-in link, ensure that:
- The email address is valid.
- The `actionCodeSettings` URL is correctly set.
- Your Firebase project is properly configured.

## License

This project is licensed under the MIT License.
