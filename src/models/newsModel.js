const mongoose = require('mongoose');

const sourceSchema = mongoose.Schema({
  id: String,
  name: String,
});

const newsSchema = mongoose.Schema({
  country: {
    type: String,
    require: true,
    maxLength: 2,
  },
  category: {
    type: String,
    require: true,
  },
  source: {
    type: sourceSchema,
  },
  author: String,
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  urlToImage: String,
  publishedAt: {
    type: Date,
    require: true,
  },
  content: String,
});

newsSchema.index({ title: 1, category: -1 }, { unique: true });

const News = mongoose.model('News', newsSchema);
module.exports = News;
