import { allowedNodeEnvironmentFlags } from "process"

export  interface admin{
    login:boolean,
    Token:string ,
}
export interface user{
    email:string,
    login:boolean,
    Token:string
}
export interface adminRejected{
    mes:string
}
export interface changePassword{
    changepassword:boolean,
    mes:string
}
