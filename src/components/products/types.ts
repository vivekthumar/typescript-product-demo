
export interface product {
	title: string;
  desc: string;
  image: string;
	price: number;
  quantity: number;
}


export interface ProductResponse {
	data: product[];
}

