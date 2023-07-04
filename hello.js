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

<!DOCTYPE html>
<html>
<head>
<title>Traversing the DOM</title>
<meta charset='utf-8' />
<script type='text/javascript' src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type='text/javascript' src='js/traverse_dom.js'></script>
<link rel='stylesheet' type='text/css' href='css/traverse_dom.css'>
</head>
<body>
<p>How satisfied are you 1-5</p>
<div>
<label>Quality</label>
<input type='text' onkeyup='update()'></input>
<span></span><span></span><span></span><span></span><span></span>
</div>
<div><label>Taste</label>
<input type='text' onkeyup='update()'></input>
<span></span><span></span><span></span><span></span><span></span>
</div>
<div>
<label>Server</label>
<input type='text' onkeyup='update()'></input>
<span></span><span></span><span></span><span></span><span></span>
</div>
</body>
</html>
JavaScript Code That Handles the Key Up Event and Uses jQuery to Manipulate the Color of the <span> Elements Based on the Input Value
function update(){
$('span').css('background-color','lightgrey');
$('div').each(function(i){
var $input = $(this).children('input:first');
var $value = $input.val();
var filter = 'span:lt(' + $value + ')';
$input.siblings(filter).css('background-color','blue');
})
}
//traverse_dom.css
span{
display:inline-block;
height:15px;
width:10px;
background-color:lightgrey;
margin:1px;
border-radius:50%;
}
input {
width:20px;
}
label {
display:inline-block;
width:60px;
}

function clickHandler(e) {
    console.log(e)
    $('#' + e.data.objId).html(e.target.id + ' says ' + e.data.answer + ' at X postion: ' + e.screenX);
}

$(document).ready(function () {
    $('#div1').on({ 'click': clickHandler },
        { 'objId': 'heading', 'answer': 'yes' });
    $(document).on('click', '#div2', { 'objId': 'heading', 'answer': 'no' }, clickHandler);
});

<!DOCTYPE html>
<html>

<head>
  <title>DOM Changes</title>
  <meta charset='utf-8' />
  <script src="https://code.jquery.com/jquery-3.7.0.min.js"
    integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
  <script type='text/javascript' src='js/dom_objects.js'></script>
  <link rel='stylesheet' type='text/css' href='css/dom_css.css'>
  
</head>

<body >
  <div id='div1'>Say Yes</div>
  <div id='div2'>Say No</div>
  <h1 id='heading'></h1>
  </body>
</html>

div{
    border-radius:5px;
    margin:3px;
    padding:5px;
    background-color:lightgrey;
    font-weight:bold;
    display:inline-block;
    cursor:pointer;
    }

#banner {
    height: 100px;
    color: white;
    background-color: blue;
    font-size: 40px;
    text-align: center;
}

#menu,
#docMenu {
    background-color: black;
    padding: 6px 4px 9px 4px;
}

.menuItem,
#docMenu span {
    padding: 2px;
    background-image: -moz-linear-gradient(top, #2244ff 0%, #AACCFF 85%, #0022ff 100%);
    background-image: -webkit-linear-gradient(top, #2244ff 0%, #AACCFF 85%, #0022ff 100%);
    background-image: -ms-linear-gradient(top, #2244ff 0%, #AACCFF 85%, #0022ff 100%);
    font: 20px bold;
    cursor: pointer;
}

.active {
    border: 5px groove;
}

#docMenu span {
    display: block;
    margin-top: 1px;
}

#content,
iframe {
    display: inline-block;
    width: 700px;
    height: 500px;
}

#container {
    width: 800px;
    background-color: #C0C0C0
}

#docMenu {
    position: fixed;
    right: 60px;
    top: 60px;
}

#content {
    padding: 2px;
    color: blue;
    font-size: 20px;
}

<!DOCTYPE html>
<html>

<head>
  <title>DOM Changes</title>
  <meta charset='utf-8' />
  <script src="https://code.jquery.com/jquery-3.7.0.min.js"
    integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
  <script type='text/javascript' src='js/dom_objects.js'></script>
  <link rel='stylesheet' type='text/css' href='css/dom_css.css'>
  
</head>

<body >
  <div id='container'>
    <div id='menu' class='menu'>
    <span id='lessons' class='menuItem'>lessons</span>
    <span id='docs' class='menuItem'>Docs</span>
    <span id='fade' class='menuItem'>Fade</span>
    </div>
    <div id='content'></div>
    </div>
    <div id='docMenu'>
    <span onclick = 'setDoc("http://api.jquery.com/")'>jQuery</span>
    <span onclick = 'setDoc("http://api.jqueryui.com/")'>jQueryUI</span>
    <span onclick = 'setDoc("http://jquerymobile.com/demos/1.4.0/")'>jQueryMobile</span>
    </div>
  </body>
