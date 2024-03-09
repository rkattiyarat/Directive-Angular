import { Component } from '@angular/core';
import { UserServicesService } from './userServices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserServicesService]
})
export class AppComponent {



}
