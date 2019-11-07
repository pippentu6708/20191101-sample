// function 題目一
let question = function (q1: string, q2: string): string {
    let ans: number = 0;
    for (let i = 0; i <= q1.length; i = i + 1) {
        // console.log(q1.charAt(i));
        if (q1.charAt(i) === q2) {
            ans = ans + 1;
        }
    }
    return ans;
}
console.log(question("abcdefgabcdabv", "a"));
//function 題目一 或是 以下做法也可以
let a = function (x: string, y: string) {
    let ans: number = 0;
    for (let i = 0; i <= x.length; i = i + 1) {
        if (x.charAt(i) === y) {
        ans = ans + 1 ;
        }
    }
    console.log(ans);
    return "ok";
}
let z = a( 'adfadfadfadfads' , 'a');
console.log(z)

// Qrcode題目二
// npm i readline-sync
// npm i @types/readline-sync
// npm i qrcode
// npm i @types/qrcode

import * as readlineSync from 'readline-sync';
import * as QRCode from 'qrcode';
let userName = readlineSync.question('May I have your name? ');
let userMail = readlineSync.questionEMail('Please enter your e-mail address?  ');
QRCode.toFile('./QR.png', 'Hi ' + userName + ' !' + 'Your password is ' + userMail);

// class 題目三

class animal {  //先定義類別
    constructor(
        public name: string,
        public weight: number,
        public hight: number) {
    }
    eat() {
        console.log('I\'m' , this.name, 'I can eat')
    }
}
let animal01 = new animal('hello', 180, 20);
animal01.eat();   //這部分類似Like的模式
console.log(animal01);

class bird extends animal {  //定義新類別 使用extends
    constructor(name: string, weight: number, hight: number, public color: string) { //有新增的欄位定義，要用public
        super(name, weight, hight) //super繼承父系，constructor有的，這邊就要有，除了public新增的例外
    }
    fly() {
        console.log('I\'m' , this.name, ' I can Fly!')
    }
    eat() {
        super.eat()
        console.log('I Drank Water')
    }
}

let bird01 = new bird('hi', 52, 10, 'yellow');
console.log(bird01);
bird01.eat();
bird01.fly();
