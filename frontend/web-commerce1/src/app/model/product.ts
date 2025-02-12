export class Product{
    id!:number;
    productName!:string;
    productDescription!:string;
    productPrice!:string;
    productAvailableQuantity!:number;
    productBrand!:ProductBrand;
    productCategory!:ProductCategory;
    product_image_url!:string;
}

export class ProductCategory{
    id!:number;
    categoryName!:string;
    categoryDescription!:string;
    categoryImgSrc!:string;
    superiorCategory!:ProductCategory|null
}

export class ProductBrand{
    id!:number;
    brandName!:number;
}