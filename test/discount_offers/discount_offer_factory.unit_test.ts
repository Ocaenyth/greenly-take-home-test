import { suite, test } from '@testdeck/jest';
import { DiscountOffer, DiscountOfferFactory } from '../../src/discount_offers';
import { BackMarketDiscountOffer, IlekDiscountOffer, NaturaliaDiscountOffer, VintedDiscountOffer } from '../../src/discount_offers/parter_offers';

@suite
export class DiscountOfferFactoryUnitTests {

    // ! makeDiscountOffer

    @test
    givenRandomName_whenMakingDiscountOffer_thenShouldReturnStandardDiscountOffer() {
        const factory = new DiscountOfferFactory();
        const partnerName = 'this_is_not_a_recognized_partned';
        const expiresIn = 10;
        const discountInPercent = 30;

        const expected = new DiscountOffer(partnerName, expiresIn, discountInPercent);
        const received = factory.makeDiscountOffer(partnerName, expiresIn, discountInPercent);
        expect(received).toStrictEqual(expected);
    }

    @test
    givenVelibPartnerName_whenMakingDiscountOffer_thenShouldReturnStandardDiscountOffer() {
        const factory = new DiscountOfferFactory();
        const partnerName = 'Velib';
        const expiresIn = 10;
        const discountInPercent = 30;

        const expected = new DiscountOffer(partnerName, expiresIn, discountInPercent);
        const received = factory.makeDiscountOffer(partnerName, expiresIn, discountInPercent);
        expect(received).toStrictEqual(expected);
    }

    @test
    givenNaturaliaPartnerName_whenMakingDiscountOffer_thenShouldReturnNaturaliaDiscountOffer() {
        const factory = new DiscountOfferFactory();
        const partnerName = 'Naturalia';
        const expiresIn = 10;
        const discountInPercent = 30;

        const expected = new NaturaliaDiscountOffer(partnerName, expiresIn, discountInPercent);
        const received = factory.makeDiscountOffer(partnerName, expiresIn, discountInPercent);
        expect(received).toStrictEqual(expected);
    }

    @test
    givenVintedPartnerName_whenMakingDiscountOffer_thenShouldReturnVintedDiscountOffer() {
        const factory = new DiscountOfferFactory();
        const partnerName = 'Vinted';
        const expiresIn = 10;
        const discountInPercent = 30;

        const expected = new VintedDiscountOffer(partnerName, expiresIn, discountInPercent);
        const received = factory.makeDiscountOffer(partnerName, expiresIn, discountInPercent);
        expect(received).toStrictEqual(expected);
    }

    @test
    givenIlekPartnerName_whenMakingDiscountOffer_thenShouldReturnIlekDiscountOffer() {
        const factory = new DiscountOfferFactory();
        const partnerName = 'Ilek';
        const expiresIn = 10;
        const discountInPercent = 30;

        const expected = new IlekDiscountOffer(partnerName, expiresIn, discountInPercent);
        const received = factory.makeDiscountOffer(partnerName, expiresIn, discountInPercent);
        expect(received).toStrictEqual(expected);
    }

    @test
    givenBackMarketPartnerName_whenMakingDiscountOffer_thenShouldReturnBackMarketDiscountOffer() {
        const factory = new DiscountOfferFactory();
        const partnerName = 'BackMarket';
        const expiresIn = 10;
        const discountInPercent = 30;

        const expected = new BackMarketDiscountOffer(partnerName, expiresIn, discountInPercent);
        const received = factory.makeDiscountOffer(partnerName, expiresIn, discountInPercent);
        expect(received).toStrictEqual(expected);
    }

}