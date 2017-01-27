import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { Search } from './Search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  constructor(private searchService: SearchService, private router: Router) {   
  }

  ngOnInit() {
   
  }


}
