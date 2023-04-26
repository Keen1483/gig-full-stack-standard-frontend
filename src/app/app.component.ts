import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gig-fullstack-standard';

  ngOnInit(): void {
    $(document).ready(() => {
      let bodyHeight = $('body').css('height');
      bodyHeight = parseInt(bodyHeight);
      bodyHeight = bodyHeight - ((bodyHeight * 20) / 100);
      $('.container').css('min-height', bodyHeight+'px');
    });
  }
}
