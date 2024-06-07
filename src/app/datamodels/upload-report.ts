import {PartisanModel} from "./partisan.model";

export interface UploadReport {
  failedElements: PartisanModel[]
  successElements: PartisanModel[]

}