</html>

function setHour(e) {
    var hour = $('#lessonSelect').val();
    $('#content p').html('Lesson ' + hour);
}
function setHourNav() {
    $('#docMenu').hide();
    $('span').removeClass('active');
    $('#lessons').addClass('active');
    var select = $('<select id=\"lessonSelect\"></select>');
    select.change(setHour);
    for (var x = 1; x < 41; x++) {
        var option = $('<option></option');
        option.val(x);
        option.html('Lesson ' + x);
        select.append(option);
    }
    $('#content').html('');
    $('#content').append(select).append('<br><p></p>');
}
function setDocNav() {
    $('#docMenu').show();
    $('span').removeClass('active');
    $('#docs').addClass('active');
}
function setDoc(doc) {
    var frame = $('<iframe></iframe>');
    frame.attr('src', doc);
    $('#content').html(frame);
}
function fade() {
    var opacity = $('#content').css('opacity');
    if (opacity < 1) {
        $('#content').css('opacity', 1);
    }
    else {
        $('#content').css('opacity', .5);
    }
}

$(document).ready(function () {
    $('#docMenu').hide();
    $('#lessons').click(setHourNav);
    $('#docs').click(setDocNav);
    $('#fade').click(fade);
});

<!DOCTYPE html>
<html>

<head>
  <title>DOM Changes</title>
  <meta charset='utf-8' />
  <script src="https://code.jquery.com/jquery-3.7.0.min.js"
    integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
  <script type='text/javascript' src='js/dom_objects.js'></script>
  <link rel='stylesheet' type='text/css' href='css/dom_css.css'>
  
</head>

<body >
  <div><form id='formA'>
    <label>Time</label><br>
    <input type='image' src='./images/sun.png' />
    <input type='image' src='./images/moon.jpg' /><br>
    <input name='title' type='text' /><br>
    <textarea name='comments'></textarea><br>
    <input type='radio' name='gender' value='male'>Male
    <input type='radio' name='gender' value='female'>Female<br>
    <input type='checkbox' name='Registered'>Registered<br>
    <select size=3 multiple name='count'>
    <option>One</option><option>Two</option><option>Three</option>
    </select><br>
    <input id='resetB' type='button' value='Reset'></input>
    <input id='serializeB' type='button' value='Serialize'></input>
    </form></div>
    <div><form id='formB'>
    <label>Destination</label><br>
    <input type='image' alt='No Image'></input><br>
    <input type='text' /><br>
    <textarea></textarea><br>
    <input type='radio' name='gender' value='male'>Male</input>
    <input type='radio' name='gender' value='female'>Female</input><br>
    <input type='checkbox'>Checked</input><br>
    <select size=3 multiple>
    <option>One</option><option>Two</option><option>Three</option>
    </select>
    </form></div><br>
    <div><label>Serialized</label><p id='serialized'></p></div>
    <div><label>Serialized Array</label><span id='serializedA'></span></div>
</html>

$(document).ready(function () {
    $('#formA input:text').keyup(function () {
        $('#formB input:text').val($(this).val());
    });
    $('#formA textarea').keyup(function () {
        $('#formB textarea').val($(this).val());
    });
    $('#formA input:radio').change(function () {
        var radioB = $('#formB input[value=' +
            $(this).val() + ']');
        radioB.prop('checked', $(this).is(':checked'));
    });
    $('#formA input:checkbox').click(function () {
        $('#formB input:checkbox').prop('checked',
            $(this).prop('checked'));
    });
    $('#formA select').change(function () {
        $('#formB select').val($(this).val());
    });
    $('#formA label').click(function () {
        $('#formB label').html(new Date().toUTCString());
    });
    $('#formA input:image').click(function (e) {
        $('#formB input:image').attr('src', $(this).attr('src'));
        e.preventDefault();
    });
    $('#resetB').click(function () {
        $('#formB').get(0).reset();
        $('#formB input:checked').prop('checked', false);
        $('#formB input:image').attr('src', '');
    });
    $('#serializeB').click(function (e) {
        $('#serialized').html($('#formA').serialize());
        $('#serializedA').empty();
        var arr = $('#formA').serializeArray();
        jQuery.each(arr, function (i, prop) {
            $('#serializedA').append($('<p>' + prop.name + ' = ' +
                prop.value + '</p>'));
        });
    });
});

