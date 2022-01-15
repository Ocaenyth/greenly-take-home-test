import { DiscountOffer } from '..';

export class IlekDiscountOffer extends DiscountOffer {
    protected applyDiscountPolicy() {
        return;
    }

    protected applyExpirationPolicy() {
        return;
    }
}