import * as React from "react";
// import { IoIosAddCircle } from "react-icons/io"; <IoIosAddCircle />
import { FaHeart } from "react-icons/fa";
<FaHeart />;
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { MdAddAPhoto } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { useUserAuth } from "../../assets/context/userAuthContext";
import { Link } from "react-router-dom";

interface ISideBarProps {}

const SideBar: React.FunctionComponent<ISideBarProps> = () => {
  const navItems = [
    { name: "Home", link: "/", icon: <IoMdHome /> },
    { name: "Profile", link: "/profile", icon: <CgProfile /> },
    { name: "Inbox", link: "/chat", icon: <FaRegMessage /> },
    { name: "Add Photos", link: "/photos", icon: <MdAddAPhoto /> },
    { name: "My Photos", link: "", icon: <MdInsertPhoto /> },
    { name: "Likes", link: "", icon: <FaHeart /> },
    { name: "Notification", link: "", icon: <IoIosNotifications /> },
    { name: "Settings", link: "", icon: <IoSettings /> },
  ];

  const [activeTab, setActiveTab] = React.useState<string>("");
  const { logOut } = useUserAuth();
  return (
    <div className=" h-full md:block">
      <h2 className="text-center p-4 mx-auto font-bold text-3xl">
        <span className="text-red-400">Image</span>
        <span>Gram</span>
      </h2>
      <nav className="py-4 overflow-y-auto">
        {navItems.map((nav, index) => {
          return (
            <ul className="space-y-2 font-medium " key={index}>
              <li
                onClick={() => {
                  setActiveTab(nav.name);
                }}
              >
                <Link
                  to={nav.link}
                  className="flex items-center p-3 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-xl text-white"
                  style={{
                    backgroundColor: activeTab === nav.name ? "white" : "",
                    color: activeTab === nav.name ? "black" : "",
                    borderTopRightRadius: activeTab === nav.name ? "20px" : "",
                    borderBottomRightRadius:
                      activeTab === nav.name ? "80px" : "",
                  }}
                >
                  <span className="mr-4">{nav.icon}</span>
                  <span>{nav.name}</span>
                </Link>
              </li>
            </ul>
          );
        })}
        <ul className="space-y-2 font-medium ">
          <li
            onClick={() => {
              logOut();
              setActiveTab("logout");
            }}
            style={{
              backgroundColor: activeTab === "logout" ? "black" : "",
              color: activeTab === "logout" ? "white" : "",
            }}
          >
            <Link
              to="#"
              className="flex items-center p-3 px-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-xl text-white"
            >
              <span className="mr-4">
                <IoIosLogOut />
              </span>
              <span>Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
