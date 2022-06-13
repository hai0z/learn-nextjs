import React from "react";

type Props = {};

const Story = (props: Props) => {
    return (
        <div className="w-[160px] h-[215px] rounded-lg mx-1 relative group overflow-hidden">
            <img
                src={`https://picsum.photos/536/${Math.floor(Math.random() * 10 + 536)}`}
                alt=""
                className="object-center absolute group-hover:scale-[1.025] transition-all duration-200 h-full group-hover:overflow-hidden"
            />
            <div
                className={
                    "group-hover:backdrop-sepia-0 bg-black/10 z-10 group-hover:relative h-full w-full"
                }
            ></div>
            <span className={"absolute bottom-3 text-white text-xs text-center ml-1 font-bold"}>
                Nguyễn Ngọc Hải
            </span>
            <img
                src={`https://picsum.photos/536/${Math.floor(Math.random() * 10 + 536)}`}
                alt=""
                className={
                    "object-center h-10 w-10 rounded-full border-[4px] border-indigo-500 absolute top-2 left-3"
                }
            />
        </div>
    );
};

export default Story;
