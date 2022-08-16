import { Company } from "../company-model";

export interface UserRelationShipDto {
    id: number;
    adminUserName: string;
    adminMail: string;
    adminAddedAt: string;
    adminIsActive: string;
    userUserId: number;
    userUserName: string;
    userMail: string;
    userAddedAt: string;
    userMailValue: string;
    userIsActive: string;
    companies: Company[];
}
