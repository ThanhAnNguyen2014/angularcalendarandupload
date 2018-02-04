import { Component, OnInit, AfterViewInit } from '@angular/core';
//import * as $ from 'jquery';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {


  constructor() {
  }

  ngOnInit() {
    // $('#datepicker').datepicker({
    //   format: "dd/mm/yyyy",
    //   todayHighlight: true,
    //   beforeShowDay: function (date) {
    //     var d = date;
    //     var curr_date = d.getDate();
    //     var curr_month = d.getMonth() + 1; //Months are zero based
    //     var curr_year = d.getFullYear();
    //     var formattedDate = curr_date + "/" + curr_month + "/" + curr_year
    //     var active_dates = ["5/2/2018", "4/2/2018"];
    //     var active_dates_2 = ["9/2/2018", "14/2/2018"];
    //     if ($.inArray(formattedDate, active_dates) != -1) {
    //       return [true, "event", 'Tooltip text'];
    //     }
    //     if ($.inArray(formattedDate, active_dates_2) != -1) {
    //       return [true, "event2", 'Tooltip text'];
    //     }
    //     return [true, '', ''];
    //   },

    // });

    // option 2
    var events = [
      { Title: "Five K for charity", Date: new Date("02/13/2018"), link: 'google.com' },
      { Title: "Dinner", Date: new Date("02/14/2018"), link: 'facebook.com' },
      { Title: "Meeting with manager", Date: new Date("03/01/2018"), link: 'youtube.com' }
    ];
    $('#datepicker').datepicker({
      todayHighlight: true,
      beforeShowDay: function (date) {
        var result = [true, '', null];
        var matching = $.grep(events, function (event) {
          return event.Date.valueOf() === date.valueOf();
        });
        if (matching.length) {
          result = [true, 'event', ''];
        }
        return result;
      },
      onSelect: function (dateText) {
        var date,
          selectedDate = new Date(dateText),
          i = 0,
          event = null;
        while (i < events.length && !event) {
          date = events[i].Date;
          if (selectedDate.valueOf() === date.valueOf()) {
            event = events[i];
          }
          i++;
        }
        if (event) {
          alert(event.link);
        }
      }
    });

  }
  ngAfterViewInit() {
    //http://jsfiddle.net/Zrz9t/1151/
  }
}
