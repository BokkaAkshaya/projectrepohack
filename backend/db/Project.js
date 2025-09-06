const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    client: {
      type: String, // e.g., "Internal", "ClientX"
      default: "Internal",
    },
    description: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    milestones: {
      type: [String], // e.g., ["Prototype", "MVP Release", "Final Delivery"]
      default: [],
    },
    required_skills: {
      type: [String], // e.g., ["AI", "Computer Vision", "Full-Stack"]
      required: true,
    },
    staffing_mix: {
      // how many interns, mid, senior engineers needed
      interns: { type: Number, default: 0 },
      full_time: { type: Number, default: 0 },
      mid: { type: Number, default: 0 },
      senior: { type: Number, default: 0 },
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "medium",
    },
    budget_cap: {
      type: Number, // optional cost limit
      default: null,
    },
    compliance: {
      nda_required: { type: Boolean, default: false },
      geo_restriction: { type: String, default: null }, // e.g., "India only"
    },
    allocated_resources: {
      type: [mongoose.Schema.Types.ObjectId], // references to Resource IDs
      ref: "Resource",
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
