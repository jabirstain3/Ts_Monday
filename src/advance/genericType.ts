{
    //generic type

    const roll : number[] = [3, 4, 6, 3];
    const roll1 : Array<number> = [3, 4, 6, 3];

    type GenericArray<T> = Array<T> //array
    const roll2 : GenericArray<number> = [3, 4, 6,4];

    const mentors : GenericArray<{name:string; age: number}> =[
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Mike',
            age: 39
        },
    ]

    type Generictupole<x,y> = [x, y] //tupole
    const manush : Generictupole<string, string> = [
        "mr. x", "mrs. y"
    ]
    const user : Generictupole<number, {name : string, email : string}> = [
        2346,
        {
            name: 'John',
            email: 'john@gmail.com'
        }]


    //generic with interface
}