/* DeepLink */
export interface DeepLink {
  status: boolean;
  deeplink: string;
  urlOrigin: string;
  message: string;
}

/* Store */
export interface Store {
  id: number;
  name: string;
  thumbnail: string;
  image: string;
  link: string;
  hasOffer: number;
  maxCommission: number;
  events: Event[];
}
export interface Event {
  event: string;
  eventType: string;
  fixedCommission: boolean;
  commission: number;
}

/* Product */
export interface Product {
  id: number;
  name: string;
  shortName: string;
  priceMin: number;
  priceMax: number;
  discount: number;
  thumbnail: Thumbnail;
  userRating: UserRating;
  technicalSpecification: any;
  category: Category;
  hasOffer: number;
  link: string;
}

export interface Coupon {
  id: number;
  description: string;
  code: string;
  discount: number;
  store: Store;
  category: Category;
  vigency: Date;
  link: string;
  new: boolean;
}

/* Offer */
export interface Offer {
  id: string;
  name: string;
  product: any;
  category: Category;
  link: string;
  thumbnail: string;
  price: number;
  discount: number;
  installment: any;
  store: any;
}
export interface Category {
  id: number;
  name: string;
  thumbnail: Thumbnail;
  hasProduct: number;
  filters: Filter[];
  link: string;
}
export interface Thumbnail {
  url: string;
  height: number;
  width: number;
  otherFormats: Thumbnail[];
}
export interface FilterOptions {
  id: string;
  name: string;
}
export interface Filter {
  name: string;
  options: FilterOptions;
}
export interface UserRating {
  comments: number;
  rating: number;
}

/* Request */
export interface LomadeeRequest {
  sourceId: string;
  queryParams: any;
}

/* Responses */
export interface LomadeeResponse {
  requestInfo: RequestInfo;
  pagination: Pagination;
}
export interface Pagination {
  page: number;
  size: number;
  totalSize: number;
  totalPage: number;
}
export interface RequestInfo {
  status: string;
  message: string;
  generatedDate: Date;
}
export interface DeepLinkResponse extends LomadeeResponse {
  deeplinks: DeepLink[];
}
export interface OfferResponse extends LomadeeResponse {
  offers: Offer[];
}
export interface ProductResponse extends LomadeeResponse {
  products: Product[];
}
export interface CategoryResponse extends LomadeeResponse {
  products: Category[];
}
export interface StoreResponse extends LomadeeResponse {
  products: Store[];
}
export interface CouponResponse extends LomadeeResponse {
  coupons: Coupon[];
}
