import { Axios } from "core/infrastructure/database/axios.database";

export class BreedGateway {
    private _axios: Axios = new Axios()
    private readonly _apiKey: string = 'live_UA6iKCCgtVIf8jx8pEDlxtlPK4x8JoqdNhoh1V2M5ZjhiMq3CvyQSrcc4H0A3cac' 

    public getBreeds(limit: number, page: number): Promise<any> {
        return this._axios.request(`breeds?limit=${limit}&page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this._apiKey
            }
        })
    }

    public getBreedById(id: string): Promise<any> {
        return this._axios.request(`breeds/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this._apiKey
            }
        })
    }
}