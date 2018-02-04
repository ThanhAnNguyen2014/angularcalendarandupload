import { Component, OnInit } from '@angular/core';
import { ImportService } from './import.service';
declare var $:any;
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
  providers: [ImportService]
})
export class ImportComponent implements OnInit {

  showlist: boolean;
  listExpenses: string[];
  data_list: any;
  hashmap: {} = {};

  constructor(private apiserv: ImportService) {
    this.apiserv = apiserv;
  }

  ngOnInit() {
  }
  fileUploadListener($event: any): void {
    this.parseCSV($event.target);
  }
  calculateTotalPerMonth(): void {
    let self = this;
    for (let i = 1; i < self.data_list.length; i++) {
      if (self.hashmap[self.data_list[i][0].split('/')[0]] !== undefined) {
        self.hashmap[self.data_list[i][0].split('/')[0]] += Number(self.data_list[i][5].replace(",", "")) + Number(self.data_list[i][5].replace(",", ""));
      } else {
        self.hashmap[self.data_list[i][0].split('/')[0]] = Number(self.data_list[i][5].replace(",", "")) + Number(self.data_list[i][7].replace(",", ""));
      }
    }

    self.showlist = true;

    console.log(self.hashmap);
    self.data_list = Object.keys(self.hashmap).map(function (key) { return " Month: " + key + " Total Cost: " + self.hashmap[key].toFixed(2); });
    console.log(self.data_list);
  }

  parseCSV(csv: any): void {
    var file: File = csv.files[0];
    var self = this;
    var reader: FileReader = new FileReader();

    reader.readAsText(file);
    reader.onloadend = function (e) {
      var csvData = reader.result;
      var data = $.csv.toArrays(csvData);
      console.log(data)
      if (data && data.length > 0) {
        self.data_list = data;
        console.log('Imported -' + data.length + '- rows successfully!');
        self.apiserv.updateDatabase(data).subscribe(
          data => {
            console.log(self.data_list);
            //self.calculateTotalPerMonth();
            console.log("DATA block: " + JSON.stringify(data));
          },
          error => console.log("ERROR block: " + JSON.stringify(error)),
          () => console.log('finished')
        );
      } else {
        console.log('No data to import!');
      }
    };

    reader.onerror = function () {
      console.log('Unable to read ' + file);
    };
  }
}
