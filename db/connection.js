var mongoose = require("mongoose");

var RestaurantSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    link: String,
    reviewlink: String
  }
);

mongoose.model("Restaurant", RestaurantSchema);
mongoose.connect('mongodb://localhost/meanrestaurant', (err) => {
  if(err) {
  console.log(err)
}else {
  console.log(' MongoDB connected')
}
})


module.exports = mongoose;
