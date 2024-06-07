import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {PartisanService} from "../../../services/partisan.service";
import {PartisanModel} from "../../../datamodels/partisan.model";
import {NgIf} from "@angular/common";
import {MilitantService} from "../../../services/militant.service";

@Component({
  selector: 'app-add-partisan',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatIcon,
    MatSuffix,
    FormsModule,
    NgIf
  ],
  templateUrl: './add-partisan.component.html',
  styleUrl: './add-partisan.component.css'
})
export class AddPartisanComponent {

  constructor(private partisanService: PartisanService,
              private militantService: MilitantService,
              public dialogRef: MatDialogRef<AddPartisanComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PartisanModel) {
  }

  nni: string = "";
  foundPartisan!: PartisanModel;

  findPartisan() {
    if (this.nni) {
      this.partisanService.findByNni(this.nni).subscribe(
        partisan => this.foundPartisan = partisan!,
      )
    }
  }

  addPartisanToConnectedMilitant() {
    this.militantService.addPartisan(this.foundPartisan as PartisanModel)
      .subscribe(res => {
        this.dialogRef.close()
      })
  }

  closeWithoutAdding() {
    this.dialogRef.close()
  }
}
