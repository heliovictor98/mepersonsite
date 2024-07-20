import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-title-name',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './title-name.component.html',
  styleUrl: './title-name.component.scss'
})
export class TitleNameComponent {

}
