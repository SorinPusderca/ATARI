



// function factory(theCars){
//     theCars.make= 'Toyota';
//   };

//   function factory1(theCars1){
//     theCars1.make= 'Trabant';
//   };

//   let myCar={ make: 'Honda', model:'Civic', year: 2020 };
//   let x='Honda';

//   let myCar1={ make: 'Seat', model:'Cordoba', year: 2020 };
//   let y1='Seat';

//   factory(myCar);
//   x=myCar.make;

//   factory1(myCar1);
//   y1=myCar1.make;

//   console.log(myCar);
//   console.log(myCar1);



// function dog(theArr){}
// const puppy='nero';

// let arr1=[100,200,300];
// let sum=0;
// for(
//     let i =0; i<arr1.length ; i++
// )  {sum+=arr1[i]}  //suma din array

// console.log(sum);

// arr1.push('nero');

// dog(puppy);
// console.log(puppy[0]); 
// console.log(puppy[1]); 
// console.log(puppy[2]); 
// console.log(puppy[3]); 
// console.log(arr1);


// const square = function(number){
//      return number * number 
//     }
// let xv = square(4);
// console.log(xv);


// ///////////////////////??????????????????
// // const factorial0 = function fac(n) 
// // { return n < 2 ? 1 : n * fac(n - 1) }




// ////////////////  ?????????????????????
// function map(f, a) {
//     let result = []; // Create a new Array
//     let i; // Declare variable
//     for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;
//   }
//   const f = function(x) {
//      return x * x * x;
//   }
//   let numbers = [0, 1, 2, 3, 4];
//   let cube = map(f,numbers);
//   console.log(cube);
  
// //////////////////////////////????????????

// //??????????????????????????????????????????????????
// function boat(){
//   let atros='atros';
//   let num='null';
//     if(num === 0){
//        toy=function cc(){
//        cc.make=atros;
//     }
//   }
// }
// console.log(boat())

// function roll(n) { return n * n }
// console.log(roll(5));


// function factorial(n){
//   if((n===0) || (n===1))
//   return 1;
//   else  return(n*factorial(n-1));
// }

// // a=factorial(1)
// // b=factorial(2)
// // c=factorial(3)
// // d=factorial(4)
// // e=factorial(5)
// // console.log(factorial(5))


// function getScore(){
//   let a = 1;
//   let b = 2;
//   let name='XYZ '
//     function add(){
//       return name + '' + (a + b);
//     }
//     return add();
// }
// console.log(getScore())

// let num1 = 2;
// let num2 = 3;
// let name =" DAS"

// function multiply(){
//   return num1 * num2 + name + "";
// }

// console.log(multiply())


// // var x2 = 0;
// // while (x2 < 10) { 
// //    x2++;
// // }
// // console.log(x2);



// // function loop(u){
 
// //   if( u !=(x < 10));
// //   return loop(u + 1);
// // }
// // console.log(loop(u))


// // function calc(){
// //   let a1= parseInt(document.querySelector("#val1").value);
// //   let a2= parseInt(document.querySelector("#val2").value);
// //   let a3= document.querySelector("#opr").value;
// //   let calculator;

// //   if( a3==="Adunare"){
// //     calculator= a1+a2;
// //   }else if( a3==="Scadere"){
// //     calculator= a1-a2;
// //   }else if( a3==="Impartire"){
// //     calculator= a1/a2;
// //   }else if( a3==="Inmultire"){
// //     calculator= a1*a2;
// //   } 
  
// //     document.querySelector("#span").innerText=calculator;
// // }


// var myName ="taz"

// myName =8

// let doog ="tuki"

// const pi = 3.14


//   /////// VARIABILA ASIGNATA

//   let a;

//   /////// VARIABILA DECLARATA + ASIGNATA

//   let b = 2; ///2 este asignat lui b
//   a = 7;
//   b = a;


//   ///////// PRINTEAZA IN CONSOLA
//   console.log(a);


// /////////////////
// a = 5;
// b = 10
// c = "I am a";

// a = a+1;
// b = b+1
// c = c+ " string"
// console.log(a);
// console.log(b);
// console.log(c);
// ////////// INCREMENTARE

// let myVar=10;
// myVar++;

// console.log(myVar);

// ///////// DECREMENTARE
// let myVaR=10;
// myVaR--;

// console.log(myVaR)


// ///////// FLOTS

// let decimal= 5.7;
// let decimaL= 0.009;

// let v= 2.5 * 2 ;
// let d= 4.4 / 2.2;
// console.log(v);
// console.log(d);

// ///////////// MODULO-- se foloseste pt a determina daca restul este PAR sau IMPAR si pt a returan o diferenta

// let t= 11 % 3;
// let tt= 11 % 2;
// console.log(t);
// console.log(tt);

// ////////////////

// let w= 4;
// let r= 7;
// let e= 3;

