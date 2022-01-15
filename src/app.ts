import * as fs from 'fs';
import { DiscountOffer, DiscountOfferFactory } from './discount_offers';
import { Store } from './store';

const discountOfferFactory = new DiscountOfferFactory();

const discountOffers: DiscountOffer[] = [
    discountOfferFactory.makeDiscountOffer("Velib", 20, 30),
    discountOfferFactory.makeDiscountOffer("Naturalia", 10, 5),
    discountOfferFactory.makeDiscountOffer("Vinted", 5, 40),
    discountOfferFactory.makeDiscountOffer("Ilek", 15, 40),
    // discountOfferFactory.makeDiscountOffer("BackMarket", 15, 40),
];
const store = new Store(discountOffers);

let log = '';
const totalDays = 30;

for (let elapsedDays = 0; elapsedDays < totalDays; elapsedDays++) {
    log += JSON.stringify(store.updateDiscounts());
    if (elapsedDays !== totalDays - 1) {
        log += ',';
    }
}

// TODO: This doesn't print exactly what is expected in `output.txt`, but the 
// TODO: original json (or txt) is actually invalid so I'll see to that later
/* eslint-disable no-console */
fs.writeFile("output.txt", log, err => {
    if (err) {
        console.log("error");
    } else {
        console.log("success");
    }
});
/* eslint-enable no-console */
