import { DiscountOffer } from "../discount_offers";

export class Store {

  private discountOffers: DiscountOffer[];

  constructor(discountOffers: DiscountOffer[] = []) {
    this.discountOffers = discountOffers;
  }

  // TODO: Unit/integration tests ?
  public updateDiscounts(): DiscountOffer[] {
    for (const offer of this.discountOffers) {
      offer.updateOffer();
    }
    return this.discountOffers;
  }
}
