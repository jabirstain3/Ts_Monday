{
    //nullable type
    const searchName = (value: string) => {
        if (value) {
            console.log('searching');
        }
        else {
            console.log('Nothing to search');
        }
    }
    searchName('persion');

    //unknown type
    const getSpeedInMeterPerSecond = (value : unknown) => {
        if (typeof value === 'number') {
            const convertedSpeed =( value * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else if (typeof value === 'string') {
            const [res , unit] = value.split(" ");
            const convertedSpeed =( parseFloat(res) * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else {
            console.log('Invalid input');
        }

    }
    getSpeedInMeterPerSecond('10 km/h');

    //Never
    const throwError = (msg : string) => {
        throw new Error(msg);
    };
    throwError('not found');

}