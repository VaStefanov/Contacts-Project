import { Component, OnInit } from '@angular/core';
import data from '../data/data.json';
import { State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private gridData: any[] = [];
  private data: any[] = data.projects;
  constructor() {
    this.loadMore();
  }

  ngOnInit() {

    this.data.map(x => {
      if (typeof (x.publish_date) === 'string') {
        x.publish_date = new Date(+x.publish_date * 1000)
      }
    });
  }
  private loadMore(): void {
    const next = this.gridData.length;
    this.gridData = [
      ...this.gridData,
      ...this.data.slice(next, next + 10)
    ];
  }
  public state: State = {
    skip: 0,
    take: 5,

  };
}
