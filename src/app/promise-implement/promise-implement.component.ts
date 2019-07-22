import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-implement',
  templateUrl: './promise-implement.component.html',
  styleUrls: ['./promise-implement.component.css']
})
export class PromiseImplementComponent implements OnInit {

  private myPromise: any;
  public inp = 'aaa';

  constructor() { }

  ngOnInit() {

    this.myPromise = function(action) {

      const callbackArr: any[] = [];

       this.then =  function(exec) {
        alert("then1")
        callbackArr.push(exec);
        return this;
       };


       this.resolve = function() {
        alert("yes");
        callbackArr.forEach((exec) => {
          alert("yes2");
          exec();
        });
      };

      this.reject = function() {

      };

      action(this.resolve.bind(this), this.reject.bind(this));

    };


    this.myPromise.all = function(promiseArr) {

    };
  }

  isGreaterThen5() {

    const x = 9;
    return new this.myPromise((resolve , reject) => {
      if (x > 5) {
        resolve();
      } else {
        reject();
      }
    });
  }





  doClick() {

    alert(this.inp);
    this.isGreaterThen5().then(() => {
      alert("greater");
    },
    () => {
      alert("smaller");
    });
  }


}
