import { describe, expect, it } from 'vitest';

// import type { Article } from '../article/article-models';
import { arrayOfStringsTrimAll } from './array-of-strings-utils';
import { localeFromCurrency } from './locale-utils';
import { checkNumberNonNegative, isNumberNatural, isNumberPositive } from './number-utils';

// local types
type Currency = 'EUR' | 'USD';
// type ArticleName = Pick<Article, 'name'>;

describe('Suite "utils/"', () => {
  describe('arrayOfStringsTrimAll()', () => {
    const args: string[][] = [
      [],
      ['  text-black ', 'border'],
      ['text-black', '  border '],
      ['  text-black '],
    ];

    // it('Param is string[]', () => {
    //   // Mock "calling Arg"
    //   const mockFn = vi.fn();
    //   args.forEach((arg) => mockFn(arg));

    //   // Called Arg...
    //   const calledArgs: unknown[][] = args.map((_, i) => mockFn.mock.calls[i][0]); // [call][args passed in]
    //   // is string[]
    //   calledArgs.forEach((arg) => {
    //     expect(arg.every((str) => typeof str === 'string')).toBe(true);
    //   });
    // });

    it('Return is string[]', () => {
      args.forEach((arg) => {
        expect(arrayOfStringsTrimAll(arg).every((str) => typeof str === 'string')).toBe(true);
      });
    });

    it("Returned string[] keeps param's string[] order", () => {
      expect(arrayOfStringsTrimAll(args[0])).toStrictEqual([]);
      expect(arrayOfStringsTrimAll(args[1])).toStrictEqual(['text-black', 'border']);
      expect(arrayOfStringsTrimAll(args[1])).not.toStrictEqual(['border', 'text-black']);
    });
  });

  describe('localeFromCurrency()', () => {
    const args: Currency[] = ['EUR', 'USD'];

    // it('Param is string', () => {
    //   // Mock "calling Arg"
    //   const mockFn = vi.fn();
    //   args.forEach((arg) => mockFn(arg));

    //   // Called Arg...
    //   const calledArgs: unknown[] = args.map((_, i) => mockFn.mock.calls[i][0]); // [call][args passed in]
    //   // is string
    //   calledArgs.forEach((arg) => {
    //     expect(typeof arg === 'string').toBe(true);
    //   });
    // });

    it("Return is 'Locale'", () => {
      expect(localeFromCurrency(args[0])).toStrictEqual('es-ES');
      expect(localeFromCurrency(args[1])).toStrictEqual('en-US');
    });
  });

  describe('checkNumberNonNegative()', () => {
    const args: number[] = [-1, -1.5, 0, 1];

    // it('Param is positive number', () => {
    //   // Mock "calling Arg"
    //   const mockFn = vi.fn();
    //   args.forEach((arg) => mockFn(arg));

    //   // Called Arg...
    //   const calledArgs: unknown[] = args.map((_, i) => mockFn.mock.calls[i][0]); // [call][args passed in]
    //   // is positive number
    //   calledArgs.forEach((arg) => {
    //     expect(typeof arg === 'number').toBe(true);
    //   });
    //   expect(args[0]).toBeLessThan(0);
    //   expect(args[1]).toBeLessThan(0);
    //   expect(args[2]).toBeGreaterThanOrEqual(0);
    //   expect(args[3]).toBeGreaterThanOrEqual(1);
    // });

    it('Return is positive number', () => {
      expect(() => checkNumberNonNegative(args[0])).toThrow(TypeError);
      expect(() => checkNumberNonNegative(args[1])).toThrow(TypeError);
      expect(checkNumberNonNegative(args[2])).toBeGreaterThanOrEqual(0);
      expect(checkNumberNonNegative(args[3])).toBeGreaterThanOrEqual(1);
    });
  });

  describe('isNumberPositive()', () => {
    it('Return is positive number', () => {
      const args: unknown[] = [
        null,
        undefined,
        [],
        {},
        '',
        'str',
        Infinity,
        -Infinity,
        -1.5,
        -1,
        0,
        1.5,
        1,
        2,
      ];

      expect(isNumberPositive(args[0])).toBe(false);
      expect(isNumberPositive(args[1])).toBe(false);
      expect(isNumberPositive(args[2])).toBe(false);
      expect(isNumberPositive(args[3])).toBe(false);
      expect(isNumberPositive(args[4])).toBe(false);
      expect(isNumberPositive(args[5])).toBe(false);
      expect(isNumberPositive(args[6])).toBe(true); // Infinity
      expect(isNumberPositive(args[7])).toBe(false);
      expect(isNumberPositive(args[8])).toBe(false);
      expect(isNumberPositive(args[9])).toBe(false);
      expect(isNumberPositive(args[10])).toBe(false); // 0
      expect(isNumberPositive(args[11])).toBe(true); // 1.5
      expect(isNumberPositive(args[12])).toBe(true); // 1
      expect(isNumberPositive(args[13])).toBe(true); // 2
    });
  });

  describe('isNumberNatural()', () => {
    const args: unknown[] = [
      null,
      undefined,
      [],
      {},
      '',
      'str',
      Infinity,
      -Infinity,
      -1.5,
      -1,
      0,
      1.5,
      1,
      2,
    ];

    it('Return is natural number', () => {
      expect(isNumberNatural(args[0])).toBe(false);
      expect(isNumberNatural(args[1])).toBe(false);
      expect(isNumberNatural(args[2])).toBe(false);
      expect(isNumberNatural(args[3])).toBe(false);
      expect(isNumberNatural(args[4])).toBe(false);
      expect(isNumberNatural(args[5])).toBe(false);
      expect(isNumberNatural(args[6])).toBe(false);
      expect(isNumberNatural(args[7])).toBe(false);
      expect(isNumberNatural(args[8])).toBe(false);
      expect(isNumberNatural(args[9])).toBe(false);
      expect(isNumberNatural(args[10])).toBe(false);
      expect(isNumberNatural(args[11])).toBe(false);
      expect(isNumberNatural(args[12])).toBe(true); // 1
      expect(isNumberNatural(args[13])).toBe(true); // 2
    });
  });
});
