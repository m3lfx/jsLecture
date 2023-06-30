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

var validateDataForAge = function (data) {
    person = data();
    console.log(person);
    if (person.age < 1 || person.age > 99) {
        return true;
    } else {
        return false;
    }
};
var errorHandlerForAge = function (error) {
    console.log("Error while processing age");
};
function parseRequest(data, validateData, errorHandler) {
    var error = validateData(data);
    if (!error) {
        console.log("no errors");
    } else {
        errorHandler();
    }
}
// const person = {
//     name: 'test',
//     age: 14,
//     occupation: function(){
//         return 'worker'
//     }, 
//     skills: ['programming', 'eating'],
//     parents: {
//         father: 'x',
//         mother: 'y',
//     }
// }

// var generateDataForScientist = function () {
//     return {
//         name: "Albert Einstein",
//         age: Math.floor(Math.random() * (100 - 1)) + 1,
//     };
// }

// var generateDataForComposer = function() {
//     return {
//     name: "J S Bach",
//     age : -90,
//     };
//    };
//    parseRequest(generateDataForScientist, validateDataForAge, 
//     errorHandlerForAge);
//     parseRequest(generateDataForComposer, validateDataForAge, 
//     errorHandlerForAge);


let items = [
    {
        "item_id": 1,
        "title": null,
        "description": "vans",
        "cost_price": "200.00",
        "sell_price": "300.00",
        "image_path": "default.jpg",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    },
    {
        "item_id": 3,
        "title": null,
        "description": "chuck taylot",
        "cost_price": "100.00",
        "sell_price": "900.00",
        "image_path": "default.jpg",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    },
    {
        "item_id": 4,
        "title": null,
        "description": "adidas",
        "cost_price": "900.00",
        "sell_price": "1000.00",
        "image_path": "default.jpg",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    },
    {
        "item_id": 6,
        "title": "nike",
        "description": "nike air 1 black",
        "cost_price": "100.00",
        "sell_price": "200.00",
        "image_path": "",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    },
    {
        "item_id": 7,
        "title": "nike",
        "description": "nike air jordan",
        "cost_price": "150.00",
        "sell_price": "200.00",
        "image_path": "",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    },
    {
        "item_id": 8,
        "title": "bread",
        "description": "cheese bread",
        "cost_price": "10.00",
        "sell_price": "20.00",
        "image_path": "default.jpg",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    },
    {
        "item_id": 9,
        "title": "nike air jordan 1",
        "description": "red black colorway",
        "cost_price": "100.50",
        "sell_price": "1200.00",
        "image_path": "",
        "created_at": "2023-06-12T07:43:08.000000Z",
        "updated_at": "2023-06-12T07:43:08.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 10,
        "title": "nike air jordan 1",
        "description": "red black colorway",
        "cost_price": "100.50",
        "sell_price": "1200.00",
        "image_path": "",
        "created_at": "2023-06-12T07:43:22.000000Z",
        "updated_at": "2023-06-12T07:43:22.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 11,
        "title": "nike air jordan 1",
        "description": "red black colorway",
        "cost_price": "100.50",
        "sell_price": "1200.00",
        "image_path": "",
        "created_at": "2023-06-12T07:44:16.000000Z",
        "updated_at": "2023-06-12T07:44:16.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 12,
        "title": "nike air jordan 1",
        "description": "red black colorway",
        "cost_price": "100.50",
        "sell_price": "1200.00",
        "image_path": "",
        "created_at": "2023-06-12T07:45:26.000000Z",
        "updated_at": "2023-06-12T07:45:26.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 13,
        "title": "converse chuck taylor",
        "description": "low cut white color",
        "cost_price": "1000.00",
        "sell_price": "2000.00",
        "image_path": "",
        "created_at": "2023-06-12T07:46:56.000000Z",
        "updated_at": "2023-06-12T07:46:56.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 14,
        "title": "converse chuck taylor",
        "description": "low cut white color",
        "cost_price": "1000.00",
        "sell_price": "2000.00",
        "image_path": "",
        "created_at": "2023-06-12T07:47:17.000000Z",
        "updated_at": "2023-06-12T07:47:17.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 15,
        "title": "adidas stans smith",
        "description": "tennis shoes white",
        "cost_price": "5000.00",
        "sell_price": "6000.00",
        "image_path": "",
        "created_at": "2023-06-12T07:48:09.000000Z",
        "updated_at": "2023-06-12T07:48:09.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 16,
        "title": "doc martens",
        "description": "dms black hi cut",
        "cost_price": "100.50",
        "sell_price": "22000.00",
        "image_path": "",
        "created_at": "2023-06-12T10:35:42.000000Z",
        "updated_at": "2023-06-12T10:35:42.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 17,
        "title": "adidas running shoes",
        "description": "shoes white running jogging",
        "cost_price": "1000.00",
        "sell_price": "2000.00",
        "image_path": "",
        "created_at": "2023-06-12T10:39:46.000000Z",
        "updated_at": "2023-06-12T10:39:46.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 18,
        "title": "secret lab",
        "description": "gaming chair black",
        "cost_price": "1111.00",
        "sell_price": "1111.00",
        "image_path": "",
        "created_at": "2023-06-12T10:56:08.000000Z",
        "updated_at": "2023-06-12T10:56:08.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 19,
        "title": "cellphone",
        "description": "vivo y29",
        "cost_price": "111.00",
        "sell_price": "222.00",
        "image_path": "",
        "created_at": "2023-06-12T11:43:02.000000Z",
        "updated_at": "2023-06-12T11:43:02.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 20,
        "title": "keyboard",
        "description": "mechanical keyboard",
        "cost_price": "1234.00",
        "sell_price": "1111.00",
        "image_path": "",
        "created_at": "2023-06-12T12:03:38.000000Z",
        "updated_at": "2023-06-12T12:03:38.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 21,
        "title": "power bank",
        "description": "romoss 10000mah",
        "cost_price": "500.00",
        "sell_price": "1000.00",
        "image_path": "",
        "created_at": "2023-06-12T12:14:02.000000Z",
        "updated_at": "2023-06-12T12:14:02.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 22,
        "title": "laptop",
        "description": "acer laptop",
        "cost_price": "1234.00",
        "sell_price": "11112.50",
        "image_path": "",
        "created_at": "2023-06-13T02:41:04.000000Z",
        "updated_at": "2023-06-13T02:41:04.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 23,
        "title": "laptop",
        "description": "acer laptop",
        "cost_price": "1234.00",
        "sell_price": "11112.50",
        "image_path": "",
        "created_at": "2023-06-13T02:41:21.000000Z",
        "updated_at": "2023-06-13T02:41:21.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 24,
        "title": "laptop rog",
        "description": "gaming laptop",
        "cost_price": "1500.00",
        "sell_price": "13456.00",
        "image_path": "",
        "created_at": "2023-06-13T02:43:13.000000Z",
        "updated_at": "2023-06-13T02:43:13.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 25,
        "title": "chair",
        "description": "secret lab",
        "cost_price": "10000.00",
        "sell_price": "9000.00",
        "image_path": "",
        "created_at": "2023-06-13T02:45:48.000000Z",
        "updated_at": "2023-06-13T02:45:48.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 26,
        "title": "mouse",
        "description": "wireless",
        "cost_price": "123.00",
        "sell_price": "456.00",
        "image_path": "",
        "created_at": "2023-06-13T03:20:01.000000Z",
        "updated_at": "2023-06-13T03:20:01.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 27,
        "title": "shoes",
        "description": "white shoes",
        "cost_price": "900.00",
        "sell_price": "999.00",
        "image_path": "",
        "created_at": "2023-06-13T03:25:15.000000Z",
        "updated_at": "2023-06-13T03:25:15.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 28,
        "title": "lto",
        "description": "lto exam",
        "cost_price": "900.00",
        "sell_price": "1000.00",
        "image_path": "default.jpg",
        "created_at": "2023-06-16T06:18:18.000000Z",
        "updated_at": "2023-06-16T06:18:18.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 29,
        "title": "lto",
        "description": "lto exam",
        "cost_price": "900.00",
        "sell_price": "1000.00",
        "image_path": "default.jpg",
        "created_at": "2023-06-16T06:19:09.000000Z",
        "updated_at": "2023-06-16T06:19:09.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 30,
        "title": "lto2",
        "description": "lto exam",
        "cost_price": "900.00",
        "sell_price": "1000.00",
        "image_path": "default.jpg",
        "created_at": "2023-06-16T06:35:39.000000Z",
        "updated_at": "2023-06-16T06:35:39.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 31,
        "title": "pic2",
        "description": "pic2",
        "cost_price": "5000.00",
        "sell_price": "1000.00",
        "image_path": "default.jpg",
        "created_at": "2023-06-16T06:36:24.000000Z",
        "updated_at": "2023-06-16T06:36:24.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 32,
        "title": "pic3",
        "description": "[ic4",
        "cost_price": "100.50",
        "sell_price": "900.00",
        "image_path": "default.jpg",
        "created_at": "2023-06-16T06:38:35.000000Z",
        "updated_at": "2023-06-16T06:38:35.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 36,
        "title": null,
        "description": "shoes20230626",
        "cost_price": "100.00",
        "sell_price": "200.00",
        "image_path": "default.jpg",
        "created_at": "2023-06-26T06:22:11.000000Z",
        "updated_at": "2023-06-26T06:22:11.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 37,
        "title": null,
        "description": "ltos20230626",
        "cost_price": "100.00",
        "sell_price": "200.00",
        "image_path": "storage\/images\/lto4.PNG",
        "created_at": "2023-06-26T06:23:46.000000Z",
        "updated_at": "2023-06-26T06:23:46.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 39,
        "title": null,
        "description": "ltos20230626",
        "cost_price": "100.00",
        "sell_price": "200.00",
        "image_path": "storage\/images\/lto4.PNG",
        "created_at": "2023-06-26T06:40:11.000000Z",
        "updated_at": "2023-06-26T06:40:11.000000Z",
        "deleted_at": null
    },
    {
        "item_id": 40,
        "title": null,
        "description": "update item 40",
        "cost_price": "100.00",
        "sell_price": "2000.00",
        "image_path": "storage\/images\/lto1.PNG",
        "created_at": "2023-06-26T06:46:44.000000Z",
        "updated_at": "2023-06-26T06:47:24.000000Z",
        "deleted_at": null
    }
]
var sum = 0
items.forEach(function (item) {
    sum += Number(item.cost_price)

});
console.log(sum)


