import { LomadeeResource } from '../resources';
import { LomadeeRequest, CategoryResponse } from '../../model';

export class StoreResource extends LomadeeResource {
  static getInstance(token: string, sourceId: string, env: string): StoreResource {
    if (!StoreResource.instance) {
      StoreResource.instance = new StoreResource(token, sourceId, env);
    }
    return StoreResource.instance;
  }

  private static instance: StoreResource;

  private operation = '_all';

  private constructor(token: string, sourceId: string, env: string) {
    super(token, sourceId, env);
  }

  all = (categoryId: string, hasOffer: string) => {
    this.operation = `_all`;
    return this.call({
      queryParams: {
        hasOffer,
        categoryId,
      },
      sourceId: this.sourceId,
    });
  };

  protected URI(): string {
    return `store/${this.operation}`;
  }

  private call = (request: LomadeeRequest) => {
    return new Promise((resolve, reject) => {
      this.get<CategoryResponse>(request).then((response: CategoryResponse) => resolve(response));
    });
  };
}
