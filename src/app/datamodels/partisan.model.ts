import {MilitantModel} from "./militant.model";

export class PartisanModel {

  constructor(nni: string, name: string, center: string, office: string) {
    this.nni = nni
    this.name = name
    this.office = office
    this.center = center
  }
  nni: string
  name: string
  center: string
  office: string
  commune?: string
  militant?: MilitantModel
}
