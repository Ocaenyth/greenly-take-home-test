import { DiscountOffer } from '..';

// TODO: Unit tests
export class VintedDiscountOffer extends DiscountOffer {
    protected applyDiscountPolicy() {
        if (this.expiresIn <= 0) {
            this.discountInPercent = 0;
            return;
        }
        this.discountInPercent++;
        if (this.expiresIn <= 10) {
            this.discountInPercent++;
        }
        if (this.expiresIn <= 5) {
            this.discountInPercent++;
        }
    }
}