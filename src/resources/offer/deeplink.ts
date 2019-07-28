import { LomadeeResource } from '../resources';
import { DeepLinkResponse } from '../../model';

export class DeepLinkResource extends LomadeeResource {
  static getInstance(token: string, sourceId: string, env: string): DeepLinkResource {
    if (!DeepLinkResource.instance) {
      DeepLinkResource.instance = new DeepLinkResource(token, sourceId, env);
    }
    return DeepLinkResource.instance;
  }

  private static instance: DeepLinkResource;

  private constructor(token: string, sourceId: string, env: string) {
    super(token, sourceId, env);
  }

  /**
   *
   * @param url Url from Lomadee partner
   * @param domain deeplink domain. Options:
   *   redir.lomadee.com (default)
   *   compre.vc
   *   acesse.vc
   *   oferta.vc
   */
  create = (url: string | string[], domain: string = 'redir.lomadee.com') => {
    return new Promise((resolve, reject) => {
      if (!url || url.length === 0) {
        reject('url must be passed');
      }

      this.get<DeepLinkResponse>({
        queryParams: {
          domain,
          url,
        },
        sourceId: this.sourceId,
      }).then((response: DeepLinkResponse) => resolve(response));
    });
  };

  protected URI(): string {
    return '/deeplink/_create';
  }
}
