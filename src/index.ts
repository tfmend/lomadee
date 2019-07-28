import { DeepLinkResource } from './resources/offer/deeplink';
import { OfferResource } from './resources/offer/offers';
import { ProductResource } from './resources/offer/products';
import { CategoryResource } from './resources/offer/categories';
import { CouponResource } from './resources/coupon/coupon';

class Lomadee {
  private token: string;
  private sourceId: string;
  private env: string = 'sandbox';

  /**
   *
   * @param token Lomadee App-Token
   * @param sourceId Affiliated ID
   * @param env Lomadee environment: must be sandbox or production
   */
  constructor(token: string, sourceId: string, env?: string) {
    if (!token || token === '') {
      throw new Error('Initialize error: App-Token must be provided');
    }

    if (!sourceId || sourceId === '') {
      throw new Error('Initialize error: soucerId must be provided');
    }

    if (env && env === 'production') {
      this.env = env;
    }

    this.token = token;
    this.sourceId = sourceId;
  }

  deepLink(): DeepLinkResource {
    return DeepLinkResource.getInstance(this.token, this.sourceId, this.env);
  }

  offer(): OfferResource {
    return OfferResource.getInstance(this.token, this.sourceId, this.env);
  }

  product(): ProductResource {
    return ProductResource.getInstance(this.token, this.sourceId, this.env);
  }

  category(): CategoryResource {
    return CategoryResource.getInstance(this.token, this.sourceId, this.env);
  }

  coupon(): CouponResource {
    return CouponResource.getInstance(this.token, this.sourceId, this.env);
  }
}

export { Lomadee };
