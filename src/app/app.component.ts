import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'desafio';
 
  constructor(private http: HttpClient) {}
  
  inputFileChange(event : any) {
    
    const files = <FileList> event.target.files;
    const formData = new FormData();
    for(let i = 0 ; i < files.length; i++){
   
        const xml = event.target.files[i];
  
        formData.append('obj', xml);
        
      }
        
        this.http.post('http://localhost:8080/desafio', formData).subscribe(resposta => console.log('Update OK!!'));
  }
}
