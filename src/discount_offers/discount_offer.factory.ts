import { DiscountOffer } from '.';
import { Partners } from '../partners';
import { BackMarketDiscountOffer, IlekDiscountOffer, NaturaliaDiscountOffer, VintedDiscountOffer } from './parter_offers';

export class DiscountOfferFactory {
    public makeDiscountOffer(partnerName: string, expiresIn: number, discountInPercent): DiscountOffer {
        switch (partnerName) {
            case Partners.VELIB:
                return new DiscountOffer(partnerName, expiresIn, discountInPercent);
            case Partners.NATURALIA:
                return new NaturaliaDiscountOffer(partnerName, expiresIn, discountInPercent);
            case Partners.VINTED:
                return new VintedDiscountOffer(partnerName, expiresIn, discountInPercent);
            case Partners.ILEK:
                return new IlekDiscountOffer(partnerName, expiresIn, discountInPercent);
            case Partners.BACK_MARKET:
                return new BackMarketDiscountOffer(partnerName, expiresIn, discountInPercent);
            default:
                return new DiscountOffer(partnerName, expiresIn, discountInPercent);
        }

    }
}