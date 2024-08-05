import { Component, OnInit } from "@angular/core";
import { BreedApi } from "core/domain/api/breed.api";

@Component({
    templateUrl: "./breed-list.page.html",
    styleUrls: ["./breed-list.page.scss"]
})
export class BreedListPage implements OnInit {
    breeds: any[] = [];
    page: number = 0;
    limit: number = 10;
    itens: number = 0;

    constructor(
        private _breedApi: BreedApi
    ) { }

    ngOnInit(): void {
        this.loadBreeds();
    }

    loadBreeds() {
        this._breedApi.readBreeds(this.limit, this.page)
            .then(($response) => {
                this.breeds = $response
                this.itens = $response.length
            })
    }

    onPageChange(newPage: number): void {
        this.page = newPage;
        this.loadBreeds();
    }

}