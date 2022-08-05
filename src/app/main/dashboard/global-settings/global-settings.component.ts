import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-settings',
  templateUrl: './global-settings.component.html',
  styleUrls: ['./global-settings.component.scss']
})
export class GlobalSettingsComponent implements OnInit {

  constructor() { }

  public contentHeader: object;
  ngOnInit(): void {

    this.contentHeader = {
      headerTitle: 'Global Settings',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Global Settings',
            isLink: true,
            link: 'dashboard/global-settings'
          }
        ]
      }
    }
  }
}
