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

import {type Client, generateClient} from 'aws-amplify/api';
import * as queries from '../../../../graphql/queries';
import {UserService} from "../../../services/user.service";
import {getCurrentUser} from "aws-amplify/auth";

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

  public client: Client;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(public dialog: MatDialog,
              private partisanService: PartisanService,
              private userService: UserService) {
    this.client = generateClient();
  }

  async ngAfterViewInit() {
    console.log(this.userService.userEmail)
    const variables = {
      filter: {
        email: {
          eq: (await getCurrentUser()).signInDetails?.loginId
        }
      }
    };
    try {
      const  militantResponse = await this.client.graphql({
        query: queries.listMilitants,
        variables: variables,
      });

      console.log(militantResponse.data.listMilitants.items)
      const response = await this.client.graphql({
        query: queries.listPartisans
      });
      this.dataSource.data = response.data.listPartisans.items.map(
        item => new PartisanModel(
          item.nni, `${item.first_name} ${item.last_name}`, item.partisanOfficeId!, item.createdAt
        ))
    } catch (e) {
      console.log('error fetching partisans', e);
    }
    this.dataSource.paginator = this.paginator || null;
    console.log(this.userService.userEmail)
  }

  addPartisan() {
    const dialogRef = this.dialog
      .open(AddPartisanComponent, {minWidth: '300px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      /*this.partisanService.addToMilitant(result as PartisanModel)
        .subscribe(res => {
          this.dataSource.data.push(result)
        })*/
    });
  }
}