const itemsPrice = items.map(function (item, index) {
    return [item.description, item.sell_price].join(" ");

})


const itemsFilter = items.filter(function (item) {
    return item.sell_price < 50;

})

console.log(itemsFilter)

   
    var founders = new Map();
    founders.set("facebook", "mark");
    founders.set("google", "larry");
    console.log(founders.size); // 2
    console.log(founders.get("twitter")); // undefined
    console.log(founders.has("google")); // false
    for (var [key, value] of founders) {
        console.log(key + " founded by " + value);
    }

    var mySet = new Set();
    mySet.add(1);
    mySet.add("Howdy");
    mySet.add("foo");
    console.log(mySet.has(1)); // true
    console.log(mySet)
    mySet.delete("foo");
    console.log(mySet)
    console.log(mySet.size); // 2
    for (let item of mySet) console.log(item);
    var author = {
        firstname: "Douglas",
        lastname: "Crockford",
        book: {
            title: "JavaScript- The Good Parts",
            pages: "172",
        },
        publisher: ['pub1', 'pub2', ],

    }
    author.book.pages = 190;
   
    console.log(author.book.pages)

    var meetingRoom = {};
    meetingRoom.book = function(roomId){
    console.log("booked meeting room -"+roomId);
    }
    meetingRoom.book("VL")

    <!DOCTYPE html>
    <html lang="en">

    < !DOCTYPE html>
        <html>
            <head>
                <title>DOM Changes</title>
                <meta charset='utf-8' />
                <script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
                <script>
                    function writeIt(){
                        $('#heading').css('font-weight', 'bold').html('jQuery');
                    var q = document.getElementById('question');
                    q.innerHTML = 'I Prefer jQuery!';
}
                </script>
            </head>
            <body onload='writeIt()'>
                <p id='heading'>jQuery or JavaScript</p>
                <p id='question'>Which method do you prefer?</p>
            </body>
        </html>



