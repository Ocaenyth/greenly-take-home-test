import { DiscountOffer } from '..';

// TODO: Unit tests
export class BackMarketDiscountOffer extends DiscountOffer {
    protected applyDiscountPolicy() {
        if (this.expiresIn > 0) {
            this.discountInPercent -= 2;
        } else if (0 >= this.expiresIn) {
            this.discountInPercent -= 4;
        }
    }
}