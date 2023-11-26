let example1 = 'number' + 3 + 3;
console.log(example1) //number33 конкатенація

let example2 = null + 3;
console.log(example2) //3 тому що null=0

let example3 = 5 && "qwerty";
console.log(example3) //qwerty  оба значення тру, тому оператор повертає останнє значення 

let example4 = +'40' + +'2' + "hillel";
console.log(example4)//42hillel  числа 40 і 2 стрінги приведені до числа, далі конкатенація

let example5 = '10' - 5 === 6;
console.log(example5)//false тому що 10-5 = 5  5 не строго равно 6

let example6 = true + false;
console.log(example6); //1 тому що 1+0

let example7 ='4px' - 3;
console.log(example7) //NaN це математичная операція віднімання в ході якоі виходить точно не число

let example8 = '4' - 3;
console.log(example8) //1 тому що математична операція - віднімання

let example9 = '6' + 3 ** 0;
console.log(example9) // 61 тому що 3 в ступіні 0 =1, потім кантакенація з 6 

let example10 = 12 / '6';
console.log(example10) //2 тому що математична операція ділення

let example11 ='10' + (5 === 6);
console.log(example11) //10false  тому що спочатку операція в дужках - фолс - бо 5 не строго рівно 6, потім конкатенація

let example12 = null == '';
console.log(example12) //false  тому що 0 не рівен пустому значенню?

let example13 = 3 ** (9 / 3);
console.log(example13) //27 спочатку операція в дужках = 3, потім зведення в 3 ступінь трійки 3**3=27

let example14 = !!'false' == !!'true';
console.log(example14) // true тому що дві равносильні текстові стрінги

let example15 = 0 || '0' && 1;
console.log(example15) // 1    0 або 0 і 1

let example16 = (+null == false) < 1;
console.log(example16) // false  операція в дужках +null(0) рівен фолс(0), a потім тру(1) не менше 1

let example17 = false && true || true;
console.log(example17) // true  починаєм зліва-направо бо && має вищий пріорітет, будее споачтку через оператор І фолс(не обидва тру), а потім через оператор або - тру(бо хоч один з них тру)

let example18 = false && (false || true);
console.log(example18) // false  бо спершу операція в дужках - оператор або повертає true тк є хоч один операнд true, оператор І потвертає тру якщо ообидва операнди тру, але тут не обидві,тому результат false 

let example19 = (+null == false) < 1 ** 5;
console.log(example19) // false операція в дужках +null(0) ne рівен фолс(0), a потім 1 не меньше 1 , тому фолс,  потім фолс в 5 ступені - фолс