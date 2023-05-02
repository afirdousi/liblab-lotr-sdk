import { describe, expect, test } from '@jest/globals';
import { Filter } from './filter';

describe('Filter', () => {
    test('matches', () => {
        const filter = new Filter('name');

        expect(filter.matches('Anas').toString()).toBe('name=Anas');
    });

    test('matches not', () => {
        const filter = new Filter('name');

        expect(filter.matches('Anas', true).toString()).toBe('name!=Anas');
    });

    test('includes', () => {
        const filter = new Filter('name');

        expect(filter.includes(['Anas', 'Saman']).toString()).toBe('name=Anas,Saman');
    });

    test('includes not', () => {
        const filter = new Filter('name');

        expect(filter.includes(['Anas', 'Saman'], true).toString()).toBe('name!=Anas,Saman');
    });

    test('exists', () => {
        const filter = new Filter('name');

        expect(filter.exists().toString()).toBe('name');
    });

    test('exists not', () => {
        const filter = new Filter('name');

        expect(filter.exists(true).toString()).toBe('!name');
    });

    test('regex', () => {
        const filter = new Filter('name');

        expect(filter.regex('/anas/').toString()).toBe('name=/anas/');
    });

    test('regex not', () => {
        const filter = new Filter('name');

        expect(filter.regex('/anas/', true).toString()).toBe('name!=/anas/');
    });

});