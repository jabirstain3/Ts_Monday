// ----------- premitive data type ----------------

// string
let firstName : string = "jan";

// number
let roll : number = 1522;

// boolean
let isMale : boolean = true;

// undefined
let age : undefined = undefined;

// null
let address : null = null;

// nay type
let d;
d = 123;
d = null;


// ----------- premitive data type ----------------

// array 
let major : string[] = [ 'math', 'physics' ];
let score : number[] = [ 86, 92 ];
major.push('chemestry');
score.push(95);

// tuple
let extra : [string, string] = ['juod', 'public speaking'];

let student : [string, number, boolean] = ['janu', 1522, true];
student[0] = 'jan';

// reference Type --> object
// object
const teacher : {
    firstName : string,
    middleName ? : string, //optional Type
    lastName : string,
    isMarried : boolean,
    readonly companey : 'FreeMans', // literal Type =+ access modifer
} = {
    firstName : 'Nasrin',
    lastName : 'akter',
    isMarried : true,
    companey : 'FreeMans' 
}

