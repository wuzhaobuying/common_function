/**
 * 利用了 script 标签没有跨域限制这一“漏洞”来达到与第三方通讯的目的
 * 简单地说，该协议就是，允许用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名包裹json数据，
 * 这样客户端就可以随意定制自己的函数自动处理返回的数据了
 */

let handler = (data) => console.log(data);

let script = document.createElement("script");
script.src = "github.com/?callback=handler";
document.body.appendChild(script);
