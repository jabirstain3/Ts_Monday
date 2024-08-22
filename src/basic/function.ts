// Normal function
function add(numb1 : number, numb2 : number) : number {
    return numb1 + numb2;
} 
add(2, 5);

// Arrow function
const add2 = (numb1 : number, numb2 : number) : number => {
    return numb1 + numb2;
}
add2(2, 5);

// function in a object is called method
const user = {
    name : "John",
    balance : 0,
    addBalance(balance : number) : string {
        return `my balance is ${this.balance + balance}`;
    },
};

// callback function
const ary : number[] =[2, 3, 4, 5, 7];

const newAry : number[] = ary.map((num : number) : number => num*num);