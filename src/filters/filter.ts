/**
 * A class for building and applying filters to API requests
 */
export class Filter {
    private value = '';

    constructor(private field: string) {
    }

    /**
     * @param {boolean} negate - negates the condition
     */
    public matches(value: string, negate?: boolean): Filter {
        const operand = negate ? '!=' : '=';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    /**
     * @param {boolean} negate - negates the condition
     */
    public includes(values: string[], negate?: boolean): Filter {
        const operand = negate ? '!=' : '=';
        this.value = `${this.field}${operand}${values}`;

        return this;
    }

    /**
     * @param {boolean} negate - negates the condition
     */
    public exists(negate?: boolean): Filter {
        const operand = negate ? '!' : '';
        this.value = `${operand}${this.field}`;

        return this;
    }

    /**
     * @param {boolean} negate - negates the condition
     */
    public regex(value: string, negate?: boolean): Filter {
        const operand = negate ? '!=' : '=';
        this.value = `${this.field}${operand}${value}`;

        return this;
    }

    public toString(): string {
        return this.value;
    }

    // TODO: Many other regular filter methods could have been added, add them in next version
}