import { Query } from "../types";
import { PaginatedResponse } from "../types/response-pagination";
import { QuoteResponse } from '../types/response-quote'
import { BaseService } from "./base";
import {QueryUtil} from "../utils";

export class MovieService extends BaseService {

    private readonly resource = 'movie';
    protected getResourceName(): string {
        return this.resource;
    }

    public async getQuotes(movieID: string, query?: Query): Promise<PaginatedResponse<QuoteResponse>> {
        const url = `${this.resource}/${movieID}/quote${query ? `?${(new QueryUtil().stringify(query))}` : ''}`;

        return await this.client.get(url);
    }

}