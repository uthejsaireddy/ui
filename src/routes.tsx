import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdCalendarMonth,
  MdLayers,
  MdOutlineArticle,
  MdOutlineVerifiedUser,
  MdOutlineImportContacts,
  MdOutlineDialpad,
  MdOutlineBadge,
  MdOutlineFeed,
  MdAccountBox,
  MdArticle,
  MdEditCalendar,
  MdFactCheck
} from "react-icons/md";
import EventManagement from "views/admin/eventManagement";
import ResourceLibrary from "views/admin/resourceLibrary";
import TeacherManagement from "views/admin/teacherManagement";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Teacher Management",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdAccountBox className="h-6 w-6" />,
    // component: <NFTMarketplace />,
    component: <TeacherManagement/>,
    secondary: true,
  },
  {
    name: "Student Management",
    layout: "/admin",
    icon: <MdOutlineBadge className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Event Management",
    layout: "/admin",
    path: "event-management",
    icon: <MdCalendarMonth className="h-6 w-6" />,
    component: <EventManagement/>,
  },
  {
    name: "Resource Library",
    layout: "/admin",
    path: "resource-library",
    icon: <MdArticle className="h-6 w-6" />,
    component: <ResourceLibrary />,
  },
  {
    name: "Subjects",
    layout: "/admin",
    path: "profile",
    icon: <MdOutlineImportContacts className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Menus",
    layout: "/admin",
    path: "profile",
    icon: <MdOutlineDialpad className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Approvals",
    layout: "/admin",
    path: "profile",
    icon: <MdOutlineVerifiedUser className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Test Papers",
    layout: "/admin",
    path: "profile",
    icon: <MdOutlineFeed className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Test Results",
    layout: "/admin",
    path: "profile",
    icon: <MdFactCheck className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Assign",
    layout: "/admin",
    path: "profile",
    icon: <MdEditCalendar className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Exam Types",
    layout: "/admin",
    path: "profile",
    icon: <MdOutlineArticle className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Orders",
    layout: "/admin",
    path: "profile",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Troubles",
    layout: "/admin",
    path: "profile",
    icon: <MdLayers className="h-6 w-6" />,
    component: <Profile />,
  },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: "",
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
