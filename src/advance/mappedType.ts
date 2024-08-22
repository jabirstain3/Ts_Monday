{
    //mapped types

    const arrOfNumber: number[] = [1, 2, 3, 4, 5];
    const arrOfString: string[] = arrOfNumber.map((number) => number.toString());
    console.log(arrOfString); // Output: ["1", "2", "3", "4"]

    type AreaNumber = {
        hight: number;
        width: number;
    }

    type AreaString = {
        [ key in keyof AreaNumber ] : string ;  //mapped type example
    }

    type AreaStringGeniric<T> = {
        [ key in keyof T ] : T[key] ;  //mapped type with generic and lookup variable example
    }

    const area1 : AreaStringGeniric<{ hight: string; width: number; }> = {
        hight: '10',
        width: 20,
    }
}