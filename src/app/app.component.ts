import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastrService: ToastrService) {}

  public showSuccess() {
    this.toastrService.success('Hello world!', 'Toastr fun!');
  }
}
