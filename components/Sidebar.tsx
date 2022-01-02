import { ImLocation } from "react-icons/im";
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {/* <img
        className="rounded-full w-32 h-32 mx-auto shadow-green-600 shadow-md"
        src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg"
        alt="My avatar"
      /> */}
      <Image
        className="rounded-full mx-auto shadow-green-600 shadow-md"
        src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg"
        alt="My avatar"
        width="128px"
        height="128px"
      />
      <h3 className="my-4 text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 tracking-wider font-kaushan">
        Jane Doe
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-gray-800 dark:text-slate-400 rounded-full ">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center gap-2 px-2 py-1 my-3 bg-gray-200 dark:bg-gray-800 dark:text-slate-400 rounded-full hover:bg-gray-300"
        href="#"
      >
        <VscFilePdf className="w-5 h-5 text-green-500" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="#">
          <AiFillYoutube className="w-8 h-8 cursor-pointer hover:text-green-600" />
        </a>
        <a href="#">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer hover:text-green-600" />
        </a>
        <a href="#">
          <AiFillGithub className="w-8 h-8 cursor-pointer hover:text-green-600" />
        </a>
      </div>
      <div>
        <div
          className="py-4 my-5 bg-gray-200 dark:bg-gray-800 dark:text-slate-400"
          style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        >
          <div className="flex justify-center gap-1 items-center">
            <ImLocation className="w-4 h-4 text-green-500" />
            <span>New York, US</span>
          </div>
          <div className="flex justify-center gap-1 items-center">
            <MdAlternateEmail className="w-4 h-4 text-green-500" />
            <p className="">myemail@smthng.com</p>
          </div>
          <div className="flex justify-center gap-1 items-center">
            <GiRotaryPhone className="w-4 h-4 text-green-500" />
            <p className="">+1-202-555-0258</p>
          </div>
        </div>
        <button className="w-8/12 text-white m-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 dark:text-slate-300">
          Email me
        </button>
        <button
          onClick={changeTheme}
          className="w-8/12 text-white m-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#fc28a8] to-[#03edf9] hover:from-blue-600 hover:to-green-600 dark:text-slate-300"
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
