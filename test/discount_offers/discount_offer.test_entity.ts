import { DiscountOffer } from '../../src/discount_offers';

export class DiscountOfferTestEntity extends DiscountOffer {
    public ApplyDiscountPolicy() {
        this.applyDiscountPolicy();
    }

    public ApplyExpirationPolicy() {
        this.applyExpirationPolicy();
    }

    public Sanitize() {
        this.sanitize();
    }
}