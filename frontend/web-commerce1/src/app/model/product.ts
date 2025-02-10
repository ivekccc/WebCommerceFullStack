export class Product{
    id!:number;
    productName!:string;
    productDescription!:string;
    productPrice!:string;
    productAvailableQuantity!:number;
    productBrand!:any;
    productCategory!:any;
    product_image_url!:string;
}

export class ProductCategory{
    id!:number;
    categoryName!:string;
    categoryDescription!:string;
    superiorCategory!:ProductCategory
}

export class ProductBrand{
    id!:number;
    brandName!:number;
}