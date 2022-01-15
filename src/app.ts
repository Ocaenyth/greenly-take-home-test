import fs from 'fs';
import { DiscountOffer } from './discount_offers';
import { Store } from './store';


const discountOffers: DiscountOffer[] = [
    new DiscountOffer("Velib", 20, 30),
    new DiscountOffer("Naturalia", 10, 5),
    new DiscountOffer("Vinted", 5, 40),
    new DiscountOffer("Ilek", 15, 40)
];
const store = new Store(discountOffers);

const log: DiscountOffer[][] = [];

for(let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
    log.push(store.updateDiscounts());
}

// TODO: This doesn't print exactly what is expected in `output.txt`, but the 
// TODO: original json (or txt) is actually invalid so I'll see to that later
/* eslint-disable no-console */
fs.writeFile("output.txt", JSON.stringify(log), err => {
    if(err) {
        console.log("error");
    } else {
        console.log("success");
    }
});
/* eslint-enable no-console */
