import mongoose from "mongoose";

export const Object = mongoose.model("DTO", { name: String });