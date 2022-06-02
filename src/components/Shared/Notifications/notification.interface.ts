export interface INotification {
    id: string;
    title: string;
    message?: string;
    type: string;
    allowDuplicate?: boolean;
    maxNotifs?: number;
    dissmiss?: {
        duration: number;
    };
}

export type TDispatch = {
    type: string;
    payload: any;
};
