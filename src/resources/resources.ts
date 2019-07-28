import fetch from 'node-fetch';
import { LomadeeRequest } from '../model';
import { Utils } from '../utils';

export abstract class LomadeeResource {
  private static SANDBOX_BASE_URL = 'http://sandbox-api.lomadee.com/v2';
  private static PRODUCTION_BASE_URL = 'https://api.lomadee.com/v2';

  protected token: string;
  protected sourceId: string;
  protected env: string;

  constructor(token: string, sourceId: string, env: string) {
    this.token = token;
    this.sourceId = sourceId;
    this.env = env;
  }

  protected get<T>(request: LomadeeRequest): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const baseurl =
        this.env === 'production' ? LomadeeResource.PRODUCTION_BASE_URL : LomadeeResource.SANDBOX_BASE_URL;
      fetch(`${baseurl}/${this.token}/${this.URI()}?${Utils.queryParamsString(request.sourceId, request.queryParams)}`)
        .then(response => response.json())
        .then(body => {
          resolve(body as T);
        })
        .catch(err => reject(err));
    });
  }

  protected abstract URI(): string;
}
