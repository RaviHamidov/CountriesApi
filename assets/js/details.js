const backBtn = document.querySelector('.back-btn');
let currentUrl = new URL(location.href);
let params = currentUrl.searchParams;

// html elements
let flag = document.querySelector('.country-flag-details');
let counrtyName = document.querySelector('.country-name');
let nativeName = document.querySelector('.native-name');
let population = document.querySelector('.population');
let region = document.querySelector('.region');
let subRegion = document.querySelector('.sub-region');
let capital = document.querySelector('.capital');
let topLevelDomain = document.querySelector('.top-level-domain');
let currencies = document.querySelector('.currencies');
let languages = document.querySelector('.languages');
let borderCountriesDiv = document.querySelector('.border-countries');

const setCountryInfo = async function() {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${params.get('country').toLowerCase()}`);
        const data = await response.json();
        const counrtyArray = data[0];
        flag.src = counrtyArray.flags.png;
        counrtyName.textContent = counrtyArray.name.common;

        // native name
        nativeName.textContent = ''
        for (let names in counrtyArray.name.nativeName) {
            nativeName.textContent += `${counrtyArray.name.nativeName[names].common}, `;
        }

        population.textContent = counrtyArray.population;
        region.textContent = counrtyArray.region;
        subRegion.textContent = counrtyArray.subregion;
        capital.textContent = counrtyArray.capital;
        topLevelDomain.textContent = counrtyArray.tld;

        // currencies
        currencies.textContent = '';
        for (let currency in counrtyArray.currencies) {
            currencies.textContent += `${counrtyArray.currencies[currency].name}, `;
        }

        // labguages 
        languages.textContent = '';
        for (let language in counrtyArray.languages){
            languages.textContent += `${counrtyArray.languages[language]}, `;
        }

        borderCountriesDiv.innerHTML = '';
        for (let borders in counrtyArray.borders) {
            let newHtml = `
                <a class="border-country" href="./details.html?country=${counrtyArray.borders[borders]}">${counrtyArray.borders[borders]}</a>
            `
            borderCountriesDiv.innerHTML += newHtml;
        }
    } 
    catch (error) {
        alert('Something bad happened');
    }
    
}

backBtn.addEventListener('click', function() {
    history.go(-1);
});

setCountryInfo();