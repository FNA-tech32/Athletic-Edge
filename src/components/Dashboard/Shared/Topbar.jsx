import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo, logOut } from "../../../service/storeUserInfo";
import logo from "../../../assets/logo/loder.png";
import BrandLogo from "../../shared/BrandLogo/BrandLogo";
import {
  useCurrentUserQuery,
  useGetUserDetailsQuery,
} from "../../../redux/api/user/userSlice";

const Topbar = ({ sidebar, setSidebar }) => {
  // Handel Profile Button
  const [profile, setProfile] = useState(false);

  // Get User Information
  const user = getUserInfo();

  // User information
  const { data, error, isLoading } = useCurrentUserQuery(user?.id);

  // User Details Information
  const { data: userDetails } = useGetUserDetailsQuery(user?.id);

  // Navigation
  const navigation = useNavigate();

  return (
    <div className="flex justify-between bg-white items-center px-4 py-2 border-b border-gray fixed w-full h-[60px] z-40">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <BrandLogo textClassName="text-blue" size="text-2xl" />
        </Link>
        <button
          className="mx-4 md:hidden"
          onClick={() => {
            setSidebar(!sidebar);
          }}
          aria-label="Toggle sidebar"
        >
          <i className="fa-solid fa-bars text-red text-[25px]"></i>
        </button>
      </div>
      <div className="flex space-x-4 items-center ">
        <button className="border border-gray p-2 h-[40px] w-[40px] flex items-center justify-center">
          <i className="fa-solid fa-bell text-[20px] text-gray"></i>
        </button>
        <img
          onClick={() => {
            setProfile(!profile);
          }}
          src={
            userDetails?.user?.profilePhoto
              ? userDetails?.user?.profilePhoto
              : logo
          }
          className="h-[40px] w-[40px] cursor-pointer border border-gray p-1 rounded-full object-cover"
          alt="Profile"
        />
        {profile && (
          <div className="absolute top-16 bg-white border border-gray right-4 py-2 shadow-lg rounded">
            <ul>
              <li className="px-6 py-4 text-center border-b border-gray flex items-center">
                <img
                  src={
                    userDetails?.user?.profilePhoto
                      ? userDetails?.user?.profilePhoto
                      : logo
                  }
                  alt="Profile Image"
                  className="h-[40px] w-[40px] mx-2 rounded-full object-cover"
                />
                <span className="font-medium text-sm">{user?.id}</span>
              </li>
              <li
                className="px-6 py-2 border-b border-gray hover:bg-sky transition"
                onClick={() => {
                  setProfile(false);
                }}
              >
                <Link to="/dashboard/settings/change-password">
                  <i className="px-2 fa-solid fa-user-pen"></i>{" "}
                  <span>Change Password</span>
                </Link>
              </li>
              <li
                className="px-6 py-2 cursor-pointer hover:bg-sky transition"
                onClick={() => {
                  logOut();
                  navigation("/login");
                }}
              >
                <p>
                  <i className="px-2 fa-solid fa-right-from-bracket text-main"></i>{" "}
                  <span>Sign Out</span>
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
