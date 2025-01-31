import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginationComponent } from "./pagination.component";

@NgModule({
    declarations: [PaginationComponent],
    imports: [CommonModule],
    exports: [PaginationComponent]
})
export class PaginationModule {}