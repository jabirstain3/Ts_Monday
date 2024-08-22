{
    //generic constraint with keyof operater

    type Vehicle = {
        bike:string;
        car: string;
        ship:string;
    }

    type Owner2= keyof Vehicle 
    type Owner1= "bike" | "car" | "ship"; //manually

    // object
    const user = {
        name:"joe",
        age:26,
        address:"ctg"
    }

    // //  to logout
    // user.name
    // user['age']

    const getPropertyValue = <X,Y extends keyof X> ( obj : X, key : Y ) => {
        return obj[key];
    }

    const result = getPropertyValue( user, "name" )
}