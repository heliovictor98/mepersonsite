import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { AboutComponent } from "../about/about.component";
import { TitleNameComponent } from "../title-name/title-name.component";
import { ProjectComponent } from "../project/project.component";
import { RodapeComponent } from "../rodape/rodape.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    AboutComponent,
    TitleNameComponent,
    ProjectComponent,
    RodapeComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
