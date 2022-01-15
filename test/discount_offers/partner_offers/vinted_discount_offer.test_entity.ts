import { VintedDiscountOffer } from '../../../src/discount_offers/parter_offers';

export class VintedDiscountOfferTestEntity extends VintedDiscountOffer {
    public ApplyDiscountPolicy() {
        this.applyDiscountPolicy();
    }

    public ApplyExpirationPolicy() {
        this.applyExpirationPolicy();
    }
}