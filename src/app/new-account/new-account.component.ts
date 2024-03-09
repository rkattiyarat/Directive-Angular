import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService] // using providers array to provide the loggingservice
})
export class NewAccountComponent {
 

  constructor(private loggingService: LoggingService, private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // should not create a new instance of the service like below
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);

    // this.loggingService.logStatusChange(accountStatus); //angular will create a new instance of the service for us

  }
}
