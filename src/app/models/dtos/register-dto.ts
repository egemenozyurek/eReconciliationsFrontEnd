import { Company } from "../company-model";
import { RegisterModel } from "../register-model";

export interface RegisterDto {

    userForRegister:RegisterModel;
    company: Company;
}
