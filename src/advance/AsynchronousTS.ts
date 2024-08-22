{
    // basic promice
    const createPromice = (): Promise<string>  => {
        return new Promise <string>( (resolve, reject) => {
            const data: string = "something"
            if( data ){
                resolve(data)
            }
            else {
                reject("no data")
            }
        })
    }

    // call promise fonction
    const showData = async (): Promise<string> => {
        const data:string = await createPromice()
        console.log(data);
        return data
    }

    showData()

    // promice for api

    const getTodo = async() =>{
        const responce = await fetch("https://github.com/jabirstain3");
        const data = await responce.json()
        return  data
    }

    getTodo()
}