{
    //spread operater
    const song1 : string[] = ["nadan", "aadat", "sabare"];
    const song2 : string[] = ["firia daw", "meye", "dahokhan"];
    
    song1.push(...song2);

    const singers : {
        artcell : string,
        avoideRafa : string,
        nagoarBaowl : string,
    } = {
        artcell : "lincon",
        avoideRafa : "Rafa",
        nagoarBaowl : "jams",
    } 
    const forgainSingers : {
        linkingPark : string,
        postmalon : string,
        alongWalker : string,
    } = {
        linkingPark : "chester",
        postmalon : "powl",
        alongWalker : "jack",
    } 

    const allSingers ={
        ...singers,
        ...forgainSingers,
    }


    // rest operator
    const fabSongs = (...song1 : string[]) => {
        song1.forEach((song : string) => console.log(song) )
    }
}