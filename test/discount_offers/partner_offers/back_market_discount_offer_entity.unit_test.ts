import { suite, test } from '@testdeck/jest';
import { NaturaliaDiscountOfferTestEntity } from './naturalia_discount_offer.test_entity';

@suite
export class NaturaliaDiscountOfferUnitTests {

    // ! applyDiscountPolicy

    @test
    givenPositiveExpiresIn_whenApplyingDiscountPolicy_thenDiscountShouldDecreaseBy2() {
        const partnerName = 'test';
        const expiresIn = 10;
        const discountInPercent = 30;
        const offer = new NaturaliaDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent - 2;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenNegativeExpiresIn_whenApplyingDiscountPolicy_thenDiscountShouldDecreaseBy4() {
        const partnerName = 'test';
        const expiresIn = -10;
        const discountInPercent = 30;
        const offer = new NaturaliaDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent - 4;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenExpiresInEquals0_whenApplyingDiscountPolicy_thenDiscountShouldDecreaseBy4() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 30;
        const offer = new NaturaliaDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent - 4;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    // ! applyExpirationPolicy

    @test
    givenAnyExpiresIn_whenApplyingExpirationPolicy_thenExpirationShouldDecreaseBy1() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 30;
        const offer = new NaturaliaDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyExpirationPolicy();

        const expected = expiresIn - 1;
        const received = offer.expiresIn;
        expect(received).toStrictEqual(expected);
    }
}