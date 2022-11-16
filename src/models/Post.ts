import { model, Schema } from "mongoose";

export const Post = model(
  "Post",
  new Schema({
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    fk_user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  })
);
