export class Utils {
  static queryParamsString = (sourceId: string, queryParams: any) => {
    return `sourceId=${sourceId}&${Utils.serialize(queryParams)}`;
  };

  private static serialize = (obj: any) => {
    const params = [];
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop) && obj[prop]) {
        params.push(`${encodeURIComponent(prop)}=${encodeURIComponent(obj[prop])}`);
      }
    }
    return params.join('&');
  };
}
