import { Cache } from '@core/decorators/cache.decorator';

export class HailstoneUtils {

  @Cache({
    cacheKey: 'hs',
    useParamsAsKeys: true
  })
  static getHailstoneSeries(a: number): number[] {
    const go = (n: number, series: number[]) => {
      if (n <= 1) {
        return [...series, n];
      } else {
        return go(n % 2 ? ((n * 3) + 1) : n / 2, [...series, n]);
      }
    };

    return go(a, []);
  }
}
