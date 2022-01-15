import { suite, test } from '@testdeck/jest';
import { DiscountOfferTestEntity } from './discount_offer.test_entity';

@suite
export class DiscountOfferUnitTests {

    // ! applyDiscountPolicy

    @test
    givenPositiveExpiresIn_whenApplyingDiscountPolicy_thenDiscountShouldDecreaseBy1() {
        const partnerName = 'test';
        const expiresIn = 10;
        const discountInPercent = 30;
        const offer = new DiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent - 1;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenNegativeExpiresIn_whenApplyingDiscountPolicy_thenDiscountShouldDecreaseBy2() {
        const partnerName = 'test';
        const expiresIn = -10;
        const discountInPercent = 30;
        const offer = new DiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent - 2;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenExpiresInEquals0_whenApplyingDiscountPolicy_thenDiscountShouldDecreaseBy2() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 30;
        const offer = new DiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent - 2;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    // ! applyExpirationPolicy

    @test
    givenAnyExpiresIn_whenApplyingExpirationPolicy_thenExpirationShouldDecreaseBy1() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 30;
        const offer = new DiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyExpirationPolicy();

        const expected = expiresIn - 1;
        const received = offer.expiresIn;
        expect(received).toStrictEqual(expected);
    }

    // ! sanitizeOffer

    @test
    givenDiscountAboveMax_whenSanitizing_thenDiscountShouldBeSetToMax() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 60;
        const offer = new DiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.Sanitize();

        const expected = 50;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenValidDiscount_whenSanitizing_thenDiscountShouldBeUnchanged() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 10;
        const offer = new DiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.Sanitize();

        const expected = discountInPercent;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenNegativeDiscount_whenSanitizing_thenDiscountShouldBeSetTo0() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = -10;
        const offer = new DiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.Sanitize();

        const expected = 0;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

}