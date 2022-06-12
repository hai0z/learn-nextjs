import React from "react";
import {
    BsCameraVideo,
    BsImages,
    BsFillEmojiLaughingFill,
} from "react-icons/bs";

export default function Status() {
    return (
        <div>
            <div className={"flex p-3  border-b-[1px] divide-stone-300  mx-1"}>
                <img
                    src="https://picsum.photos/536/354"
                    alt=""
                    className={"h-10 w-10 rounded-full"}
                />
                <input
                    type="text"
                    className={
                        "w-full bg-gray-500 rounded-3xl placeholder:text-stone-200 mx-2 pl-4 "
                    }
                    placeholder={"Hải ơi bạn đang nghĩ gì thế?"}
                />
            </div>
            <div className={"flex justify-between items-center mx-4 p-4"}>
                <div
                    className={
                        "flex items-center cursor-pointer hover:bg-gray-500 hover:rounded-md"
                    }
                >
                    <BsCameraVideo color={"crimson"} className={"text-2xl"} />
                    <span className={"font-bold text-stone-100 ml-2 "}>
                        Video trực tiếp
                    </span>
                </div>
                <div className={"flex items-center"}>
                    <BsImages color={"green"} className={"text-2xl"} />
                    <span className={"font-bold text-stone-100 ml-2"}>
                        Ảnh/video
                    </span>
                </div>
                <div className={"flex items-center"}>
                    <BsFillEmojiLaughingFill
                        color={"yellow"}
                        className={"text-2xl"}
                    />
                    <span className={"font-bold text-stone-100 ml-2"}>
                        Cảm xúc/hoạt động
                    </span>
                </div>
            </div>
        </div>
    );
}
