import { Pub } from "./Pub";

export interface Member
{
    id: string,
    cin: string,
    name: string,
    createDate: string,
    cv: string,
    type: string,
    pub : Pub[]
}