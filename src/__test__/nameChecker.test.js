import { nameChecker } from '../client/js/nameChecker';

describe('The function nameChecker() it expect return true ' , () => {
    var URL = "https://www.neom.com/en-us/sector/technology-and-digital/?utm_source=google&utm_medium=cpc&utm_campaign=alwayson&gclid=CjwKCAjwqML6BRAHEiwAdquMndAabNfgAUqKBHK96Vo7zgyS4ikmZ8htqO_x1mvaW4jNMi4MM1VwQRoCcCIQAvD_BwE";
    test('It should return true', async () => {
        const response = nameChecker(URL);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});

describe('The function  nameChecker() it expect return false ' , () => {
    var URL = "lkjhldfkhmklfjyiomkkfteirekg;skjglkyjiowijyndgnirjj;asslrl";
    test('It should return false', async () => {
        const response = nameChecker(URL);
        expect(response).toBeDefined();
        expect(response).toBe(false);
    });
});