export interface Recipe {
    _id         : string;
    title       : string;
    ingredients : string;
    preparation : string;
    menu        : string;
    file?       : string;
}