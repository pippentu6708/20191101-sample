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
class Animal {
    name: string;
    height: number;
    weight: number;
    constructor(n: string, h: number, w: number) {
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    eat() {
        console.log(this.name, 'I can eat');
    }
}
let Animal01 = new Animal('大象',180,80);
Animal01.eat();
console.log(Animal01);
//單純繼承
class brid extends Animal{ //extends 繼承
     constructor( name:string,height:number,weight:number){
         super(name,height,weight) //super複寫
     }
}
let brid01 = new brid('九官鳥',15,2);
brid01.eat();
console.log(brid01);

//有條件繼承與新增條件
class Animalxy {
    constructor(public name: string) {
    }
    eat() {
        console.log(this.name, 'I can eat');
    }
}
class bridxy extends Animalxy{ //extends 繼承
    constructor( name:string, public color:string){
        super(name) //super複寫
    }
    fly(){
        console.log('I\'m', this.name,'I can fly !')
    }
    eat(){
        super.eat(); //super複寫
        console.log('I\'m', this.name,'and i drink water');
    }
}
let bridxy01 = new bridxy('鳳凰','Yellow');
bridxy01.eat();
bridxy01.fly();
console.log(bridxy01);
