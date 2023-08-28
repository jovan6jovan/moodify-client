import { FC } from "react";

const loginUrl = import.meta.env.DEV
  ? import.meta.env.VITE_LOGIN_URL_LOCAL
  : import.meta.env.VITE_LOGIN_URL_PROD;

const LoginPage: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome to Moodify!</h1>
        <p className="text-gray-600">No need to enter any credentials.</p>
        <p className="text-gray-600">
          This app uses my Spotify account to offer you a personalized music
          playlist based on your mood.
        </p>
        <p className="text-gray-600 mt-4 mb-6">
          Just click the "Login" button below to get started.
        </p>
        <a
          href={loginUrl}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full inline-block transition duration-300"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