// w= w + 14; 
// r= 55 + r;
// e= e + 66;
// ff= e * w;

// console.log(e);////69
// console.log(e+w);
// console.log(ff);

// ////// ===>>> varianta scurta, face acelasi lucru

// w =+ 12; 
// r =+ 2;
// e = 66;
// m = 5.5;
// console.log(e); //////apare 66 deoarece este ultima valoare declarata pentru e => variabila declarata


// ////// DIFERIT!!!!
// w /= 12; 
// r -= "";
// e += 66;
// m += 70;

// console.log(r);
// console.log(m+9); ////84.5 => 5.5+70+9
// console.log(e); /////132 => 66+66
// console.log(e*r); ////////264 => 132*2
// console.log(e+w);//////133 => 12/12+66+66= 1+132= 133



// /////////////////STRING

// let y= "i am a string";
// let q= " i am also a string";
// let s= " i am a \"pit lord string\" and i \'rule the underWorld\' of \`JavaScript\`";
// let u= 4;
// let i= 4;

// let ww= y + q;
// let rr= y + " SO WHAT?" + ` bring on the thunder nr`+ " " + u + i;

// console.log(s);
// console.log(ww);
// console.log(rr);

// let link = '<a href="https://www.google.com/?hl=ro" target="_blank">LINK</a>';
// console.log(link);

// let line= "FirstLine\n\SecondLIne\nThirdLine\n\ForthLine\n\t\FifthLine\nSixthLine";
// console.log(line);

// ///////////// CONCATENARE STRING

// let wer= "Taz";
// let ewe= wer  + " este un american bully";
// console.log(ewe + " si roade tot ce-i sta in cale");

// ///////////////////////////////////
// let tta= " \nDoomSlayer";
// let uui= "The";
// let uio= " and boom stick is a fancy word for gun"
// let opp= " Troy"
// uui += tta += uio += opp += opp.length;
// console.log(uui);

// let lastName="loveLace";

// //////////////////////////////

// lastName=lastName[lastName.length-4];//////// returneaza L
// console.log(lastName);




// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
//   let result="";
//   result += " The " + myAdjective +" " + myNoun + " " + myVerb + " " +myAdverb;
//   return result;
// }
// console.log(wordBlanks("dog", "fat", "eat", "quickly"));

// // function theATeam (trigger, gun){
// //       let rest= "";
// //       rest += "The gun went" + trigger + "" + gun;
// //           return rest;
// // }
// // console.log(theATeam(click-click, boom));



// ////////// ARRAY

// let srd= [50,60,70];
// let huy= srd;

// console.log(srd[2]);


// let mjh=[18,90,493,5867];
// mjh[2]= 666;
// mjh[981]= 111;
// console.log(mjh);



// let array=[[0,1,2], [3,4,5], [[6,7,8,], 9, 10], ["mama"]];

// console.log(array [3][0]);
// data=array[1][1];
// console.log(data);
// console.table(array);


// let activities = [
//   ['Work', 9],
//   ['Eat', 1],
//   ['Commute', 2],
//   ['Play Game', 1],
//   ['Sleep', 7],
//   ['West',1,2,3]  ////////// elimina ultimul array => west
// ];

// activities.push (['Study', 2]);//////adaunda in arr in arr
// activities.shift();////// Indeparteaza primul arr
// activities.unshift(['bath', 0.5]);/////adauga la inceput de arr
// activities.pop();//////indeparteaza ultimul arr
// activities.slice( ['programming',2])/////// 
// console.table(activities);


// ///////////FUNCTIONS////scop global

// let global= 10;/////global

// function fun1(){
//   oopsGlobal=5;////////global
// }


// function fun2(){
//   let output="";
//     if(typeof global != "undefined"){
//           output +="global "+ global; };
//           if( typeof oopsGlobal != "undefined"){
//             output +="oopsGlobal" != oopsGlobal;}
//               console.log(output);

// }
// fun1();
// fun2();


// let oiu= "T-shirt";/////global

// function rmrm(){
//   let oiu= "sweater";//////local
// return oiu;
// }
// console.log(rmrm());
// console.log(oiu)


// function sum1(num){
//   return num -7
// }
// console.log(sum1(10));

// function fvg(tyu){
// return tyu*5
// }
// console.log(fvg(5))


// let ghy=0;

// function change(nnum){
//   return nnum + 10 /2
// }
// ghy = change(10);

// console.log(change(10));


// function nextInLine(arr,item){
//      arr.push(item);
//      return arr.shift(item);
// }
// let testArr=[1,2,3,4,5];

// console.log("Before: " +JSON.stringify(testArr));
// console.log(nextInLine(testArr,6));
// console.log("After: " +JSON.stringify(testArr));


// function secondInline(android, ios){
//     android.unshift(ios);
//       return android.pop(ios);

