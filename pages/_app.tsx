import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 xl:px-48 px-5 my-14 ">
        <div className="bg-white dark:bg-gray-900 lg:col-span-3 col-span-12 rounded-2xl p-4 text-center">
          <Sidebar />
        </div>
        <div className="bg-white dark:bg-gray-900 lg:col-span-9 col-span-12 rounded-2xl flex flex-col">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
