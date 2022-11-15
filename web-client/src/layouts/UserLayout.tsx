import React, { ReactNode } from "react";
import Sidebar from "../components/reusables/Sidebar";

type UserLayoutProps = {
  children: ReactNode;
};

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <div className="bg-gray-300/30 flex h-screen p-10">
      <Sidebar />
      <div className="px-10">{children}</div>
    </div>
  );
};

export default UserLayout;
