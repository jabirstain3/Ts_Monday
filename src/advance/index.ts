{ 
    // type assertion
    let anything : any;
    anything = "nextlevel web development";
    // (anything as string) ;

    // interface
    type User1 ={
        name: string;
        age: number;
    };
    type UserWithRoll1 = User1 & {role : string}

    const user1: UserWithRoll1 = {
        name: "John",
        age: 30,
        role:"234"
    };


    interface User2 {
        name: string;
        age:number;
    }
    interface UserWithRoll2 extends User2 {
        role:string
    }
    const user2: UserWithRoll2 = {
        name: "John",
        age: 30,
        role:"234"
    };

    interface Marks {      //array interface
        [index: number] : number;
    }

    const marks : Marks = [90, 95, 86];

    interface Add {         //arrow function
        (x: number, y: number): number;
    }
    const add: Add = (x, y) => x + y;

}
