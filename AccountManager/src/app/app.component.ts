import { Component } from '@angular/core';
import { TestService } from './Services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AccountManager';
  Databases:any = [];
  AccountsList:any = [];

  constructor(private TestService:TestService) { }

  ngOnInit(): void {
    this.TestService.getDatabases().subscribe((response:any) => {
      console.log(response);
      if(response.status == "200"){
        this.Databases = response.data;
      }
    })
  }

  DatabaseSelected(data:any){
    console.log(data);
    this.TestService.getAccountsList(data.DatabaseMainID).subscribe((response:any) => {
      console.log(response);
      if(response.status == "200"){
        this.AccountsList = response.data;
        console.log(this.AccountsList);
      }
    })
  }

  getTagsString(tagDatas:any){
    return tagDatas.map((x:any) => x.TagName).toString();
  }
}
