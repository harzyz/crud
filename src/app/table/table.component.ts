import { Component } from '@angular/core';
import { RecordService } from '../record.service';
import { Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  records: any[] = [];
  record: any;
  isEditMode: boolean = false
  searchText: string = '';
  filteredItems = this.records;

  constructor(
    private recordService: RecordService,
    private router: Router,
    private modalService: NgbModal
    ) {
    this.records = this.recordService.getRecords();
  }


  onDeleteConfirm(content: any, i: number): void {
    this.modalService.open(content).result.then((result) => {
      if (result === 'confirm') {
        this.onDelete(i);
      }
    });
  }

  onDelete(i: number): void {
    this.records.splice(i, 1)
  }

  onEdit(item: any, i: number) {
    this.record = {...item}
    this.recordService.editMode()
    this.router.navigate(['/new-record'], { queryParams: { editedRecord: JSON.stringify(item) }})
  }
  
  performSearch(): void {
    if (this.searchText.trim() === '') {
      this.records = this.recordService.getRecords();
    } else {
      this.records = this.recordService.searchRecords(this.searchText);
    }
  }

}
// onEdit(i: number) {
//   this.router.navigate(['/new-record'], { queryParams: { editId: i } });
// }

// 
// this.newrecordComponent.handleEdit()
