'use strict';

// 歌曲信息数据，因为还没有学习数据库，暂时使用内存中的一个数组来代替
const musicList = [{
  id: 1,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}, {
  id: 2,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}, {
  id: 3,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}, {
  id: 4,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}, {
  id: 5,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}];

exports.sendMusicList = (req, res) => {
  console.log('收到请求了');
  res.json({
    code: '1',
    musicList: musicList
  });
};

exports.showIndex = (req, res) => {
  // 渲染首页：读取首页，注入数据
  // 渲染添加歌曲页面：读取页面，注入数据
  // 渲染编辑歌曲页面：读取页面：注入数据
  res.render('index', {
    title: '首页',
    musicList: musicList
  });
};

exports.showAdd = (req, res) => {
  res.render('add', {
    title: '添加歌曲'
  });
};

exports.doAdd = (req, res) => {
  // 接收用户提交的数据
  // 获取表单提交的post数据，通过监听 req 对象的  data 事件，和end  事件，拿到post提交的数据



  // post提交的参数实际上也是类似于查询字符串的格式，没有?

  let body = req.body;

  // 根据id把该歌曲信息查询出来，如果有，表示该歌曲信息已存在，否则没有，再添加
  let music = musicList.find(m => m.id == body.id);

  if (music) {
    return res.end('music exists');
  }


  // 直接将body 放到数组中
  musicList.push(body);

  // 歌曲信息添加完毕之后要跳转到首页
  res.writeHead(302, {
    'Location': 'http://127.0.0.1:3000/'
  });
  res.end();
};

exports.doRemove = (req, res) => {
  let id = req.query.id;

  // 根据 id  查找到数组中该项的索引
  let index = musicList.findIndex(m => m.id == id);

  // 根据索引删除该项
  musicList.splice(index, 1);

  // 删除完毕之后，刷新当前页面
  // res.writeHead(302)
  res.writeHead(302, {
    'Location': 'http://127.0.0.1:3000/'
  });
  res.end();
};

exports.showAbout = (req, res) => {
  res.render('about', {
    title: '关于我'
  });
};

exports.showEdit = (req, res) => {
  // 获取要编辑的歌曲信息的id
  let id = req.query.id;

  // 根据id查询出该数组中的该项
  let music = musicList.find(m => m.id == id);

  // 如果该歌曲不存在，直接结束响应
  if (!music) {
    return res.end('music not exists');
  }

  res.render('edit', {
    title: '编辑歌曲',
    music: music
  });
};

exports.doEdit = (req, res) => {

  let body = req.body;

  // 通过id找到数组中的索引下标
  let index = musicList.findIndex(m => m.id == body.id);

  // 根据索引更新数组中的该项,直接重新覆盖即可
  musicList[index] = body;

  res.writeHead(302, {
    'Location': 'http://127.0.0.1:3000/'
  });
  res.end();
}
