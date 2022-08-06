import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    cat_name: { type: String, required: true },
    cat_image: { type: String, required: true },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
export default Category;
