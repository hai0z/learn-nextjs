import React from "react";
import { FaFacebook, FaSearch, FaHome, FaFacebookMessenger } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function Navbar() {
    return (
        <div className="bg-gray-800 p-2 flex justify-between border-b-[1px] border-stone-500 fixed z-10 w-full">
            <div className="flex items-center w-3/12">
                <div className="bg-white rounded-full">
                    <FaFacebook className="text-4xl" color="#0570e6" />
                </div>
                <div className="relative ">
                    <input
                        type="text"
                        placeholder="Tìm kiếm trên Facebook"
                        className="ml-2 h-[40px] pl-8 rounded-3xl w-[40px] bg-gray-500 focus:outline-none
                           lg:w-[240px]"
                    />
                    <FaSearch className="absolute top-[13px] ml-5 hi" color="#cccccc" />
                </div>
                <div className=""></div>
            </div>
            <div className="flex items-center justify-between w-6/12">
                <FaHome className="text-2xl hover:bg-gray-500 block w-1/5" color="#0570e6" />
                <FaHome className="text-2xl hover:bg-gray-500 hover:block w-1/5" color="#0570e6" />
                <FaHome className="text-2xl hover:bg-gray-500 hover:block w-1/5" color="#0570e6" />
                <FaHome className="text-2xl hover:bg-gray-500 hover:block w-1/5" color="#0570e6" />
                <FaHome
                    className="text-2xl hover:bg-gray-500 hover:block w-1/5 hidden"
                    color="#0570e6"
                />
            </div>
            <div className="flex items-center justify-end space-x-2 w-3/12 ">
                <div className="hidden items-center hover:rounded-full hover:bg-gray-500 cursor-pointer w-17 p-0.5 mr-2 lg:flex ">
                    <img
                        src="https://picsum.photos/536/354"
                        alt=""
                        className="h-8 w-8 rounded-full"
                    />
                    <span className="text-medium font-bold text-white ml-1">Hải</span>
                </div>
                <div className="flex items-center space-x-2">
                    <CgMenuGridO
                        className="text-3xl block bg-gray-600 hover:bg-gray-500 cursor-pointer  rounded-full p-1 h-10 w-10"
                        color="#ffff"
                    />
                    <FaFacebookMessenger
                        className="text-xs block bg-gray-600 hover:bg-gray-500 cursor-pointer rounded-full p-2 h-10 w-10"
                        color="#fff "
                    />
                    <IoMdNotifications
                        className="text-xs block bg-gray-600 hover:bg-gray-500 cursor-pointer rounded-full p-2 h-10 w-10"
                        color="#fff"
                    />
                    <MdOutlineArrowDropDown
                        className="text-xs block bg-gray-600 hover:bg-gray-500 cursor-pointer rounded-full p-2 h-10 w-10"
                        color="#fff"
                    />
                </div>
            </div>
        </div>
    );
}
