import { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../services/connectMongo";
import PostModel from "../../../model/Post";
connect();
export default async function Post(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    const { id } = req.query;
    switch (method) {
        case "GET":
            const Post = await PostModel.findById(id);
            return res.json(Post);
        case "DELETE":
            try {
                await PostModel.findByIdAndDelete(id);
                return res.json("delete success");
            } catch (error) {
                return res.json(error);
            }
    }
}
