import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import uniqBy from 'lodash/uniqBy';

@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.css']
})
export class RouteParamComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //alert(1);
    //alert(this.route.snapshot.params['prm']);

   const arr = [2,2,3,3,4,4,5];
   const arr2 = uniqBy(arr, (item) => {
      return item;
   });
   alert(arr2.length);
   alert(JSON.stringify(arr2));
  }

}
