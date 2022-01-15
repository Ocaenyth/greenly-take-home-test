import { suite, test } from '@testdeck/jest';
import { DiscountOfferTestEntity } from './discount_offer.test_entity';

@suite
export class DiscountOfferIntegrationsTests {
    @test
    givenStandardOffer_whenUpdating_thenOfferShouldUpdateAppropriately() {
        const partnerName = 'test';
        const expiresIn = 10;
        const discountInPercent = 30;
        const offer = new DiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.update();
        const expected = new DiscountOfferTestEntity(partnerName, expiresIn - 1, discountInPercent - 1);
        const received = offer;
        expect(received).toStrictEqual(expected);
    }
}