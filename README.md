# Next.js Firebase Authentication App

A simple Next.js application with TypeScript that implements user authentication using Firebase. The app includes a login page for user registration and login, and a homepage that greets the user by their full name with a logout button.

## Features

- **Login Page**: Allows users to register or log in with Full Name, Email Address, and Password.
- **Firebase Authentication**: Handles user registration (storing full name) and login (fetching user details).
- **Homepage**: Displays a personalized greeting with the user's full name and a logout button.
- **Navigation**: Redirects to the homepage after successful login and back to the login page after logout.
- **TypeScript**: Ensures type safety across the application.
- **Tailwind CSS**: Used for styling the UI.

## Prerequisites

- Node.js (v18 or later)
- Firebase project with Authentication enabled
- npm or yarn

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd my-nextjs-firebase-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Email/Password authentication in the Authentication section.
   - Copy your Firebase configuration (API key, project ID, etc.) and create a `.env.local` file in the project root:
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
     ```
   - Replace the placeholders with your Firebase project credentials.

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Login Page**: Access at `/login`. Enter your full name, email, and password to register or log in.
  - **New User**: Fill in all fields to register. The full name is stored in Firebase Authentication.
  - **Returning User**: Enter email and password to log in. The app fetches the user's full name.

- **Homepage**: After login, you're redirected to the homepage (`/`) with a greeting ("Hey, <Full Name>! You're successfully logged in") and a logout button.
- **Logout**: Click the logout button to sign out and return to the login page.

## Project Structure

- `/app`: Contains Next.js pages and layouts.
  - `/login/page.tsx`: Login page with form for registration and login.
  - `/page.tsx`: Homepage with user greeting and logout button.
  - `/layout.tsx`: Root layout with global styles.

- `/components`: Reusable React components.
  - `LogoutButton.tsx`: Logout button component.

- `/lib`: Firebase configuration and initialization.
  - `firebase.ts`: Firebase setup and authentication functions.

- `/types`: TypeScript type definitions.
  - `index.ts`: Type for Firebase user data.

- `/public`: Static assets (empty in this project).
- `README.md`: Project documentation.
- `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`: Configuration files.

## Technologies Used

- **Next.js 14**: React framework with App Router.
- **TypeScript**: For type-safe code.
- **Firebase Authentication**: For user registration and login.
- **Tailwind CSS**: For responsive styling.
- **React**: For building UI components.

## Notes

- Ensure your Firebase configuration is correct in `.env.local` to avoid authentication errors.
- The app uses client-side Firebase Authentication, so Firebase configuration keys are prefixed with `NEXT_PUBLIC_`.
- Error handling is implemented for common scenarios (e.g., invalid credentials, duplicate email).
