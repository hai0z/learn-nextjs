import type {NextPage} from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React, {useState} from "react";
import {useRouter} from "next/router";

interface IAppProps {
    post: Post[];
}

type Post = {
    title: string;
    text: string;
    _id?: string | undefined | any;
};
const Home: NextPage<IAppProps> = ({post}) => {
    const router = useRouter();
    const [newPost, setNewPost] = useState<Post>({
        title: "",
        text: "",
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewPost({
            ...newPost,
            [name]: value,
        });
    };
    const deletePost = async (id: string) => {
        await axios.delete(`http://localhost:3000/api/post/${id}`);
        await router.push("/");
    };
    const addPost = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/post", newPost);
        setNewPost({
            title: "",
            text: "",
        });
        await router.push("/");
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Post next-js</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div
                className="h-screen bg-gradient-to-b from-indigo-600 to-indigo-400 flex ">
                <div className="w-6/12 p-4 h-screen border-r-2 border-cyan-300">
                    <div className="text-white font-normal text-2xl ">
                        Tạo bài viết mới
                    </div>
                    <div>
                        <form>
                            <div className="flex flex-col">
                                <div className="w-1/2 mt-6">
                                    <label className="text-white">
                                        Tiêu đề
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Tiêu đề"
                                        className="bg-gray-800  focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5 text-white"
                                        onChange={onChange}
                                        value={newPost.title}
                                        name="title"

                                    />
                                </div>
                                <div className="w-1/2 mt-6">
                                    <label className="text-white">
                                        Nội dung
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nội dung"
                                        className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5 text-white"
                                        onChange={onChange}
                                        value={newPost.text}
                                        name="text"
                                    />
                                </div>
                                <div className="w-1/2 mt-6">
                                    <button
                                        className="p-2  text-white font-medium bg-green-500 rounded-lg"
                                        onClick={addPost}
                                    >
                                        Thêm
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col w-6/12 p-4 ">
                    <div className="text-white font-normal text-2xl ">
                        Danh sách bài viết
                    </div>
                    <div
                        className="flex flex-wrap overflow-auto justify-center">
                        {post.map((item) => (
                            <div
                                className="p-4 w-full h-24 rounded-lg backdrop-blur-md bg-white/30 mx-2 my-1 flex justify-between">
                                <div>
                                    <h1 className="text-2xl font-bold text-white">
                                        {item.title}
                                    </h1>
                                    <p className="text-xl text-white">
                                        {item.text}
                                    </p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => deletePost(item._id)}
                                        className="p-2 bg-green-500 rounded-md text-white font-medium"
                                    >
                                        Xoá
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps() {
    const res = await axios.get("http://localhost:3000/api/post");
    const data = await res.data;
    return {
        props: {
            post: data,
        },
    };
}

export default Home;
