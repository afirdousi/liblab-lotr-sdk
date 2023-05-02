import { Client } from './client';
import { ClientConfig, Query } from './types';
import { Filter } from "./filters/filter";
import { PaginatedResponse } from "./types/response-pagination";
import { MovieResponse } from "./types/response-movie";
import { QuoteResponse } from "./types/response-quote";
import { MovieService, QuoteService } from './services';


export class LiblabLotr {

    private readonly client: Client;

    private readonly movieService: MovieService;

    private readonly quoteService: QuoteService;

    constructor(private apiKey?: string) {
        this.client = new Client(apiKey);
        this.movieService = new MovieService(this.client);
        this.quoteService = new QuoteService(this.client);
    }

    /**
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Movie>>} movies
     */
    public async movies(query?: Query): Promise<PaginatedResponse<MovieResponse>> {
        return await this.movieService.getList(query);
    }

    /**
     *  @param {string} id
     *
     *  @returns {Promise<PaginatedResponse<Movie>>} movies
     */
    public async movie(id: string): Promise<PaginatedResponse<MovieResponse>> {
        return this.movieService.getById(id);
    }

    /**
     *  @param {string} movieId
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Quote>>} quotes
     */
    public async movieQuotes(movieId: string, query?: Query): Promise<PaginatedResponse<QuoteResponse>> {
        return this.movieService.getQuotes(movieId, query);
    }

    /**
     *  @param {Query} query - if omitted returns all books
     *  @param {Pagination} query.pagination - object containing {page, limit, offset}
     *  @param {Sort} query.sort - object containing {field, direction}
     *  @param {Filter[]} query.filters - an array of filters by which to include results
     *
     *  @returns {Promise<PaginatedResponse<Quote>>} quotes
     */
    public async quotes(query?: Query): Promise<PaginatedResponse<QuoteResponse>> {
        return await this.quoteService.getList(query);
    }

    /**
     *  @param {string} id
     *
     *  @returns {Promise<PaginatedResponse<Quote>>} quotes
     */
    public async quote(id: string): Promise<PaginatedResponse<QuoteResponse>> {
        return this.quoteService.getById(id);
    }

    public filter(field: string) {
        return new Filter(field);
    }


}