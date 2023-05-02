export interface QuoteResponse {
    _id: string;
    dialog: string;

    // Movie ID associated with the quote
    movie: string;

    // Character ID associated with the quote
    character: string;
}