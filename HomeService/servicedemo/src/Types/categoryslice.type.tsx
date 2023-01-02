export interface category{
    _id:string,
    servicename:string,
    url:string,
    decription:string
}
export interface subcategory{
    _id:string,
    serviceid:string,
    servicename:string,
    url:string,
    decription:string,
    charge:string,
    mainservice:string
}
export interface editcategory{
    data:category,
    edit:boolean
}
export interface editsubcategory{
    data:subcategory,
    edit:boolean
}
export interface deletecategory{
    data:category,
    delete:boolean
}
export interface deletesubcategory{
    data:subcategory,
    delete:boolean
}
export interface getcategorybyId{
    servicename:string
}
