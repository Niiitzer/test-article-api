interface IArticleQuery {
  designation?: string;
  reference?: string;
  family?: string;
  category?: string;
  manufacturer?: string;
  caliber?: string;
  storage_unity?: string;
  weight?: number;
  height?: number;
}

interface IArticle {
  id: number;
  designation: string;
  reference: string;
  family: string;
  category: string;
  manufacturer: string;
  manufacturer_price: number;
  caliber: string;
  storage_unity: string;
  weight: number;
  height: number;
  ean: string;
  details: string;
  short_term_rental: number;
  management_fees: number;
  createdAt: Date;
}

export { IArticle, IArticleQuery };
