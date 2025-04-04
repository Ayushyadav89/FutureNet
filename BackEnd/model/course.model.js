import mongoose, { mongo } from "mongoose";

const courseSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
});

const Course = mongoose.model("Course", courseSchema);

export default Course