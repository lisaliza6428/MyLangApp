import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss'],
})
export class DictionaryPageComponent implements OnInit {
  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getWords();
  }
}
