import axios, { AxiosRequestConfig } from 'axios';

export class Axios {
    protected url = "https://api.thedogapi.com/v1"

    public async request(endpoint: string, config: AxiosRequestConfig): Promise<any> {
        try {
            const response = await axios({
                url: `${this.url}/${endpoint}`,
                ...config
            });
            return response.data;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}
