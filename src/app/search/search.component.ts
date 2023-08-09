import { Component } from '@angular/core';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  records: any[] = [];
  searchQuery: string = '';
  filteredItems = this.records;

  constructor(private recordService: RecordService) {}

  updateFilteredItems() {
    this.filteredItems = this.records.filter(record =>
      record.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
