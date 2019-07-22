import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';


@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {


  constructor(private http: Http) { }

   YOUTUBE_API_KEY = 'AIzaSyDgbvmqeu4J5tY74Q-qDyqpYKDRJEZHHR0';
   YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

   items: any[]  = [];

  ngOnInit() {

   /*
    http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?

    https://www.googleapis.com/youtube/v3/search?q=aviv&key=AIzaSyDgbvmqeu4J5tY74Q-qDyqpYKDRJEZHHR0&part=snippet&type=video&maxResults=10

    q=${query}`,
    `key=${YOUTUBE_API_KEY}`,
    `part=snippet`,
    `type=video`,
    `maxResults=10`

    https://www.npmjs.com/package/ngx-youtube-player
  */

  }

  doRequest() {
    this.http.get('https://www.googleapis.com/youtube/v3/search?q=john&key=AIzaSyDgbvmqeu4J5tY74Q-qDyqpYKDRJEZHHR0&part=snippet&type=video').subscribe((res) => {
      console.log(res.json());
      //alert(res.json().items.length);
      //alert(res.json().items[0].id.videoId);
      //alert(res.json().items[0].snippet.title);
      //alert(res.json().items[0].snippet.thumbnails.default.url);
      this.items = res.json().items;
      //alert(JSON.stringify(res.json()));
    });
  }


}
