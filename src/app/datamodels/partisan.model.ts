import {MilitantModel} from "./militant.model";
import {OfficeModel} from "./officeModel";

export class PartisanModel {

  constructor(nni: string, name: string, center: string,
              office: OfficeModel, numberOnOfficeRegister: number) {
    this.nni = nni
    this.fullName = name
    this.office = office
    this.center = center
    this.numberOnOfficeRegister = numberOnOfficeRegister
  }

  nni: string
  fullName: string
  center: string
  office: OfficeModel
  numberOnOfficeRegister?: number
  representing?: MilitantModel
}
