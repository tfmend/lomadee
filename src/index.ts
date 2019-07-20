import { DeepLinkResource } from './resources/offer/deeplink';
import { OfferResource } from './resources/offer/offers';
import { ProductResource } from './resources/offer/products';
import { CategoryResource } from './resources/offer/categories';

class Lomadee {
  private token: string;
  private sourceId: string;

  /**
   *
   * @param token Lomadee App-Token
   * @param sourceId Affiliated ID
   */
  constructor(token: string, sourceId: string) {
    if (!token || token === '') {
      throw new Error('Initialize error: App-Token must be provided');
    }

    if (!sourceId || sourceId === '') {
      throw new Error('Initialize error: soucerId must be provided');
    }

    this.token = token;
    this.sourceId = sourceId;
  }

  deepLink(): DeepLinkResource {
    return DeepLinkResource.getInstance(this.token, this.sourceId);
  }

  offer(): OfferResource {
    return OfferResource.getInstance(this.token, this.sourceId);
  }

  product(): ProductResource {
    return ProductResource.getInstance(this.token, this.sourceId);
  }

  category(): CategoryResource {
    return CategoryResource.getInstance(this.token, this.sourceId);
  }
}

export { Lomadee };
