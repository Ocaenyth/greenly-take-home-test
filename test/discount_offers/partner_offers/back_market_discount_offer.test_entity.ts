import { BackMarketDiscountOffer } from '../../../src/discount_offers/parter_offers';

export class BackMarketDiscountOfferTestEntity extends BackMarketDiscountOffer {
    public ApplyDiscountPolicy() {
        this.applyDiscountPolicy();
    }

    public ApplyExpirationPolicy() {
        this.applyExpirationPolicy();
    }
}