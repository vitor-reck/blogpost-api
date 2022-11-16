import { model, Schema } from "mongoose";
import { Photo } from "./Photo";

export const Album = model(
  "Album",
  new Schema({
    title: {
      type: String,
      required: true,
    },
    photos: [{}],
    fk_user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  })
);
