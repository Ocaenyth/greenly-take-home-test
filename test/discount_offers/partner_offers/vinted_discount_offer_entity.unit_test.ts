import { suite, test } from '@testdeck/jest';
import { VintedDiscountOfferTestEntity } from './vinted_discount_offer.test_entity';

@suite
export class VintedDiscountOfferUnitTests {

    // ! applyDiscountPolicy

    @test
    givenExpiresInAbove10_whenApplyingDiscountPolicy_thenDiscountShouldIncreaseBy1() {
        const partnerName = 'test';
        const expiresIn = 14;
        const discountInPercent = 30;
        const offer = new VintedDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent + 1;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenExpiresInEquals10_whenApplyingDiscountPolicy_thenDiscountShouldIncreaseBy2() {
        const partnerName = 'test';
        const expiresIn = 10;
        const discountInPercent = 30;
        const offer = new VintedDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent + 2;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenExpiresInBetween5And10_whenApplyingDiscountPolicy_thenDiscountShouldIncreaseBy2() {
        const partnerName = 'test';
        const expiresIn = 7;
        const discountInPercent = 30;
        const offer = new VintedDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent + 2;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenExpiresInEquals5_whenApplyingDiscountPolicy_thenDiscountShouldIncreaseBy3() {
        const partnerName = 'test';
        const expiresIn = 5;
        const discountInPercent = 30;
        const offer = new VintedDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent + 3;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenExpiresInBetween0And5_whenApplyingDiscountPolicy_thenDiscountShouldIncreaseBy3() {
        const partnerName = 'test';
        const expiresIn = 2;
        const discountInPercent = 30;
        const offer = new VintedDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = discountInPercent + 3;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenExpiresInEquals0_whenApplyingDiscountPolicy_thenDiscountShouldBe0() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 30;
        const offer = new VintedDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = 0;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    @test
    givenNegativeExpiresIn_whenApplyingDiscountPolicy_thenDiscountShouldBe0() {
        const partnerName = 'test';
        const expiresIn = -3;
        const discountInPercent = 30;
        const offer = new VintedDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyDiscountPolicy();

        const expected = 0;
        const received = offer.discountInPercent;
        expect(received).toStrictEqual(expected);
    }

    // ! applyExpirationPolicy

    @test
    givenAnyExpiresIn_whenApplyingExpirationPolicy_thenExpirationShouldDecreaseBy1() {
        const partnerName = 'test';
        const expiresIn = 0;
        const discountInPercent = 30;
        const offer = new VintedDiscountOfferTestEntity(partnerName, expiresIn, discountInPercent);

        offer.ApplyExpirationPolicy();

        const expected = expiresIn - 1;
        const received = offer.expiresIn;
        expect(received).toStrictEqual(expected);
    }
}