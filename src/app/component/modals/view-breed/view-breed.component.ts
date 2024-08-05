import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "modal-view-breed",
    templateUrl: "./view-breed.component.html",
    styleUrls:  ["./view-breed.component.scss"]
})
export class ModalViewBreedComponent {
    @Input() isOpen: boolean = false
    @Input() breed: any
    @Output() closeModal = new EventEmitter<boolean>()

    close() {
        this.closeModal.emit(false)
    }
}