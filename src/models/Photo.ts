import { model, Schema } from "mongoose";

export const Photo = model(
  "Photo",
  new Schema({
    title: {
      type: String,
      required: true,
    },
    img: {
      data: Buffer,
      contentType: String,
    },
    fk_album: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Album",
    },
  })
);
