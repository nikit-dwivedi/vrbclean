import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-rez-api',
  templateUrl: './owner-rez-api.component.html',
  styleUrls: ['./owner-rez-api.component.scss']
})
export class OwnerRezAPIComponent implements OnInit {

  constructor() { }

  public contentHeader: object;
  ngOnInit(): void {

    this.contentHeader = {
      headerTitle: 'OwnerRez API',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'OwnerRez API',
            isLink: true,
            link: 'dashboard/ownerRez-API'
          }
        ]
      }
    }
  }

}
