 var url = require('url');
 
// parse
 var urlObj=url.parse('http://www.imooc.com/video/6710')
 var urlObj2=url.parse('http://www.imooc.com/video/6710',true)
 
 console.log(url);
 console.log(urlObj)
 console.log(urlObj2)


// format
 var objUrl = url.format({
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.imooc.com',
  port: null,
  hostname: 'www.imooc.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/video/6710',
  path: '/video/6710',
  href: 'http://www.imooc.com/video/6710' })

 console.log(objUrl)

// resolve
 var urlResolve = url.resolve('https://www.baidu.com/s','?ie=UTF-8&wd=node');
 console.log(urlResolve);