import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  fileName = '';

  dataSource= [
    {position:1,current: 'oxygen', suggested: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position:2,current: 'oxygen', suggested: 'Helium', weight: 4.0026, symbol: 'He'},
    {position:3,current: 'oxygen', suggested: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position:4,current: 'oxygen', suggested: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    // {position:5,current: 'oxygen', suggested: 'Boron', weight: 10.811, symbol: 'B'},
    // {position:6,current: 'oxygen', suggested: 'Carbon', weight: 12.0107, symbol: 'C'},
    // {position:7,current: 'oxygen', suggested: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    // {position:8,current: 'oxygen', suggested: 'Oxygen', weight: 15.9994, symbol: 'O'},
    // {position:9,current: 'oxygen', suggested: 'Fluorine', weight: 18.9984, symbol: 'F'},
  ];
  displayedColumns: string[] = ['position','current', 'suggested'];
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('thumbnail', file);
      console.log('formdata',formData)
      console.log('filename',this.fileName)
      // const upload$ = this.http.post('/api/thumbnail-upload', formData);

      // upload$.subscribe();
    }
  }
}
