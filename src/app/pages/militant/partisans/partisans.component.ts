import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddPartisanComponent} from "../add-partisan/add-partisan.component";
import {PartisanService} from "../../../services/partisan.service";
import {PartisanModel} from "../../../datamodels/partisan.model";

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-partisans',
  styleUrl: 'partisans.component.css',
  templateUrl: 'partisans.component.html',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,
    MatInputModule, MatTable,
    MatPaginatorModule, MatTableModule, MatIcon, MatButton, RouterLink],
})
export class PartisansComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'center', 'office', 'nni'];
  dataSource = new MatTableDataSource<PartisanModel>();

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(public dialog: MatDialog, private partisanService: PartisanService) {
  }

  ngAfterViewInit() {
    this.partisanService.findUserPartisans().subscribe(
      partisanList => this.dataSource.data = partisanList
    )
    this.dataSource.paginator = this.paginator || null;
  }

  openPartisanUI() {
    const dialogRef = this.dialog
      .open(AddPartisanComponent, {minWidth: '300px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.partisanService.addToMilitant(result as PartisanModel)
        .subscribe( res => {
          this.dataSource.data.push(result)
        })
    });
  }
}
