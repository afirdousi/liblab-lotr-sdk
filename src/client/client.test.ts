import { describe, expect, test, beforeEach } from '@jest/globals';
import { Client } from './client';
import {LiblabLotr} from "../liblab-lotr";

function mockFetch(returnValue: unknown) {
    global.fetch = jest.fn(() =>
        Promise.resolve(returnValue),
    ) as jest.Mock;
}

let client: Client;

// TODO: remove apiKey (extremely BAD idea to include them here. move it to DB or a private JSON )
const API_KEY = '45kTPx7tJm8Ygx24i8UX';

beforeEach(() => {
    client = new Client(API_KEY);
});

describe('Client', () => {
    test('get should succeed when response is ok', async () => {
        mockFetch({
            ok: true,
            json: () => Promise.resolve(
                [
                    {name: 'The Hobbit Series\t'}
                ]
            ),
        });

        const actual = await client.get('book');

        expect(actual).toEqual([{name: 'The Hobbit Series\t'}]);
    });

    test('get should throw when response is not ok', async () => {
        mockFetch({
            ok: false,
            statusText: 'Failed for some reason!',
        });

        await expect(client.get('book')).rejects.toThrow('Failed for some reason!');
    });
});