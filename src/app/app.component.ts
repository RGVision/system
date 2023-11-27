import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { columnDefs, columnDefs2, columnDefs3, columnDefs4 } from './Column-Def/IColumnDef';
import { CommonGridComponent } from "./common-grid/common-grid.component";
import { CommonListComponent } from "./common-list/common-list.component";
import { CommongridData } from './grid-data/grid-data';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, CommonGridComponent, CommonListComponent]
})
export class AppComponent {

  title = 'system';

@Input() columnDefs = columnDefs;
@Input() columnDefs2 = columnDefs2;
@Input() columnDefs3 = columnDefs3;
@Input() columnDefs4 = columnDefs4;
@Input() gridData = CommongridData;
@Input() list: number | string = 1;
@Input() grid: number | string = 1;
datatype='grid';

changelist() {
  this.datatype ='list';
  }
  changegrid() {
  this.datatype = 'grid';
  }
}
