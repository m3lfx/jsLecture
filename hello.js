// function add(a,b){
//     return a+b;
//    }
//    c = add(1,2);
//    console.log(c);

// var add = function (a, b) {
//   return a + b;
// };
// c = add(1, 2);
// console.log(c);

// function changeCase(val) {
//     return val.toUpperCase();
//    }
//    function demofunc(a, passfunction) {
//     console.log(passfunction(a));
//    }
//    demofunc("smallcase", changeCase);

var looper = function(x){
    if (x%5===0) {
    return;
    }
    console.log(x)
   }
   for(var i=1;i<10;i++){
    looper(i);
   }
