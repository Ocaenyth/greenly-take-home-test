import { MAX_DISCOUNT_IN_PERCENT } from './discount_offer.constants';

export class DiscountOffer {
    constructor(
        public partnerName: string,
        public expiresIn: number,
        public discountInPercent: number) {
    }

    public updateOffer() {
        this.applyDiscountPolicy();
        this.applyExpirationPolicy();
        this.sanitize();
    }

    protected applyDiscountPolicy() {
        if (this.expiresIn > 0) {
            this.discountInPercent -= 1;
        } else if (0 >= this.expiresIn) {
            this.discountInPercent -= 2;
        }
    }

    protected applyExpirationPolicy() {
        this.expiresIn--;
    }

    protected sanitize() {
        this.discountInPercent = Math.max(this.discountInPercent, 0);
        this.discountInPercent = Math.min(this.discountInPercent, MAX_DISCOUNT_IN_PERCENT);
    }

}