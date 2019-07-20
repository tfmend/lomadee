import { LomadeeResource } from '../resources';
import { LomadeeRequest, OfferResponse } from '../../model';

export class OfferResource extends LomadeeResource {
  static getInstance(token: string, sourceId: string): OfferResource {
    if (!OfferResource.instance) {
      OfferResource.instance = new OfferResource(token, sourceId);
    }
    return OfferResource.instance;
  }

  private static instance: OfferResource;

  private operation = '_bestsellers';

  private constructor(token: string, sourceId: string) {
    super(token, sourceId);
  }

  bestSellers = (storeId: string, size: number = 12, page: number = 1) => {
    this.operation = '_bestsellers';
    return this.call({
      queryParams: {
        page,
        size,
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  search = (
    keyword: string,
    categoryId: string,
    storeId: string,
    size: number = 12,
    page: number = 1,
    sort: string = 'rating',
  ) => {
    this.operation = '_search';
    if (!keyword || keyword === '') {
      return Promise.reject('keyword must be provided');
    }
    return this.call({
      queryParams: {
        page,
        size,
        sort,
        categoryId,
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  id = (offerId: string, storeId: string) => {
    if (!offerId || offerId === '') {
      return Promise.reject('offerId must be provided');
    }
    if (!storeId || storeId === '') {
      return Promise.reject('storeId must be provided');
    }
    this.operation = `_id/${offerId}`;
    return this.call({
      queryParams: {
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  category = (categoryId: string, storeId: string, size: number = 12, page: number = 1, sort: string = 'rating') => {
    if (!categoryId || categoryId === '') {
      return Promise.reject('categoryId must be provided');
    }
    this.operation = `_category/${categoryId}`;
    return this.call({
      queryParams: {
        size,
        page,
        sort,
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  product = (productId: string, storeId: string, size: number = 12, page: number = 1, sort: string = 'rating') => {
    if (!productId || productId === '') {
      return Promise.reject('productId must be provided');
    }
    this.operation = `_product/${productId}`;
    return this.call({
      queryParams: {
        size,
        page,
        sort,
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  store = (storeId: string, categoryId: string, size: number = 12, page: number = 1, sort: string = 'rating') => {
    if (!storeId || storeId === '') {
      return Promise.reject('storeId must be provided');
    }
    this.operation = `_store/${storeId}`;
    return this.call({
      queryParams: {
        size,
        page,
        sort,
        categoryId,
      },
      sourceId: this.sourceId,
    });
  };

  protected URI(): string {
    return `offer/${this.operation}`;
  }

  private call = (request: LomadeeRequest) => {
    return new Promise((resolve, reject) => {
      this.get<OfferResponse>(request).then((response: OfferResponse) => resolve(response));
    });
  };
}
