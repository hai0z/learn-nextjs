import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    text: String,
});
const PostModel = mongoose.model("post") || mongoose.model("post", PostSchema);
export default PostModel;
