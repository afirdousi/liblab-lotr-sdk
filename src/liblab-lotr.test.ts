import { describe, expect, test, beforeEach } from '@jest/globals';
import { LiblabLotr } from './liblab-lotr';

// the API Key can come from env variables
// TODO: remove apiKey (extremely BAD idea to include them here)
const client = new LiblabLotr('45kTPx7tJm8Ygx24i8UX');
const BEARER_TOKEN = "Bearer 45kTPx7tJm8Ygx24i8UX";

let spy: jest.SpyInstance;

beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({ ok: true, json: () => Promise.resolve('success') }),
    ) as jest.Mock;

    spy = jest.spyOn(global, 'fetch');

    jest.mock('./client/client', () => {
        return {
            Client: jest.fn().mockImplementation(() => {
                {
                    get: jest.fn()
                }
            })
        };
    });
})

describe('Liblab LOTR SDK', () => {

    test('movies without query', async() => {
        await client.movies();

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/movie",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });

    test('movie with basic query, query by id', async() => {
        await client.movie('ID');

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/movie/ID",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });

    test('movies with query (pagination) ', async() => {
        await client.movies({ page: 1, limit: 2, offset: 3 });

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/movie?page=1&limit=2&offset=3",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });

    test('movies with filters', async() => {
        await client.movies({ filters: [client.filter('name').matches('The Hobbit Series\t')] });

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/movie?name=The Hobbit Series\t",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });

    test('movies with sort', async() => {
        await client.movies({ sort: { by: 'name', direction: 'asc' } });

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/movie?sort=name%3Aasc",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });

    test('quotes without query', async() => {
        await client.quotes();

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/quote",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });

    test('quotes with basic query, query by id', async() => {
        await client.quote('ID');

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/quote/ID",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });

    test('quotes with query (pagination) ', async() => {
        await client.quotes({ page: 1, limit: 2, offset: 3 });

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/quote?page=1&limit=2&offset=3",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });

    test('quotes with filters', async() => {
        await client.quotes({ filters: [client.filter('name').matches('The Hobbit Series\t')] });

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/quote?name=The Hobbit Series\t",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });

    test('quotes with sort', async() => {
        await client.quotes({ sort: { by: 'name', direction: 'asc' } });

        expect(spy).toBeCalledWith(
            "https://the-one-api.dev/v2/quote?sort=name%3Aasc",
            {"headers": {"Authorization": BEARER_TOKEN}}
        );
    });


});