// /routing_third/index.js
// Для начала установим зависимости.
const url = require('url');
const fs = require('fs');

const define = function(req, res, postData) {
  // Теперь получаем наш адрес. Если мы переходим на localhost:3000/test, то path будет '/test'
  const urlParsed = url.parse(req.url, true);
    let path = urlParsed.pathname;

    // Теперь записываем полный путь к first.js. Мне это особенно нужно, так как сервер будет
    // висеть в systemd, и путь, о котором он будет думать, будет /etc/systemd/system/...
    prePath = __dirname;

    // До этого мы уже получили path и prePath. Теперь осталось понять, какие запросы
// мы получаем. Отсеиваем все запросы по точке, так чтобы туда попали только запросы к
// файлам, например: style.css, test.js, song.mp3
if(/\./.test(path)) {
   if(/\.mp3$/gi.test(path)) {
      res.writeHead(200, {
        'Content-Type': 'audio/mpeg'
      });
    }
    else if(/\.css$/gi.test(path)) {
      res.writeHead(200, {
        'Content-Type': 'text/css'
      });
    }
    else if(/\.js$/gi.test(path)) {
      res.writeHead(200, {
        'Content-Type': 'application/javascript'
      });
    }
    // Опять же-таки, отдаём потом серверу и пишем return, чтобы он не шёл дальше.
    let readStream = fs.createReadStream(prePath+path);
    readStream.pipe(res);
    return;
  }

    try {
      // Здесь мы пытаемся подключить модуль по ссылке. Если мы переходим на
      // localhost:8000/api, то скрипт идёт по пути /routing/dynamic/api, и, если находит там
      // index.js, берет его. Я знаю, что использовать тут try/catch не слишком правильно, и потом
      // переделаю через fs.readFile, но пока у вас не загруженный проект, разницу в скорости
      // вы не заметите.
      let dynPath = './dynamic/' + path;
      let routeDestination = require(dynPath);
      res.end('We have API!');
    }
    catch (err) {
       // Находим наш путь к статическому файлу и пытаемся его прочитать.
      // Если вы не знаете, что это за '=>', тогда прочитайте про стрелочные функции в es6,
      // очень крутая штука.
     let filePath = prePath+'/static'+path+'/index.html';
     fs.readFile(filePath, 'utf-8', (err, html) => {
       // Если не находим файл, пытаемся загрузить нашу страницу 404 и отдать её.
       // Если находим — отдаём, народ ликует и устраивает пир во имя царя-батюшки.
       if(err) {
         let nopath = 'routing_second/nopage/index.html';
         fs.readFile(nopath, (err , html) => {
           if(!err) {
             res.writeHead(404, {'Content-Type': 'text/html'});
             res.end(html);
           }
           // На всякий случай напишем что-то в этом духе, мало ли, иногда можно случайно
           // удалить что-нибудь и не заметить, но пользователи обязательно заметят.
           else{
             let text = "Something went wrong. Please contact webmaster@forgetable.ru";
             res.writeHead(404, {'Content-Type': 'text/plain'});
             res.end(text);
           }
         });
       }
       else{
         // Нашли файл, отдали, страница загружается.
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.end(html);
       }
     });
    }
};
exports.define = define;