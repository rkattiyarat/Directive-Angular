import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../userServices.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private userServices: UserServicesService) {

  }
 

  onSetToInactive(id: number) {
    this.userServices.setToInactive(id);
  }

  ngOnInit() {
   this.users = this.userServices.activeUsers;
  }
}
