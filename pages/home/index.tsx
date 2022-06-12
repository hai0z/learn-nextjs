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
        <div>
            <Navbar />
            <div className="min-h-screen flex pt-12">
                <div className="xl:w-3/12 bg-gray-800"></div>
                <div className="lg:w-8/12 bg-gray-800  w-full p-2 flex flex-col items-center ">
                    <div
                        className={
                            "flex items-center justify-between w-5/6 relative mt-6"
                        }
                    >
                        {Array.from({ length: 5 }).map(
                            () => (
                                <Story />
                            )
                        )}
                        <div
                            className={
                                "absolute bg-gray-700 rounded-full h-10 w-10 flex items-center justify-center right-[-20px] cursor-pointer hover:bg-gray-500"
                            }
                        >
                            <BsArrowRightShort
                                className={"text-3xl"}
                                color={"#ffffff"}
                            />
                        </div>
                    </div>
                    <div className={"w-5/6 mt-6"}>
                        <div
                            className={
                                "mx-1 bg-gray-600 rounded-md"
                            }
                        >
                            <Status />
                        </div>
                    </div>
                    <div className={"w-5/6 mt-6"}>
                        <div
                            className={
                                "mx-1 bg-gray-600 rounded-lg"
                            }
                        >
                            <Post />
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/12 bg-gray-800 md:w-4/12"></div>
                <div></div>
            </div>
        </div>
    );
};
export default HomePage;
