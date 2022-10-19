import {sum} from "./math"
// import {count} from "./count"

console.log("hello main");
console.log(sum(1,2,3,4));

document.getElementById('btn').onclick = function(){
    import("./count")
    .then(res => {
        console.log("模块加载成功了", res.count(10,5));
    })
    .catch(err => {
        console.log("模块加载失败了", err);
    })
}