import { NaturaliaDiscountOffer } from '../../../src/discount_offers/parter_offers';

export class NaturaliaDiscountOfferTestEntity extends NaturaliaDiscountOffer {
    public ApplyDiscountPolicy() {
        this.applyDiscountPolicy();
    }

    public ApplyExpirationPolicy() {
        this.applyExpirationPolicy();
    }
}