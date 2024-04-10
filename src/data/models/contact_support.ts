import mongoose from "mongoose";

const ContactSupportSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    message: "Full name is required",
  },
  companyName: {
    type: String,
    required: true,
    message: "Company name is required",
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
    message: "{VALUE} is not a valid email",
  },
  phone: {
    type: String,
    required: true,
    message: "Phone number is required",
  },
  category: {
    type: String,
    required: true,
    enum: ["billing", "technical", "sales", "general"],
    message: "{VALUE} is not supported",
  },
  message: {
    type: String,
    required: true,
    min: 12,
    max: 120,
    message: "Message must be between 12 and 120 characters",
  },
});

export const ContactSupportMongoModel = mongoose.model(
  "ContactSupport",
  ContactSupportSchema
);
