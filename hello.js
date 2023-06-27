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

// var looper = function(x){
//     if (x%5===0) {
//     return;
//     }
//     console.log(x)
//    }
//    for(var i=1;i<10;i++){
//     looper(i);
//    }

   var validateDataForAge = function(data) {
    person = data();
    console.log(person);
    if (person.age <1 || person.age > 99){
    return true;
    }else{
    return false;
    }
   };
   var errorHandlerForAge = function(error) {
    console.log("Error while processing age");
   };
   function parseRequest(data,validateData,errorHandler) {
    var error = validateData(data);
    if (!error) {
    console.log("no errors");
    } else {
    errorHandler();
    }
   }
   var generateDataForScientist = function() {
    return {
    name: "Albert Einstein",
    age : Math.floor(Math.random() * (100 - 1)) + 1,
    };
   }

   var validateDataForAge = function(data) {
    person = data();
    console.log(person);
    if (person.age <1 || person.age > 99){
    return true;
    }else{
    return false;
    }
   };
   var errorHandlerForAge = function(error) {
    console.log("Error while processing age");
   };
   function parseRequest(data,validateData,errorHandler) {
    var error = validateData(data);
    if (!error) {
    console.log("no errors");
    } else {
    errorHandler();
    }
   }
   var generateDataForScientist = function() {
    return {
    name: "Albert Einstein",
    age : Math.floor(Math.random() * (100 - 1)) + 1,
    };
   }
