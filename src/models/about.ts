// Packages
import { Schema, model } from "mongoose";
import * as paginate from "mongoose-paginate";
import * as timestamp from "mongoose-timestamp";

const aboutSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    status: { type: String, required: true, default: 1 },
    name: { type: String, required: false },
    family: { type: String, required: false },
    mobile: { type: String, required: false },
    avatar: { type: String, required: false },
    isUser: { type: Boolean, required: true, default: true },
  },
  { versionKey: false }
);

aboutSchema.plugin(paginate);
aboutSchema.plugin(timestamp);

const UserModel = model("about", aboutSchema);
UserModel.createIndexes();

export default UserModel;
