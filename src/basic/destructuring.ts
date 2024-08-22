{

    //dstructuring object
    const person = {   
        id : 26038,
        name : {
            firstName : "Keya",
            middleName : "Rani",
            lastName : "Dabnath",
        },
        contact: "01826579213",
        address: "Dhaka",
    }

    const { 
        contact, name : {
        firstName,
        //name alias
        middleName : midName, //can't declear  data typr when destrusturing
        lastName,
        }
    } = person;


    //destructuring array
    const arr = [1,2,3,4,5,6,7,8]
    const [first, second, luckyNumber, ...rest] = arr;

}