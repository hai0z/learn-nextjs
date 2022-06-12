import { Model, model, Schema } from "mongoose";

const PostSchema = new Schema({
    title: String,
    text: String,
});
let PostModel: typeof Model;
try {
    PostModel = model("post");
} catch (err) {
    PostModel = model("post", PostSchema);
}
export default PostModel;
