import { Component } from '@angular/core';
import { repos } from './Models/repos';
import { GitHubService } from './services/github.service';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  userName: string = "Name expected"
  repos: repos[]=[];
 
  loading: boolean = false;
  errorMessage:any;
 
  constructor(private githubService: GitHubService) {
  }
 
  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.getRepos(this.userName)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.repos = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }
}