import mongoose from "mongoose";

const connect = async () => {
    await mongoose
        .connect("mongodb://localhost:27017/Nextjs", {})
        .then(() => console.log("connected to mongodb"))
        .catch((err: any) => console.log(err));
};
export default connect;
