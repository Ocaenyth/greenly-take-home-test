import { DiscountOffer } from '..';

// TODO: Unit tests
export class NaturaliaDiscountOffer extends DiscountOffer {
    protected applyDiscountPolicy() {
        if (this.expiresIn > 0) {
            this.discountInPercent += 1;
        } else if (0 >= this.expiresIn) {
            this.discountInPercent += 2;
        }
    }
}