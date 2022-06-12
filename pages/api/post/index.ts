import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../services/connectMongo";
import PostModel from "../../../model/Post";

connect();

export default async function Post(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case "GET":
            try {
                const allPost = await PostModel.find();
                return res.json(allPost);
            } catch (error) {
                return res.json(error);
            }
        case "POST":
            try {
                const data = req.body;
                const newPost = new PostModel(data);
                await newPost.save();
                return res.json(newPost);
            } catch (error) {
                return res.json(error);
            }
        case "DELETE":
    }
}
