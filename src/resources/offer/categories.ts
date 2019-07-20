import { LomadeeResource } from '../resources';
import { LomadeeRequest, CategoryResponse } from '../../model';

export class CategoryResource extends LomadeeResource {
  static getInstance(token: string, sourceId: string): CategoryResource {
    if (!CategoryResource.instance) {
      CategoryResource.instance = new CategoryResource(token, sourceId);
    }
    return CategoryResource.instance;
  }

  private static instance: CategoryResource;

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

  search = (keyword: string, storeId: string, hasProduct: string = 'false', size: number = 12) => {
    this.operation = '_search';
    if (!keyword || keyword === '') {
      return Promise.reject('keyword must be provided');
    }
    return this.call({
      queryParams: {
        size,
        hasProduct,
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  all = (storeId: string, hasProduct: string) => {
    this.operation = `_all`;
    return this.call({
      queryParams: {
        hasProduct,
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  id = (categoryId: string, storeId: string) => {
    if (!categoryId || categoryId === '') {
      return Promise.reject('categoryId must be provided');
    }
    this.operation = `_id/${categoryId}`;
    return this.call({
      queryParams: {
        storeId,
      },
      sourceId: this.sourceId,
    });
  };

  protected URI(): string {
    return `category/${this.operation}`;
  }

  private call = (request: LomadeeRequest) => {
    return new Promise((resolve, reject) => {
      this.get<CategoryResponse>(request).then((response: CategoryResponse) => resolve(response));
    });
  };
}
