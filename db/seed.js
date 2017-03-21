const mongoose  = require("./connection");
const seedData  = require("./seeds.json");

const Restaurant = mongoose.model("Restaurant");

Restaurant.remove({}).then(function() {
  Restaurant.collection.insert(seedData).then(function() {
    process.exit();
  })
})
