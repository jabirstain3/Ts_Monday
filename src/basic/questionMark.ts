{   
    const age: number = 150;

    if(age >= 18) {
        console.log("adult");
        
    }
    else {
        console.log("child");
    }

    // ternary operater
    const isMarried =  age >= 18 ? "adult" : "child";

    // optional chaining
    type User ={
        name: string;
        address:{
            road: string;
            city: string;
            permanentAddress: string;
            presentAddress? : string;
        };
    };
    const user : User ={
        name: "jabir",
        address:{
            road: "10",
            city: "Uttara 10",
            permanentAddress: "uttara 10, road 10, house 12",
        },
    }

    const permanentAddress =user?.address?.permanentAddress ?? "no address";
    console.log({ permanentAddress});
    


    // nullish coalescing operater
    const isAuthenticated = null;
     const name = isAuthenticated ?? "Guest"; //its not like ternary operator

}