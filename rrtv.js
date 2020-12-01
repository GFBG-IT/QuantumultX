/* 

我的app版本4.4.1

# QuanX
[rewrite_local]
# 人人视频 旧版本api限制解除
^https:\/\/api\.rr\.tv url script-request-header https://raw.githubusercontent.com/GFBG-IT/rules/main/rrtv.js

*/

const reg = /4\.\d+\.\d/g;
const headers = JSON.parse(
  JSON.stringify($request.headers).replace(reg, '4.16.5')
);

const data = { headers };

data.url = $request.url.replace(reg, '4.16.5');

$done(data);
