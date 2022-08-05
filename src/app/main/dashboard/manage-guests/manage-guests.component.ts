import { Component, Input, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { userListService } from 'app/services/user-list-service';
import { ToastrserviceService } from '../../../services/toastrservice.service';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ColumnMode, DatatableComponent, id, SelectionType } from '@swimlane/ngx-datatable';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-manage-guests',
  templateUrl: './manage-guests.component.html',
  styleUrls: ['./manage-guests.component.scss']
})
export class ManageGuestsComponent implements OnInit {
  @ViewChild('closebutton')
  closebutton!: { nativeElement: { click: () => void; }; };

  private tempData = [];
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public expanded = {};

  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  private exportCSVData: [] | any;
  @ViewChild(DatatableComponent) table: DatatableComponent | any;
  @ViewChild('tableRowDetails') tableRowDetails: any;

  cols = [{ name: '_id' }, { name: 'fullName' }, { name: 'email' }, { name: 'phone' }, { name: 'gender' }, { name: 'dob' }, { name: 'profile_image' }, { name: 'city' }, { name: 'country' }];
  // ['ID', 'userId', 'businessId', 'businessName', 'businessType', 'businessCategory', 'country_name', 'state_name', 'city_name', 'area_name', 'expectedOrders', 'contactPerson', 'contactEmail', 'kycStatus', 'agentCode'],
  userList: any;
  rows: any;
  userIdList: any;
  blockedUserID: any;
  data = [];
  filteredData = [];
  formula: string = 'BusinesslList';
  adminToken: any;
  imageName: any
  imageUrl: any;
  userID: any;
  employee: any;
  blockUsers: any;
  blockUserId: any;
  uniqueUser: any;
  userInfo: any;

  constructor(private _liveAnnouncer: LiveAnnouncer, private router: Router, private modalService: NgbModal, config: NgbModalConfig, private toastr: ToastrserviceService, private httpClient: HttpClient, private userListService: userListService) {
    this.adminToken = localStorage.getItem('token');
    config.backdrop = 'static';

  }
  public contentHeader: object;
  ngOnInit(): void {

    this.contentHeader = {
      headerTitle: 'Manage Guests',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Manage Guests',
            isLink: true,
            link: 'dashboard/manage-guests'
          }
        ]
      }
    }
  }
  getLiveUserList() {

    this.userListService.getUserList().subscribe((data: any) => {
      this.userList = data.items;
      this.rows = data.items;
      this.tempData = this.rows;
      this.kitchenSinkRows = this.rows;
      this.data = this.userList;
      this.filteredData = this.userList;

    });
  }

  filterUpdate(event: any) {
    let val = event.target.value.toLowerCase();
    let colsAmt = this.cols.length;
    let keys = Object.keys(this.userList[0]);

    this.data = this.filteredData.filter(function (item: any): | any {
      for (let i = 0; i < colsAmt; i++) {
        if (item[keys[i]]?.toString().toLowerCase().indexOf(val) !== -1 || !val) {
          return true;
        }
      }
    });
    this.kitchenSinkRows = this.data;
    this.table.offset = 0;

  }
  onSelect({ selected }: any) {
    this.exportCSVData = selected;
    // this.selected.splice(0, this.selected.length);
    //this.selected.push(...selected);
  }

  downloadCSV(event: any) {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: '',
      useBom: true,
      noDownload: false,
      headers: ['ID', 'fullName', 'email', 'phone', 'gender', 'profile_image', 'city', 'country'],
    }



    if (this.exportCSVData == undefined) {
      const fileInfo = new ngxCsv(this.tempData, this.formula, options);
      this.getLiveUserList()

    } else {
      const fileInfo = new ngxCsv(this.exportCSVData, this.formula, options);
      this.getLiveUserList()
      this.exportCSVData = undefined;


    }
    // event.selected = [];
    // this.selected = [];
  }
  onActivate(event: any) {
    // console.log('Activate Event', event.type);
  }
  // modal Basic
  modalOpen(modalBasic, modal: any, data: any) {
    this.modalService.open(modalBasic, {
      windowClass: 'modal'

    });
    this.blockUserId = data._id;
    modal?.dismiss();
    console.log('blockUsersId', this.blockUserId);
  }
  // blockUsersById(data: any) {
  //   this.blockUserId = data._id;
  //   console.log('blockUsersId', this.blockUserId);
  // }
  blockUser(modal: any) {
    this.userListService.blockByUser(this.blockUserId).subscribe((data: any) => {
      this.blockUsers = data;
      console.log("+++++++++++++++++", data);
      if (data.status == true) {

        this.toastr.showSuccess(data.message, "Success!")
        modal?.close();
        this.getLiveUserList()
        this.router.navigateByUrl('/dashboard/user-list');
        this.closebutton?.nativeElement.click();
      }
      else {
        this.toastr.showError(data.message, "Error!")
        this.getLiveUserList()

      }
    });
  }
}
