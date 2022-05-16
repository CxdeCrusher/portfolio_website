import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number;


  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {}

  changeLanguage(language: string): void {
    localStorage.setItem('language', language);
  }
}
