import React from "react";
import { IoEarth } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { BiLike, BiShare } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";

export default function Post() {
    return (
        <div className={"bg-gray-700 rounded-md mb-6"}>
            <div className={"flex p-4"}>
                <img
                    src="https://picsum.photos/536/354"
                    alt={"Post-img"}
                    className={"h-12 w-12 rounded-full"}
                />
                <div className={"flex flex-col pl-2"}>
                    <span className={"font-bold text-white"}>Nguyễn Ngọc Hải</span>
                    <span className={"text-stone-300 text-sm flex items-center"}>
                        <span className={"pr-1"}>24 phút</span> <IoEarth />
                    </span>
                </div>
            </div>
            <div className={"pl-4 mb-2 post-content"}>
                <span className={"text-white"}>ĐỘI HÌNH XUẤT PHÁT CHÍNH THỨC CỦA U23 VIỆT NAM</span>{" "}
                <br />
                <span className={"text-white"}> Ảnh : Vietnam football 2012</span>
            </div>
            <div>
                <img
                    alt=""
                    src={`https://picsum.photos/536/${Math.floor(Math.random() * 100 + 536)}`}
                    className={"h5/6 w-full object-cover"}
                />
            </div>
            <div
                className={
                    "flex justify-between  mx-4 h-12 items-center divide-stone-300 border-b-[1px]" +
                    " border-stone-300"
                }
            >
                <div className={"flex items-center"}>
                    <AiFillLike color={"#0098db"} className={"text-2xl"} />
                    <span className={"text-white ml-1"}> Nguyễn Ngọc Hải và 455 người khác</span>
                </div>
                <div>
                    <span className={"text-white"}>12 bình luận</span>
                    <span className={"text-white ml-2"}>50 lượt chia sẻ</span>
                </div>
            </div>
            <div className={"flex justify-between items-center px-16 py-4"}>
                <div className={"flex items-center justify-center"}>
                    <BiLike className={"text-2xl"} color={"#eeeeee"} />
                    <span className={"text-white font-medium ml-2"}>Thích</span>
                </div>
                <div className={"flex items-center justify-center"}>
                    <FaRegCommentAlt className={"text-xl"} color={"#eeeeee"} />
                    <span className={"text-white font-medium ml-2"}>Bình luận</span>
                </div>
                <div className={"flex items-center"}>
                    <BiShare className={"text-2xl"} color={"#eeeeee"} />
                    <span className={"text-white font-medium ml-2"}>Chia sẻ</span>
                </div>
            </div>
        </div>
    );
}
