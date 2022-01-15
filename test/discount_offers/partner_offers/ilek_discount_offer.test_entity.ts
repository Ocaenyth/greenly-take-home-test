import { IlekDiscountOffer } from '../../../src/discount_offers/parter_offers';

export class IlekDiscountOfferTestEntity extends IlekDiscountOffer {
    public ApplyDiscountPolicy() {
        this.applyDiscountPolicy();
    }

    public ApplyExpirationPolicy() {
        this.applyExpirationPolicy();
    }
}