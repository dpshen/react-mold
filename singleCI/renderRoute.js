var fs = require('fs');
var path = require('path');

import {pathList, appName} from "../src/route";
//  项目名称
const reg = new RegExp(`^\/${appName}`);
const indexSrc = path.join("build", "index.html");

var mkdirsSync = function (dirpath, mode) {
    if (!fs.existsSync(dirpath)) {
        var pathtmp;
        dirpath.split(path.sep).forEach(function (dirname) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            } else {
                pathtmp = dirname;
            }
            if (!fs.existsSync(pathtmp)) {
                fs.mkdirSync(pathtmp, mode);
                var destSrc = path.join(pathtmp, "index.html");
                copyIndex(destSrc)
            }
        });
    }
    return true;
}

var copyIndex = function (dest) {
    if (dest == indexSrc){
        return false;
    }
    fs.writeFileSync(dest, fs.readFileSync(indexSrc))
}

pathList.map(dir=> {
    var dir = path.join("build", dir.replace(reg,""))
    mkdirsSync(dir, null)
})

