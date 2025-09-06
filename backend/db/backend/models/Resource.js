const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["intern", "full-time", "mid", "senior"],
      required: true,
    },
    skills: {
      type: [String], // e.g., ["AI", "Computer Vision", "React"]
      required: true,
    },
    proficiency: {
      type: Number,
      min: 1,
      max: 5, // 1 = beginner, 5 = expert
      required: true,
    },
    capacity_hrs_week: {
      type: Number,
      required: true,
      min: 1,
    },
    availability_start: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    timezone: {
      type: String,
      required: true,
    },
    rate: {
      type: Number, // hourly or per week rate depending on use-case
      default: 0,
    },
    current_commitments: {
      type: [String], // e.g., project IDs or names
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", ResourceSchema);
