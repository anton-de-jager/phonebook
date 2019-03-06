import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroupDirective, NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { first } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { environment } from 'environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

import { DialogUpsertComponent } from '../dialog/dialog-upsert.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    env = environment;

    isLoading = true;
    displayedColumns: string[] = ['cud', 'lastName', 'firstName', 'phoneNumber', 'email', 'imageUrl'];
    dataSource: MatTableDataSource<any>;
    form: FormGroup;
    dialogRef: MatDialogRef<DialogUpsertComponent>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    filter_firstName = new FormControl('');
    filter_lastName = new FormControl('');
    filter_phoneNumber = new FormControl('');
    filter_email = new FormControl('');
    filterValues = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
    };

    constructor(
        private dialog: MatDialog,
        private apiService: ApiService,
        private _formBuilder: FormBuilder,
        private router: Router) {
        if (!environment.logged) {
            this.router.navigate(['login']);
        } else {
            this.getData().then(x => {
                this.isLoading = false;
            });
        }
    }

    ngOnInit() {
    }

    getData() {
        var promise = new Promise((resolve, reject) => {
            try {
                this.apiService.getItems('contacts').pipe(first()).subscribe(result => {
                    this.dataSource = new MatTableDataSource(result);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                    this.dataSource.filterPredicate = this.tableFilter();
                    this.initFilter();
                    resolve(true);
                });
            } catch (exception) {
                resolve(false);
            }
        });
        return promise;
    }

    initFilter() {
        this.filter_firstName.valueChanges
            .subscribe(
                firstName => {
                    this.filterValues.firstName = firstName;
                    this.dataSource.filter = JSON.stringify(this.filterValues);
                }
            )
        this.filter_lastName.valueChanges
            .subscribe(
                lastName => {
                    this.filterValues.lastName = lastName;
                    this.dataSource.filter = JSON.stringify(this.filterValues);
                }
            )
        this.filter_phoneNumber.valueChanges
            .subscribe(
                phoneNumber => {
                    this.filterValues.phoneNumber = phoneNumber;
                    this.dataSource.filter = JSON.stringify(this.filterValues);
                }
            )
        this.filter_email.valueChanges
            .subscribe(
                email => {
                    this.filterValues.email = email;
                    this.dataSource.filter = JSON.stringify(this.filterValues);
                }
            )
    }
    tableFilter(): (data: any, filter: string) => boolean {
        let filterFunction = function (data, filter): boolean {
            let searchTerms = JSON.parse(filter);
            return data.firstName.toLowerCase().indexOf(searchTerms.firstName) !== -1
                && data.lastName.toLowerCase().indexOf(searchTerms.lastName) !== -1
                && data.phoneNumber.toLowerCase().indexOf(searchTerms.phoneNumber) !== -1
                && data.email.toLowerCase().indexOf(searchTerms.email) !== -1;
        }
        return filterFunction;
    }

    matcher = new MyErrorStateMatcher();

    initUpsert(row) {
        let phonePattern = "[0-9]{10}";

        this.form = this._formBuilder.group({
            firstName: [row == null ? '' : row.firstName, Validators.required],
            lastName: [row == null ? '' : row.lastName, Validators.required],
            phoneNumber: [row == null ? '' : row.phoneNumber, [Validators.required, Validators.pattern(phonePattern)]],
            email: [row == null ? '' : row.email, [Validators.required, Validators.email]],
            imageUrl: [row == null ? '' : row.imageUrl, Validators.required]
        });

        const dialogConfig = new MatDialogConfig();

        dialogConfig.data = {
            item: row,
            form: this.form,
            title: row == null ? 'Insert' : 'Update'
        }

        dialogConfig.autoFocus = true;
        dialogConfig.disableClose = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.ariaLabel = 'fffff';
        dialogConfig.width = "800px";

        const dialogRef = this.dialog.open(DialogUpsertComponent,
            dialogConfig);


        dialogRef.afterClosed().subscribe(result => {
            if (result !== false) {
                this.isLoading = true;
                if (row == null) {
                    this.apiService.createItem('contacts', result).subscribe(r => {
                        this.getData().then(() => {
                            this.isLoading = false;
                        });
                    });
                } else {
                    result.id = row.id;
                    result.company_id = 1;
                    result.changed_by = 1;
                    result.active = true;
                    this.apiService.updatItem('contacts', result).subscribe(r => {
                        this.getData().then(() => {
                            this.isLoading = false;
                        });
                    });
                }
            }
        });
    }
    initDelete(id) {
        if (confirm('Are you sure you want to delete item?')) {
            this.isLoading = true;
            this.apiService.deleteItem('contacts', id).subscribe(r => {
                this.getData().then(() => {
                    this.isLoading = false;
                });
            });
        }
    }
}
