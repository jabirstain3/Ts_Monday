{
    // string
    type UserName = string;
    let userName : UserName = "John Doe"; 

    // number
    type Age = number;
    let age : Age = 30;
    
    // boolean
    type IsMarried = boolean;
    let isMarried : IsMarried = true;

    // object  alias
    type Student ={
        name : string,   
        age : number,
        gender : string,
        address : string,
        contact?:string,
    }
    
    const student1 : Student ={
        name : "Rahul",
        age : 20,
        gender : "Male",
        address : "Bangalore",
        contact : "1234567890",
    }

    const student2 : Student ={
        name : "Ratul", 
        age:24,
        gender : "Male",
        address : "Kolkata",
    }

    //function
    type Add = ( num1 : number, num2 : number) => number;
    const add :Add = (num1, num2) => num1 + num2
}