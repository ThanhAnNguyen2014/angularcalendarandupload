import { Component, OnInit } from '@angular/core';
import { UploadcsvService } from './uploadcsv.service';
@Component({
  selector: 'app-uploadcsv',
  templateUrl: './uploadcsv.component.html',
  styleUrls: ['./uploadcsv.component.css'],
  providers: [UploadcsvService]
})
export class UploadCsvComponent implements OnInit {

  constructor(private uploadservice: UploadcsvService) { }

  ngOnInit() {
  }
  uploadDatasource(fileInput: any) {
    let file = fileInput.target.files[0];
    let fileName = file.name;
    let payload = {
      file,
    }
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.uploadservice.uploadDatasource(formData)
      .subscribe(
      response => {
        console.log('UPLOADING success');
      },
      error => {
        console.log('error', error)
      });
  }
}