// }
// let android=[1,2,3,4,5];

// console.log("before:", JSON.stringify(android));
// console.log("remove:", secondInline(android));
// console.log("add:", secondInline(android, 8));///////// null????
// console.log("after:", JSON.stringify(android));


// ///////////// IF
// function trueOrFalse(isItTrue){
//   if(isItTrue){
//     return "It's true";
//   } console.log(isItTrue);
//   return "it's false";
 
// }
// console.log(trueOrFalse(true));
// trueOrFalse(false);


// function mate(uzf){
  
//   if( uzf == 12){
//     return "equal";
//   };
//   return "not equal";
// }
// console.log(mate(10));

// function mate1(){
//   let mpo = "12"
//   if( mpo == 12){
//     return "equal";
//   };
//   return "not equal";
// }
// console.log(mate1());/////// == modifica in stringul in numar


// function mate2(mri){
//   if( mri===10){
//     return "it works"
//   }
//   return "not today"
// }
// console.log(mate2("10"));////// === compara motamo


// function mate3(av, bv){
//     if(av==bv){
//       return "ok";
//     } if(av===bv);
//     return "not ok";
// }
// console.log(mate3(10, "10"));///// este egal


// function mate4(av, bv){
//   if(av===bv){
//     return "ok";
//   } if(av==bv);
//   return "not ok";
// }
// console.log(mate4(10, "10"));/////nu este egal



// function mate5(av, bv){
//   if(av!=bv){
//     return "ok";
//   } if(av==bv);
//   return "not ok";
// }
// console.log(mate5(10, "10"));/////nu este egal


// function caseSwitch(val){
//   let answer="";
//   switch(val){

//     case 1: 
//     answer="alpha";
//     break;
//     case b: 
//     answer="beta";
//     break;
//     case 3: 
//     answer="gamma";
//     break;
//     case d: 
//     answer="delta";
//     break;
//     default:
//     answer="stuff";
//     break;

// }
// return answer;
// }

// console.log(caseSwitch(1));
// console.log(caseSwitch(b));
// console.log(caseSwitch(3));
// console.log(caseSwitch(d));
// console.log(caseSwitch("wde3r322qr"));


// function multipleCase(timmy){
//   let tim= "";
//     switch(timmy){

//           case 1:
//           case 2:
//           case 3:
//             tim="low";
//             break;

//           case a:
//           case b:
//           case c: 
//             tim="mid"
//             break;

//           case 7:
//           case 8:
//           case 9:
//             tim="high";
//             break;

//           default:
//             tim="Boss level";
//             break;

            
//   }
//     return tim;
// }

// console.log(multipleCase(1));
// console.log(multipleCase(b));
// console.log(multipleCase(7));
// console.log(multipleCase());

let names=['God', 'Jesus' , 'Death', 'Metal', 'Love', 'Birth', 'Danger'];

function golf(par, strokes){
    if(strokes == 1){
        return names[0]
    }else if(strokes <= par -2)
    return names[1]

    else if(strokes == par -1)
    return names[2]

    else if(strokes == par)
    return names[3]

    else if(strokes == par +1)
    return names[4]

    else if(strokes == par +2)
    return names[5]

    else if(strokes >= par +3)
    return names[6]

}

console.log(golf(5, 3));




function chainOfEvents(sus){
    let muz =""

    switch(sus){
        case "bob":
            muz="marley"
            break;
        case 42:
            muz="no escape"
            break;
        case "rollin" :
            muz="limp bizkit"      
            break;
        case  "spy":
            muz="mission gone wrong"
            break; 
           
    }
    return muz
}

console.log(chainOfEvents(42));


let hellHound ={
   
    name: 'Cerbel',
    heads :3,
    tails : 1,
    siblings: ['Hidra', 'Nemeea Lion', 'Orthos', 'Himera', 'Sfinx', 'Scila'],
    aspect : 'greek mythology',
    message: function(){
        console.log(`This..hellhound ${this.name}, is the death of us all`);
    },
    parents:{
        father: 'Typhon',
        mother: 'Echidna'
    },
};

hellHound.message();
console.log(hellHound.siblings);
console.log(hellHound.parents);







let display=document.getElementById("display");
let buttons=Array.from(document.getElementsByClassName("button"));
// console.log(buttons)

buttons.map(button => {
    button.addEventListener('click', (result) => {
        switch( result.target.innerText){
            case 'C':
                display.innerText ='';
                break;
            case '←':
                    if(display.innerText)
                    {display.innerText=display.innerText.slice(0,-1)}
                    break;
            case '=':
                try{
                display.innerText = eval(display.innerText);}
                catch{
                    display.innerText = 'ERROR';
                }
                   break;
            default:
                display.innerText +=result.target.innerText
        }
    })
   
})



let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
  };
  
  dog.sayLegs();



  let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