input[type=image] {height:40px; margin-top:15px;}
div{
vertical-align:top; width:300px; height:auto;
display:inline-block; padding:20px; margin:5px;
border-radius:10px; border:1px solid;
}
label{ background-color:blue; color:white;
border-radius:8px; padding:5px; }
p { margin:1px; padding:2px; width: 100%;
border-radius:8px; display:inline-block;
word-wrap: break-word; }
span {width:300px;}


function clickHandler(e, objId, num, msg) {
    var obj = document.getElementById(objId);
    obj.innerHTML = 'DIV ' + num + ' says ' + msg + ' at X postion: ' + e.screenX;
}
function yesWrapper(e) {
    clickHandler(e, 'heading', 1, 'yes');
    e.target.removeEventListener('click', yesWrapper);
}
function noWrapper(e) {
    clickHandler(e, 'heading', 2, 'no');
    e.target.removeEventListener('click', noWrapper);
}
function onloadHandler() {
    document.getElementById('div1').addEventListener('click', yesWrapper, false);
    document.getElementById('div2').addEventListener('click', noWrapper, false);
}

<!DOCTYPE html>
<html>

<head>
  <title>DOM Changes</title>
  <meta charset='utf-8' />
  <script src="https://code.jquery.com/jquery-3.7.0.min.js"
    integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
  <script type='text/javascript' src='js/dom_objects.js'></script>
  <link rel='stylesheet' type='text/css' href='css/dom_css.css'>

</head>

<body>
 
  <body onload='onloadHandler()'>
    <div id='div1'>Say Yes</div>
    <div id='div2'>Say No</div>
    <h1 id='heading'></h1>
    </body>
</html>

div{
    border-radius:5px;
    margin:3px;
    padding:5px;
    background-color:lightgrey;
    font-weight:bold;
    display:inline-block;
    cursor:pointer;
    }


item.index{{-- item.index --}}
<div id="items" class="container">
     <button type="button" class="btn btn-info btn-lg" data-bs-toggle="modal" data-bs-target="#itemModal"  >add<span  class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
 <div class="card-body" style="height: 210px;">
      <input type="text" id='itemSearch' placeholder="--search--">
            </div> 
  <div  class="table-responsive">
    <table id="itable" class="table table-striped table-hover">
      <thead>
        <tr>
          <th>item ID</th>
          <th>Image</th>
          <th>description</th>
          <th>sell price</th>
          <th>cost price</th>
          <th>Edit</th>
          <th>Delete</th>
          </tr>
      </thead>
      <tbody id="ibody">

      </tbody>
    </table>
  </div>
</div>
<div class="modal fade" id="itemModal" role="dialog" style="display:none">
  <div class="modal-dialog modal-lg" >
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Create new item</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          <div class="modal-body">
            <form id="iform" method="#" action="#" enctype="multipart/form-data">
             <div class="form-group">
                  <label for="desc" class="control-label">Description</label>
                  <input type="text" class="form-control" id="desc" name="description"  >
             </div>
             <div class="form-group"> 
                <label for="sell" class="control-label">sell price</label>
                <input type="text" class="form-control " id="sell" name="sell_price">
              </div>
              <div class="form-group"> 
                <label for="cost" class="control-label">Cost Price</label>
                <input type="text" class="form-control " id="cost" name="cost_price" >
              </div>
              <div class="form-group"> 
                <label for="image" class="control-label">Image</label>
                <input type="file" class="form-control" id="image" name="uploads" />
               </div>
            </form>
          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button id="itemSubmit" type="submit" class="btn btn-primary">Save</button>
        </div>

      </div>
  </div>
</div>

$(document).ready(function() { 
    $.ajax({
        type: "GET",
        url: "/api/item",
        dataType: 'json',
        success: function (data) {
            // console.log(data);
        $.each(data, function(key, value) {
          // console.log(value);
          id = value.item_id;
          var img = "<img src="+value.img_path +" width='200px', height='200px'/>";
          var tr = $("<tr>");
          tr.append($("<td>").html(value.item_id));
          tr.append($("<td>").html(img));
          tr.append($("<td>").html(value.description));
          tr.append($("<td>").html(value.cost_price));
          tr.append($("<td>").html(value.sell_price));
          tr.append("<td align='center'><a href='#' data-bs-toggle='modal' data-bs-target='#itemModal' id='editbtn' data-id="+ id + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></a></i></td>");
          tr.append("<td><a href='#'  class='deletebtn' data-id="+ id + "><i  class='fa fa-trash-o' style='font-size:24px; color:red' ></a></i></td>");
          $("#ibody").append(tr);
       });
      },
        error: function(){
          console.log('AJAX load did not work');
          alert("error");
      }
        });
})

public function allItems(){
        $items = Item::all();
        return response()->json($items);
    }