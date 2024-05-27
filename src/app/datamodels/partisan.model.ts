import {MilitantModel} from "./militant.model";

class OfficeModel {
  constructor(commune: string, label: string, center: string) {
    this.commune = commune
    this.label = label
    this.center = center
  }
  commune: string
  label: string
  center: string
}

export class PartisanModel {

  constructor(nni: string, name: string, center: string, office: OfficeModel) {
    this.nni = nni
    this.fullName = name
    this.office = office
    this.center = center
  }

  nni: string
  fullName: string
  center: string
  office: OfficeModel
  representing?: MilitantModel
}
