import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 xl:px-48 px-5 my-8 ">
        <div className="bg-white dark:bg-gray-900 lg:col-span-3 col-span-12 rounded-2xl p-4 text-center shadow-md shadow-black dark:shadow-slate-500">
          <Sidebar />
        </div>
        <div className="bg-white dark:bg-gray-900 lg:col-span-9 col-span-12 rounded-2xl flex flex-col shadow-md shadow-black dark:shadow-slate-500">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
