import * as React from "react";
import SideBar from "../../components/sideBar";
import UserInfo from "../../components/userInfo";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-between w-full">
      <aside
        className="md:w-[20%] h-auto bg-black
"
      >
        <SideBar />
      </aside>

      <div className="md:w-[60%] text-center ">{children}</div>
      <aside className="hidden lg:block md:w-[20%] h-auto bg-black">
        <UserInfo />
      </aside>
    </div>
  );
};

export default Layout;
