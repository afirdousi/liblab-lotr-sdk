import { ClientConfig } from '../types';

export class Client {

    // TODO: these could be loaded from a DB for dynamic load and cache OR kept in a separate JSON file
    private baseURL = 'https://the-one-api.dev';
    private apiVersion = 'v2';


    // API is optional for some end points like movie
    constructor(private apiKey?: string) {
    }
    public config(config: ClientConfig) {
        this.apiKey = config.apiKey;
    }

    public async get<T>(url: string): Promise<T> {
        // Using fetch instead of a library for lighter weight and higher compatibility
        const response = await fetch(this.formatUrl(url), this.getConfig());

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }

    private getConfig(): RequestInit {
        return { headers: { Authorization: `Bearer ${this.apiKey}` } }
    }

    private formatUrl(url: string): string {
        return `${this.baseURL}/${this.apiVersion}/${url}`;
    }


}