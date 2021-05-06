import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  posts: any[]
  form: FormGroup;
  constructor(private httpClient:HttpClient,private fb:FormBuilder) { 
    this.form = this.fb.group({
      name:'',
      email:''
    })
  }

  ngOnInit(): void {
    this.httpClient.get('http://codecamp3-simple-api.herokuapp.com/api/posts').subscribe(result =>{
      this.posts = result as any[]
    })
  }

}
