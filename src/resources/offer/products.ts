import { LomadeeResource } from '../resources';
import { LomadeeRequest, ProductResponse } from '../../model';

export class ProductResource extends LomadeeResource {
  static getInstance(token: string, sourceId: string, env: string): ProductResource {
    if (!ProductResource.instance) {
      ProductResource.instance = new ProductResource(token, sourceId, env);
    }
    return ProductResource.instance;
  }

  private static instance: ProductResource;

  private operation = '_bestsellers';

  private constructor(token: string, sourceId: string, env: string) {
    super(token, sourceId, env);
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
    filters: string,
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
        filters,
        categoryId,
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  category = (
    categoryId: string,
    storeId: string,
    filters: string,
    size: number = 12,
    page: number = 1,
    sort: string = 'rating',
  ) => {
    if (!categoryId || categoryId === '') {
      return Promise.reject('categoryId must be provided');
    }
    this.operation = `_category/${categoryId}`;
    return this.call({
      queryParams: {
        size,
        page,
        sort,
        filters,
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  id = (productId: string, storeId: string) => {
    if (!productId || productId === '') {
      return Promise.reject('productId must be provided');
    }
    this.operation = `_id/${productId}`;
    return this.call({
      queryParams: {
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  protected URI(): string {
    return `product/${this.operation}`;
  }

  private call = (request: LomadeeRequest) => {
    return new Promise((resolve, reject) => {
      this.get<ProductResponse>(request).then((response: ProductResponse) => resolve(response));
    });
  };
}
