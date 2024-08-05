import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "pagination",
    templateUrl: "./pagination.component.html",
    styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent {
    @Input() page: number = 0;
    @Input() itens: any;
    @Output() pageChange = new EventEmitter<number>();

    nextPage(): void {
        this.page++;
        this.pageChange.emit(this.page);
    }

    prevPage(): void {
        if (this.page > 0) {
            this.page--;
            this.pageChange.emit(this.page);
        }
    }
}