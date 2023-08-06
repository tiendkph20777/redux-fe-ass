export interface Iproducts {
    id: number | string,
    name: string,
    price: number,
    images: string,
    details: string,
    categoryId: number
    quantity: number
}


export interface ICategories {
    id: number | string,
    name: string,
}


export interface IUser {
    id: number,
    name: string,
    password: string,
    image?: string,
    email: string,
    tel?: number
}

export interface ICart {
    id: number;
    products: (Iproducts
        // & { quantity: number }
    )[];
    // user: IUser;
}
