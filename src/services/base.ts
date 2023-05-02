import { Client } from '../client';
import { Query } from '../types';
import { QueryUtil } from '../utils'

export abstract class BaseService {

    protected abstract getResourceName(): string;

    constructor(protected client: Client) {
    }

    public async getById<T>(id: string): Promise<T> {
        return await this.client.get(`${this.getResourceName()}/${id}`);
    }

    public async getList<T>(query?: Query): Promise<T> {
        if (!query) {
            return await this.client.get(this.getResourceName()) as Promise<T>;
        }

        return await this.client.get(`${this.getResourceName()}?${(new QueryUtil().stringify(query))}`);
    }
}