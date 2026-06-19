
const Post = require('../models/post');

exports.home = (req, res) => {
  res.render('home', { title: 'Home Page' });
};

exports.posts = (req, res) => {
  const posts = Post.getAll();
  let myData=[1,3,5];
  res.render('posts', { data:myData, title: 'Posts', posts });
};

exports.detail = (req, res) => {
  const post = Post.getById(req.params.id);
  res.render('detail', { title: "Detail", post });
};

exports.about = (req, res) => {
  res.render('about', { title: 'About' });
};
