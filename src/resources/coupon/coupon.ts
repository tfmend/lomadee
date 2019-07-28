import { LomadeeResource } from '../resources';
import { LomadeeRequest, CouponResponse, CategoryResponse, StoreResponse } from '../../model';

export class CouponResource extends LomadeeResource {
  static getInstance(token: string, sourceId: string): CouponResource {
    if (!CouponResource.instance) {
      CouponResource.instance = new CouponResource(token, sourceId);
    }
    return CouponResource.instance;
  }

  private static instance: CouponResource;

  private operation = '_all';

  private constructor(token: string, sourceId: string) {
    super(token, sourceId);
  }

  all = (categoryId: string = null, storeId: string = null, keyword: string = null): Promise<CouponResponse> => {
    this.operation = '_all';
    return this.call({
      queryParams: {
        categoryId,
        keyword,
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  id = (id: string): Promise<CouponResponse> => {
    if (!id || id === '') {
      return Promise.reject('id must be provided');
    }
    this.operation = `_id/${id}`;
    return this.call({
      queryParams: {
        id,
      },
      sourceId: this.sourceId,
    });
  };

  categories = (storeId: string = null): Promise<CategoryResponse> => {
    this.operation = `_categories`;
    return this.call<CategoryResponse>({
      queryParams: {
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  stores = (categoryId: string = null): Promise<StoreResponse> => {
    this.operation = `_stores`;
    return this.call<StoreResponse>({
      queryParams: {
        categoryId,
      },
      sourceId: this.sourceId,
    });
  };

  protected URI(): string {
    return `coupon/${this.operation}`;
  }

  private call<T>(request: LomadeeRequest): Promise<T> {
    return new Promise((resolve, reject) => {
      this.get<T>(request)
        .then((response: T) => resolve(response))
        .catch(err => reject(err));
    });
  }
}
