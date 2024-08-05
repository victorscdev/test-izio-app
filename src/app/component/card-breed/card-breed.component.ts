import { Component, Input } from "@angular/core";
import { BreedApi } from "core/domain/api/breed.api";

@Component({
    selector: 'card-breed',
    templateUrl: "./card-breed.component.html",
    styleUrls: ["./card-breed.component.scss"]
})
export class CardBreedComponent {
    @Input() data: any

    isOpenModal: boolean = false
    breed: any

    constructor(
        private _breedApi: BreedApi
    ) {}

    onClickOpenModal(id: string) {
        this.isOpenModal = !this.isOpenModal
        this._breedApi.readBreedById(id)
        .then(($response) => {
            console.log($response)
            this.breed = $response
        })
    }

    onCloseModal(event: boolean) {
        this.isOpenModal = event
    }
}