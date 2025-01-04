import * as React from "react";
import SideBar from "../../components/sideBar";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = () => {
  return (
    <div className="flex w-full">
      <aside className="md:w-[30%] lg:w-[40%] bg-gray-800 h-screen">
        <SideBar />
      </aside>
      <div className="w-full text-center">Main</div>
      <aside className="w-40 hidden md:block">aside</aside>
    </div>
  );
};

export default Layout;