// <!DOCTYPE html>
// <html>
// <head>
// <title>DOM Objects</title>
// <meta charset='utf-8' />
// <script type='text/javascript' src='js/dom_objects.js'></script>
// <link rel='stylesheet' type='text/css' href='css/dom_objects.css'>
// </head>
// <body>
// <input id='textIn' type='text'/>
// <input type='button' onclick='textChange()' value='Update' /><br>
// <span class='heading'></span>
// <p id='p1'></p>
// <span class='heading'></span>
// <p id='p2'></p>
// </body>
// </html>

// function textChange(){
// var inElement = document.getElementById('textIn');
// var outElements = document.getElementsByTagName('p');
// var headingElements = document.getElementsByClassName('heading');
// for(var i=0; i<outElements.length; i++){
// var outItem = outElements[i];
// headingElements[i].innerHTML = 'Updating ' + (i+1) +
// ' to ' + inElement.value;
// outItem.innerHTML = inElement.value;
// }
// }
// dom_objects.css CSS That Styles <p> Elements
// p{
// font-weight:bold;
// font-size:50px;
// margin:5px;
// color:blue;
// }


// <!DOCTYPE html>
// <html>
// <head>
// <title>jQuery Selectors</title>
// <meta charset='utf-8' />
// <script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
// <script type='text/javascript' src='js/jquery_selectors.js'></script>
// <link rel='stylesheet' type='text/css' href='css/jquery_selectors.css'>
// </head>
// <body>
// <span onclick='setEven()'>Even</span>
// <span onclick='setOdd()'>Odd</span>
// <span onclick='setFirst4()'>First 4</span>
// <p class='label'>Planets</p>
// <ul>
// <li>Poseidon</li>
// <li>Ares</li>
// <li>Apollo</li>
// <li>Hermes</li>
// <li>Nike</li>
// <li>Nemesis</li>
// <li>Zeus</li>
// <li>Hades</li>
// </ul>
// </body>
// </html>
// function setEven(){
// $('li, span').css('font-weight','');
// var $evenItems = $('li:even');
// $evenItems.css('font-weight','bold');
// $('span:contains(Even)').css('font-weight','bold');
// $('.label').html('Even');
// }
// function setOdd(){
// $('li, span').css('font-weight','');
// var $oddItems = $('li:odd');
// $oddItems.css('font-weight','bold');
// $('span:contains(Odd)').css('font-weight','bold');
// $('.label').html('Odd');
// }
// function setFirst4(){
// $('li, span').css('font-weight','');
// var $first4 = $('li:lt(4)');
// $first4.css('font-weight','bold');
// $('span:contains(\'First 4\')').css('font-weight','bold');
// $('.label').html('First 4');
// }
// span{
// padding:2px;
// border:3px ridge blue;
// color:white;
// background:blue;
// cursor:pointer;
// }
// .label{
// font-size:25px;
// margin:10px;
// }

