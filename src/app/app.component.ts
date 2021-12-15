import { Component } from '@angular/core';
import { LogonComponent } from './home/logon/logon.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogonComponent],
})
export class AppComponent {
  title = 'segredo';
}
