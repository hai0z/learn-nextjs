import { NextPage } from "next";
import React from "react";
import Navbar from "../../components/Navbar";
import Story from "../../components/Story";
import { BsArrowRightShort } from "react-icons/bs";
import Status from "../../components/Stauts";
import Post from "../../components/Post";

type Props = {};

const HomePage: NextPage<Props> = () => {
    return (
        <div className={"bg-gray-800"}>
            <Navbar />
            <div className="min-h-screen flex pt-12">
                <div className="bg-gray-800 panel-left pt-8 h-screen fixed xl:lg:md:w-3/12 w-0">
                    <div className={"flex items-center"}>
                        <img
                            src="https://picsum.photos/536/354"
                            alt={"Post-img"}
                            className={"h-10 w-10 rounded-full"}
                        />
                        <span className={"font-bold text-md text-white ml-2"}>Nguyễn Ngọc Hải</span>
                    </div>
                </div>
                <div className="bg-gray-800 w-full xl:lg:w-6/12 p-2 flex flex-col items-center ml-[25%]">
                    <div className={"flex items-center justify-between w-5/6 relative mt-6"}>
                        {Array.from({ length: 5 }).map(() => (
                            <Story />
                        ))}
                        <div
                            className={
                                "absolute bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center right-[-20px] cursor-pointer hover:bg-gray-500"
                            }
                        >
                            <BsArrowRightShort className={"text-3xl"} color={"#ffffff"} />
                        </div>
                    </div>
                    <div className={"w-5/6 mt-6"}>
                        <div className={"mx-1 bg-gray-700 rounded-md"}>
                            <Status />
                        </div>
                    </div>
                    <div className={"w-5/6 mt-6"}>
                        <div className={"mx-1 bg-gray-800 rounded-lg"}>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <Post key={index} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-3/12 h-screen pt-8 flex flex-col fixed right-0 flex items-end">
                    <div className={"flex flex-col px-2 w-11/12"}>
                        <div className={"flex justify-between"}>
                            <span className={"text-stone-300 font-bold"}>Lời mời kết bạn</span>
                            <span className={"text-blue-500"}>Xem tất cả</span>
                        </div>
                        <div className={"flex mt-1 items-center"}>
                            <div>
                                <img
                                    src="https://picsum.photos/536/354"
                                    alt={"Post-img"}
                                    className={"h-14 w-14 rounded-full"}
                                />
                            </div>
                            <div className={"flex-col flex fr-request flex-1"}>
                                <div className={"flex justify-between"}>
                                    <span className={"font-bold text-md text-white ml-2"}>
                                        Nguyễn Ngọc Hải
                                    </span>
                                    <span className={"text-stone-300 text-sm"}>2 tuần</span>
                                </div>
                                <div className={"mt-1 flex justify-between"}>
                                    <button
                                        className={
                                            "w-[50%] h-10 bg-blue-500 rounded-md text-white mx-2"
                                        }
                                    >
                                        Xác nhận
                                    </button>
                                    <button className={"w-[50%] bg-gray-600 rounded-md text-white"}>
                                        Xoá
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;