<!DOCTYPE html>
<html>
<head>
<title>DOM Manipulation</title>
<meta charset='utf-8' />
<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/dom_manipulation.js'></script>
<link rel='stylesheet' type='text/css' href='css/dom_manipulation.css'>
</head>
<body>
<input type='button' value='.each()'>
<input type='button' value='.map()'>
<p>red 10</p>
<p>orange 15</p>
<p>yellow 20</p>
<p>green 25</p>
<p>blue 30</p>
<p>indigo 35</p>
<p>violet 40</p>
<div></div>
</body>
</html>
//dom_manipulation.js
$(document).ready(function (){
$('input:eq(0)').click(function (){
$('p').each(function(){
var parts = $(this).html().split(' ');
$(this).css({'font-size':parts[1]+'px', color:parts[0]});
});
});
$('input:eq(1)').click(function (){
var items = $('p').map(function(){
var parts = $(this).html().split(' ');
return {color:parts[0], size:parts[1]};
}).get();
for (var idx in items){
var item = items[idx];
var span = $('<span>' + item.color + '</span>');
var size = item.size*5;
span.css({'background-color':item.color, 'font-size': item.size+'px',
width:size, height:size});
$('div').append(span);
}
});
});
//dom_manipulation.css
p{margin:0px; padding:0px;}
span{
display:inline-block;
color: white;
text-align:center;
}