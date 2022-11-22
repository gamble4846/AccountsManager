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
  AttributesDatas:any = [];
  SelectedDatabaseMainID:any = "";
  SelectedAccountID:any = "";

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
    this.SelectedDatabaseMainID = data.DatabaseMainID;
    console.log(data);
    this.TestService.getAccountsList(this.SelectedDatabaseMainID).subscribe((response:any) => {
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

  AccountSelected(data:any){
    this.SelectedAccountID = data.AccountID;
    console.log(data);
    this.TestService.getAttributesData(this.SelectedDatabaseMainID,this.SelectedAccountID).subscribe((response:any) => {
      console.log(response);
      if(response.status == "200"){
        this.AttributesDatas = response.data;
        console.log(this.AttributesDatas);
      }
    })
  }
}
