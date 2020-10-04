import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from './error-dialog.component';
import { NbDialogService } from '@nebular/theme';

@Injectable()
export class ErrorDialogService {
  public isDialogOpen: Boolean = false;
  constructor(private dialogService: NbDialogService) { }

  openDialog(data): any {
    if (this.isDialogOpen) {
      return false;
    }
    this.isDialogOpen = true;
    const dialogRef = this.dialogService.open(ErrorDialogComponent, {
      context: { data: data },
    });

    dialogRef.onClose.subscribe(result => {
      this.isDialogOpen = false;
    });
  }
}
