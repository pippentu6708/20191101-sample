import { Interface } from "readline";


// import * as readlineSync from 'readline-sync';
// import * as QRCode from 'qrcode';
// let userName = readlineSync.question('May I have your name? ');
// let userMail = readlineSync.questionEMail('Please enter your e-mail address?  ');
// QRCode.toFile('./QR.png','Hi ' + userName+' !' + 'Your password is '+ userMail );

// let a: string = 'Welcome to my home';
// let b: string[] = a.split(' ');
// console.log(a);                 // Welcome to my home
// console.log(b);                 // [ 'Welcome', 'to', 'my', 'home' ]
// console.log(b[0]);                 // Welcome
// console.log(b[1]);                 // to
// console.log(b[2]);                 // my
// console.log(b[3]);                 // home
// console.log (b.length);            // 4
// console.log(a.charAt(3));          // c， 第一碼從0開始算(非陣列)
// console.log(a.split(' '));         // [ 'Welcome', 'to', 'my', 'home' ] 轉換成陣列傳出
// console.log(a.indexOf('l'));       // 2 小寫L，第一碼從0開始算
// console.log(a.substring(3,7))      // come 第一碼從0開始算，第三碼到第七碼的前一碼(目的地的前一碼)

// let sex = "boy";
// let money = 20000;
// if (sex === "girl") {
//     if (money >= 15000) {
//         console.log("Welcome")
//     } else {
//         console.log("next come here")
//     }
// } else {
//     console.log("女性勿購")
// }


// let sex: string = 'boy';
// let money: number = 18000;
// if (sex === 'giri') {
//     if (money >= 19000) {
//         console.log('歡迎購買')
//     } else {
//         console.log('回家多存點錢再來')
//     }
// } else {
//     console.log('boy 限定')
// }

// let j: number = 0;
// for (let i = 1; i <= 10; i = i + 1) {
//     j = j + i;
//     console.log(i + '+' + j +  '='  +  j)
// }
// console.log(j)


// let x : string = '';
// for (let i = 1; i <= 5; i = i + 1) {
//     x = '';
//     for (let j = 1 ; j <= i ; j = j + 1 ){
//         x = x + '*';
//        }
//     console.log(x);
// }


// let x : string = ' ';
// for (let i = 5; i >= 0 ; i = i - 1) {
//     x = ' ';
//     for (let j = 1; j <= i ; j = j + 1 ){
//         x = x + '*';
//        }
//     console.log(x);
// }

// for (let i = 1; i <= 9; i = i + 1) {
//     for (let j = 1; j <= 9; j = j + 1) {

//         console.log( i + 'x' + j + '=' +  i * j)
//     }

// }

// let day: string = "星期4";
// switch (day) {
//     case "星期一":
//         console.log("今天星期一");
//         break;
//     case "星期二":
//         console.log("今天星期二");
//         break;
//     case "星期三":
//         console.log("今天星期三");
//         break;
//     default:
//         console.log("today my birthday")
//     }
// console.log("*".repeat(100));
// console.log("*".repeat(1));
// console.log("*".repeat(1));
// console.log("*".repeat(1));
// console.log("*".repeat(100));

// let a : number[] = [1, 33, 44, 56, 77, 88];
// for(let i=0 ; i < a.length ; i=i+1){
//     console.log(a[1])
// }

// let work = ['珍珠奶茶', '泡沫紅茶', '百香綠茶', '巧克力奶茶'];
// for(let i = 0 ; i < work.length ; i = i +1){
//     console.log('目前製作的第'+ (i + 1) + '杯是' +work[i])
// }

// import * as readlineSync from 'readline-sync';
// import * as QRCode from 'qrcode';
// let userAge = readlineSync.questionInt('how old are you? ');
// let userMail = readlineSync.questionEMail('Please Enter Your E-mail address? ')
// QRCode.toFile('./QR.png', 'Thank you' + userAge + 'and you' + userMail);
// let userName = readlineSync.question('May I have your name? ');
// let userMail = readlineSync.questionEMail('Please enter your e-mail address?  ');
// QRCode.toFile('./QR.png','Hi ' + userName+' !' + 'Your password is '+ userMail );

// interface person {
//     name: string,
//     sex: string,
//     coco: number,
// }
// let person1 : person= {
//     name: "chao",
//     sex:"girl",
//     coco: 20000,
// }
// let person2 : person= {
//     name: "tu",
//     sex:"boy",
//     coco: 30000,
// }
// if (person2.sex ="boy") {
//     if (person2.coco >= 30000) {
//         console.log("非常歡迎您")
//     } else {
//         console.log("下次吧")
//     }
// } else {
//     console.log("只歡迎男性")
// }

// if (100 % 3 ===0){
//     console.log('ok')
// }

// let words : string = 'adf=dafasdllmldsm,lfaslldss';
// let key :string = 's';
// let ans :number = 0 ;
// // console.log(words.length)
// // console.log(words.charAt(25))
// for(let i = 0 ; i<= words.length ; i= i + 1){
//     console.log(words.charAt(i))
//     if( words.charAt(i) === key)
//     ans = ans + 1;
// }
// console.log(ans)


// let a = function() {
//     for (let i = 1 ; i<= 9 ;i = i+ 1){
//         for( let j= 1 ; j<=9 ; j= j+1)
//         console.log( i + '*' + j +'=' + i*j )
//     }
// }
// a()

// let a = function (a: number, b: number) {
//     for (let i = 1; i <= a; i = i + 1) {
//         for (let j = 1; j <= b; j = j + 1) {
//             console.log(i + '*' + j + '=' + i * j)
//         }
//     }
// }
// a(3 , 6)