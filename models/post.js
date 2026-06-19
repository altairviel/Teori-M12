
class Post {
  static getAll() {
    return [
      { id: 1, title: 'Post 1', content: 'Ini konten post pertama' },
      { id: 2, title: 'Post 2', content: 'Ini konten post kedua' }
    ];
  }

  static getById(id) {
    return this.getAll().find(p => p.id == id);
  }
}
module.exports = Post;
