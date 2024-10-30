import productDetailBuy from './product-detail-buy.html?raw';

export default {
	title: 'Angular',
	parameters: { layout: 'fullscreen' },
};

export const ProductDetailBuy = () => {
	return productDetailBuy;
};

ProductDetailBuy.parameters = {
	disableCustomLayout: false,
};
