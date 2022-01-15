import { DiscountOffer } from "../discount_offers";

export class Store {

  private discountOffers: DiscountOffer[];

  constructor(discountOffers: DiscountOffer[] = []) {
    this.discountOffers = discountOffers;
  }

  public updateDiscounts(): DiscountOffer[] {
    for (const offer of this.discountOffers) {
      offer.update();
    }
    return this.discountOffers;
  }
}
