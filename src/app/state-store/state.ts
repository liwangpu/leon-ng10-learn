export const storeKey: string = 'store';

export interface IStore {
    id: string;
    user: { [key: string]: any };
    icon:string;
    remark: string;
}