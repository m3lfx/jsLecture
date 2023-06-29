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


let items =  [
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
    

    const itemsPrice = items.map(function(item) {
        return [item.description,item.sell_price].join(" ");

    })

    const itemsFilter = items.filter(function(item) {
        return item.sell_price < 500;

    })
    console.log(itemsFilter)


    