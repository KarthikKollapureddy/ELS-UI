import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule, MatPseudoCheckboxModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule, MatSelectionList} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    MatCommonModule,
    MatCheckboxModule,
    MatListModule,
    MatSelectModule,
   
   
  ]
})
export class MaterialModule { }
