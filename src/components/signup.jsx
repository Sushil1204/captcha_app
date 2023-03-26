import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaText, setCaptchaText] = useState("");
    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme);

  // Generates a random captcha string
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";

    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return captcha;
  };

  // Updates the captcha text and resets the captcha input
  const updateCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptchaText(newCaptcha);
    setCaptcha("");
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (captcha === captchaText) {
      // Submit form
      alert("Form submitted!");
      updateCaptcha();
    } else {
      alert("Invalid captcha!");
      updateCaptcha();
    }
  };

  return (
    <div>
      <div className="flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black border-b-2 border-slate-700 px-5">
        <h1 className="text-3xl font-bold dark:text-white">Catcha APP</h1>
        {theme === "dark" ? (
          <a>
            <MdOutlineWbSunny
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-4xl text-indigo-600 dark:text-white text-center focus:shadow-none block md:inline cursor-pointer"
            />
          </a>
        ) : (
          <a>
            <MdOutlineDarkMode
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-4xl text-indigo-600 text-center focus:shadow-none block md:inline cursor-pointer"
            />
          </a>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-fit mx-auto mt-10 border-2 p-4 border-black dark:border-white dark:bg-gray-1000"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-white font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 dark:text-white font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 dark:text-white p-2 w-full rounded-md"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label
            htmlFor="captcha"
            className="block text-gray-700 dark:text-white font-bold mb-2"
          >
            Captcha:
          </label>
          <div className="flex items-center justify-center">
            <input
              type="text"
              id="captcha"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              className="border border-gray-400 p-2 rounded-l-md"
              maxLength="6"
              required
            />
            <span className="bg-gray-100 border border-gray-400 p-2 rounded-r-md ml-1">
              {captchaText}
            </span>
            <button
              type="button"
              onClick={updateCaptcha}
              className="bg-gray-200 text-gray-700 border border-gray-400 p-2 rounded-md ml-1"
            >
              Refresh
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
