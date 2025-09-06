require("dotenv").config();
const connectDB = require("../db/connect");
const Resource = require("../models/Resource");
const resources = [ /* paste 30 employees here */ ];

const seedResources = async () => {
  try {
    await connectDB();
    await Resource.deleteMany(); // clear old data
    await Resource.insertMany(resources);
    console.log("✅ Seeded 30 resources successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding resources", err);
    process.exit(1);
  }
};

seedResources();
