{
    // conditional type
    type A1 = number
    type A2 = undefined

    type X = A1 extends null ? true : false; 
    type Y = A1 extends null ? true : A2 extends undefined ? undefined: any; //nested  

    type Boy = {
        cycle: string;
        bike: string;
        car: string
    }

    type IsABoy<T> = T extends keyof Boy ? true : false;

    type CheckIfBoy = IsABoy<"car">;
}