import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { columnDefs, columnDefs2 } from './Column-Def/IColumnDef';
import { CommonGridComponent } from "./common-grid/common-grid.component";
import { CommongridData } from './grid-data/grid-data';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, CommonGridComponent]
})
export class AppComponent {
  title = 'system';

@Input() columnDefs = columnDefs;
@Input() columnDefs2 = columnDefs2;
@Input() gridData = CommongridData;


}
