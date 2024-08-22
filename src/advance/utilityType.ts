{   // Utility type
    type Person = {
        name: string;
        age: number;
        contactNo: string;
        email: string;
    }

    // Pick type
    type Name = Pick<Person, "name">;
    type Contact = Pick<Person, "email" | "contactNo">;
    

    // Omit type -> leaveout somthing from the group
    type Contact1 = Omit<Person,"name" | "age">;

    // Required -> all type is required 
    type Personrequired = Required<Person>;

    // Partial -> all type is optional
    type PersonPartial = Partial<Person>;

    // Readonly
    type ReadonlyPerson = Readonly<Person>

    const person2: ReadonlyPerson ={
        name: "John",
        age: 25,
        contactNo: "1234567890",
        email: "john@gmail.com"
    };
    // person2.name= 'cen'

    //// Record Type -> can add data that are not definsed
    type Objeone = Record<string, string>
    const obj1: Objeone = { //can not use number in value
        name: "John",
        age: "25",
    }
    
    const obj2: Record<string, unknown> = {
        name:"jeni",
        age: 25,
    }
}