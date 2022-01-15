export class DiscountOffer {
    constructor(
        public partnerName: string,
        public expiresIn: number,
        public discountInPercent: number) {
    }
}