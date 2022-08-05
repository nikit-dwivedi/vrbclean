import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class userListService {

  private apiUrl = environment.apiUrl;
  //addBlogForm: any;
  userInfo: any
  adminToken: any
  constructor(private http: HttpClient) {
    this.adminToken = localStorage.getItem('token');
    // console.log(this.adminToken)
  }


  Header = () => {
    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', `Bearer ${JSON.parse(localStorage.getItem('token')) || '{}'} `)
    //  console.log(headers)
    return { headers };
  }
  // login
  login(body: any) {

    return this.http.post<any>(this.apiUrl + '/admin/login', body).pipe(map((user: any) => {
      let tokenstring= user.items;
      // console.log(tokenstring);
      
      localStorage.setItem('token', tokenstring)
    // console.log(JSON.parse( user.items) || '{}');
// console.log("=========================",user);
      
      return user;
    }))

  }
  // register


  // retail list
  getUserList() {
    return this.http.get<any>(this.apiUrl + '/user/allUser', this.Header()).pipe(map((list: any) => {
      // console.log(list);

      return list
    }))
  }

  // retail list
  getPayoutList() {
    return this.http.get<any>(this.apiUrl + '/payout', this.Header()).pipe(map((list: any) => {
      // console.log(list);

      return list
    }))
  }

  addGift(formData: any){
    return this.http.post<any>(this.apiUrl + '/gift', formData).pipe(map((addgifts: any) => {
      // console.log('creatBlogs', addgifts);
      return addgifts;
    }))
  }
  getGiftList(){
    return this.http.get<any>(this.apiUrl + '/gift', this.Header()).pipe(map((list: any) => {
      // console.log(list);

      return list
    }))
  }
 // edit gift
  UpdateByIdGift(id: any, formData: any) {
    return this.http.post<any>(this.apiUrl + '/gift/edit/' + id, formData, this.Header()).pipe(map((creatGifts: any) => { 
      // console.log(creatGifts);
      
      return creatGifts;
    }))
  }
//get user by id
  getUserById(id: any) {
    return this.http.get<any>(this.apiUrl + '/user/admin/uniqueUser/' + id, this.Header()).pipe(map((list: any) => {
      // console.log("salman sir",list);
      
      return list
    }))
  }
  // retail list
  getblockList() {
    return this.http.get<any>(this.apiUrl + '/user/blocked', this.Header()).pipe(map((list: any) => {
      // console.log(list);

      return list
    }))
  }
  //get user by id
  blockByUser(id: any) {
    return this.http.post<any>(this.apiUrl + '/user/status/' + id, {"status":"blocked"}, this.Header()).pipe(map((list: any) => {
      // console.log("salman sir", list);

      return list
    }))
  }

  unBlockByUser(id: any) {
    return this.http.post<any>(this.apiUrl + '/user/status/' + id, { "status": "active" }, this.Header()).pipe(map((list: any) => {
      // console.log("salman sir", list);

      return list
    }))
  }

  //get user by id
  pendingPayoutList(id: any) {
    return this.http.post<any>(this.apiUrl + '/payout/status/' + id, { "status": "accepted" }, this.Header()).pipe(map((list: any) => {
      // console.log("salman sir", list);

      return list
    }))
  }

  rejectPayoutList(id: any) {
    return this.http.post<any>(this.apiUrl + '/payout/status/' + id, { "status": "rejected" }, this.Header()).pipe(map((list: any) => {
      // console.log("salman sir", list);

      return list
    }))
  }
  sucessPayoutList(id: any) {
    return this.http.post<any>(this.apiUrl + '/payout/status/' + id, { "status": "successful" }, this.Header()).pipe(map((list: any) => {
      // console.log("salman sir", list);

      return list
    }))
  }

  /* End for Admin Api */
}
