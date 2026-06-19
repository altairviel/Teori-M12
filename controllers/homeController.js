
const Post = require('../models/Post.js');
const DataSiswa = require('../models/DataSiswa.js');

exports.home = (req, res) => {
  res.render('home', { title: 'Home Page' });
};

exports.posts = (req, res) => {
  const posts = Post.getAll();
  res.render('posts', { title: 'Posts', posts });
};

exports.detail = (req, res) => {
  const post = Post.getById(req.params.id);
  res.render('detail', { title: post.title, post });
};

exports.about = (req, res) => {
  res.render('about', { title: 'About' });
};

exports.terserah= (req, res)=>{
  res.render('profile', {judul: "Judul Profile", nim: "2411112149"});
}

exports.data = async (req, res) => {
    const data = await DataSiswa.getAll();
    res.render('contact', { title: 'Ini tugas tantangan praktikum M11', data })
  };