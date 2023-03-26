import React from "react";
import Signup from "./components/signup";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
        <div className="bg-neutral-200 grid justify-center text-center min-h-screen m-0 p-0 dark:bg-slate-800">
          <Signup />
        </div>
    </ThemeProvider>
  );
};

export default App;
