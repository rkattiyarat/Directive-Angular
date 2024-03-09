import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../userServices.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];


  constructor(private userServices: UserServicesService) {}

  onSetToActive(id: number) {
    this.userServices.setToActive(id);
  }

  ngOnInit() {
    this.users = this.userServices.inactiveUsers;
  }
}
