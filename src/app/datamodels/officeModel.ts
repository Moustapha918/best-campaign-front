export class OfficeModel {
  constructor(commune: string, label: string, center: string) {
    this.commune = commune
    this.label = label
    this.center = center
  }

  commune: string
  label: string
  center: string
}
