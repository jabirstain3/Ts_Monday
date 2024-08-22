{
    //
    const createArray = (param : string) : string[] => {
        return [param];
    }
    const res1 = createArray('Bangladesh');

    //generic function
    const arraygeneric = <T> (param : T): T[] => {
        return [param];
    }
    const genericArrowFuction = arraygeneric(true);

    type user = {name : string, id : number}

    const genericobject = arraygeneric<user>({
        name : 'Rahim',
        id : 1
    })

    const arraygeneric1 = <T,Q> (param1 : T, param2 : Q): [T, Q] => {
        return [param1, param2];
    }
    const generictuple = arraygeneric1<string, string>('bang', 'nep');

}