import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Http, Response} from '@angular/http';
import {IProfileRef, IProfileDetails} from '../interfacess';
import { IYossi } from '../route-param/interfaces';


@Component({
  selector: 'app-ajax-req',
  templateUrl: './ajax-req.component.html',
  styleUrls: ['./ajax-req.component.css'],
})
export class AjaxReqComponent implements OnInit {

  private profileRefArr: IProfileRef[];
  public profileDetails: IProfileDetails;

  constructor(private http: Http) { }

  ngOnInit() {
    this.doRequest();
  }






  //http://duda-api-test.herokuapp.com/profile/

  //https://graph.facebook.com/facebook_user_id/picture?type=square


  doRequest() {


    this.http.get('http://duda-api-test.herokuapp.com/profiles' /*'https://localhost:44339/Home/ar'*/).subscribe((res: Response) => {
      console.log(res.headers);
      const yossiObj =   <IYossi[]>(res.json());
      alert(yossiObj.length);
        //this.profileRefArr = <IProfileRef[]>res.json();
    }, (err) => {
      alert("error");
    });



    const fd = new FormData();
    fd.append('x', 'aabbcc');
    this.http.post('https://localhost:44339/Home/UniqStr', fd).subscribe((res) => {
      alert(res.text());
      //this.profileRefArr = <IProfileRef[]>res.json();
    }, (err) => {
      alert("error");
    });


    //this.http.get('http://duda-api-test.herokuapp.com/profiles').subscribe((res) => {
      //this.profileRefArr = <IProfileRef[]>res.json();
    //});
  }

  personChanged(selPersonId: string) {
    this.http.get(`http://duda-api-test.herokuapp.com/profile/${selPersonId}`).subscribe((res) => {
      this.profileDetails = <IProfileDetails>res.json();
    });
  }

  doLocalJsonRequest() {
    this.http.get('../../assets/dat.json').subscribe((res) => {
      alert(JSON.stringify(res.json()));
    });
  }

}
