async function chain(urlsarray) {

    for (let i = 0; i < urlsarray.length; i++) {
        try {
            const response = await fetch(urlsarray[i]);
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    
}


const cities = [
    'https://api.openweathermap.org/data/2.5/weather?q=Ivano-Frankivsk&APPID=ecd0760245adf6ca1732fce6a8a8a775&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=Lviv&APPID=ecd0760245adf6ca1732fce6a8a8a775&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=Ternopil&APPID=ecd0760245adf6ca1732fce6a8a8a775&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=SOME_MISTAKE_TO_CHECK_FUNCTIONALITYl&APPID=ecd0760245adf6ca1732fce6a8a8a775&units=metric',
    'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&APPID=ecd0760245adf6ca1732fce6a8a8a775&units=metric'
];

chain(cities);
