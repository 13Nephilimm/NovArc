import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    const links = [
      {
        id: 1,
        name: 'about us',
      },
      {
        id: 2,
        name: 'characters',
      },
      {
        id: 3,
        name: 'game information',
      },
      {
        id: 4,
        name: 'contact',
      },
    ];

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        const currentPath = event.urlAfterRedirects.split('?')[0];
        console.log('Current Path:', currentPath);
      });
  }
}
