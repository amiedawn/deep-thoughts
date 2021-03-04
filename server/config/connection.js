const mongoose = require('mongoose');
console.log("mongodb", process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts' )
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
