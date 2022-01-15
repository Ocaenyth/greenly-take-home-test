import { suite, test } from '@testdeck/jest';
import { IlekDiscountOfferTestEntity } from './ilek_discount_offer.test_entity';

@suite
export class IlekDiscountOfferUnitTests {

    // ! applyDiscountPolicy

    @test
    givenPositiveExpiresIn_whenApplyingDiscountPolicy_thenDiscountShouldBeUnchanged() {
        const partnerName = 'test';
        const expiresIn = 10;
        const discountInPercent = 30;
        const offer = new IlekDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenNegativeExpiresIn_whenApplyingDiscountPolicy_thenDiscountShouldBeUnchanged() {
        const partnerName = 'test';
        const expiresIn = -10;
        const discountInPercent = 30;
        const offer = new IlekDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenExpiresInEquals0_whenApplyingDiscountPolicy_thenDiscountShouldBeUnchanged() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 30;
        const offer = new IlekDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    // ! applyExpirationPolicy

    @test
    givenAnyExpiresIn_whenApplyingExpirationPolicy_thenExpirationShouldBeUnchanged() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 30;
        const offer = new IlekDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyExpirationPolicy();

        const expected = expiresIn;
        const received = offer.expiresIn;
        expect(received).toStrictEqual(expected);
    }
}