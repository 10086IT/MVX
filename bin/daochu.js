let fs = require('fs');
let path = require ('path');

// 检查app目录下的文件
let fileObj = {};

function checkFirstUp(str) {
  let firstStr = str.substr(0, 1);
  return firstStr.toLocaleLowerCase() === firstStr;
}

function isDir (dir, file) {
  let pathname = path.join(dir, file);
  if (fs.lstatSync(pathname).isDirectory()) {
    return true;
  }
  return false;
}

function checkIsCom(dir, ignore) {
  let files = fs.readdirSync(dir).filter(f => !f.startsWith('.') || f.startsWith('fileExport.jsx'));
  let filterFiles = files
    .filter(file => !ignore.includes(file) && checkFirstUp(file) && isDir(dir, file));
  if (filterFiles.length === 0) {
    return false
  }
  if (files.some((file) => !checkFirstUp(file) && file !== 'index.jsx' && file !== 'fileExport.jsx')
    || (files.length === 1 && files[0] === 'index.jsx' && files[0] !== 'fileExport.jsx')) {
    return false;
  }
  return true;
}

function checkDir(dir, ignore) {
  // 刪除autoIndex文件
  if (fs.existsSync(dir + '/autoIndex.jsx')) {
    fs.unlinkSync(dir + '/autoIndex.jsx');
  }
  let files = fs.readdirSync(dir);
  if (!files.some((file) => !checkFirstUp(file) && file !== 'index.jsx' && file !== 'fileExport.jsx')) {
    files.forEach(function (file) {
      let pathname = path.join(dir, file);
      if (fs.lstatSync(pathname).isDirectory()) {
        if(!pathname.includes('.') && !ignore.includes(file) && checkFirstUp(file)){
          let tempFiles = fs.readdirSync(pathname);
          // 过滤掉空目录或者含有特殊文件的目录
          if (tempFiles.filter(file => !file.startsWith('.')).length !== 0) {
            if (!fileObj[dir]) {
              fileObj[dir] = [];
            }
            fileObj[dir].push({
              name: file,
              isDir: checkIsCom(dir + '/' + file, ignore)
            });
            checkDir(pathname, ignore);
          }
        }
      }
    });
  }
}

function autoJs(fileObj) {
  Object.keys(fileObj).forEach((field) => {
    let im = '// 该文件为自动生成，手动修改无效\n';
    let ex = ''
    im = im + fileObj[field].map(function (file) {
      const fileName = file.name[0].toLocaleUpperCase() + file.name.substr(1, file.name.length - 1);
      if (file.isDir) {
        return 'import * as ' + fileName + ' from \'./' + file.name + '/fileExport\';\n';
      } else {
        return 'import ' + fileName + ' from \'./' + file.name + '\';\n';
      }
    }).join('');
    ex = fileObj[field].map(function (file) {
      const fileName = file.name[0].toLocaleUpperCase() + file.name.substr(1, file.name.length - 1);
        return '  '+ fileName + ',';
    }).join('\n');
    ex = 'export {\n' + ex + '\n};'
    fs.writeFileSync(field + '/fileExport.jsx', im +'\n'+ ex);
  });
}

checkDir(path.resolve(__dirname, '../src/pages'), []);
autoJs(fileObj);
