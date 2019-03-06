import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FuseMaterialColorPickerModule } from '@fuse/components/material-color-picker/material-color-picker.module';
import {
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatTreeModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    MatBadgeModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatRadioModule,
    MatTooltipModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatOptionModule,
    MatExpansionModule,
    MatRippleModule
} from '@angular/material';

import { DialogUpsertComponent } from 'app/main/dialog/dialog-upsert.component';

import { ApiService } from '../main/services/api.service';

import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseMaterialColorPickerModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatTreeModule,
        MatFormFieldModule,
        MatChipsModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
        MatBadgeModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatRadioModule,
        MatTooltipModule,
        MatSidenavModule,
        MatSelectModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTabsModule,
        MatOptionModule,
        MatExpansionModule,
        MatRippleModule,

        NgxMaskModule.forRoot()
    ],
    declarations: [
        DialogUpsertComponent
    ],
    exports: [
        FuseSharedModule,
        FuseSidebarModule,
        FuseMaterialColorPickerModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatTreeModule,
        MatFormFieldModule,
        MatChipsModule,
        MatDatepickerModule,
        MatSlideToggleModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        MatListModule,
        MatBadgeModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatRadioModule,
        MatTooltipModule,
        MatSidenavModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTabsModule,
        MatOptionModule,
        MatExpansionModule,
        MatSelectModule,
        MatRippleModule
    ],
    providers: [ApiService],
    entryComponents: [
        DialogUpsertComponent
    ]
})
export class SharedModule { }
