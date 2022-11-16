import { model, Schema, ObjectId } from "mongoose";

export const User = model(
  "User",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  })
);
