import { Component, OnInit ,LOCALE_ID, Inject  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  

  ngOnInit() {
  }
  languageList = [   
    { code: 'ar', label: 'Arabic' },   
     { code: 'en', label: 'English' }
    ]; 
       constructor(@Inject(LOCALE_ID) protected localeId: string) { }
}

