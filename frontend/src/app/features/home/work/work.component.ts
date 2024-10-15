import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../services/github.service';
import { Repository } from '../../../models/repository';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent implements OnInit {
  repos: Repository[] = [];
  reqIds: { [key: number]: string } = {
    859462770: '14f9f98a-0ee2-4807-8a7d-75c6745a8a0c',
    282156279: '3bf45400-cdee-11ea-8b89-2912d1a18fe8',
    281958624: '9b972480-cd46-11ea-8f58-a8fbe0f8ae58',
    281855329: 'a7b3bf80-cd0f-11ea-9745-d9811bc4791e',
    281684100: '8b068180-cc54-11ea-81e0-c4dce8a52b4c',
    281670471: '4aa20600-cc4a-11ea-8263-ee864e1fd3c4',
    281604630: 'e4464d00-dc23-11ea-96c6-d3d17fbbdb92',
    281492794: '12cd9b00-cc17-11ea-85cf-9523b092bf3b'
  };


  username: string = 'sanojcr';

  constructor(private github: GithubService) {
  }

  ngOnInit(): void {
    this.loadRepositoriesDetails();
  }

  loadRepositoriesDetails() {
    this.github.getPublicRepos(this.username).subscribe((data) => {
      this.repos = data
        .filter(x => Object.keys(this.reqIds).map(key => Number(key)).includes(x.id))
        .sort((a, b) => {
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
    });
  }

}
