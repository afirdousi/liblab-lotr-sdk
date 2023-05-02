export interface MovieResponse {

    // Movie ID
    _id: string;

    // Name of the movie
    name: string;

    // Total movie runtime in minutes
    runtimeInMinutes: number;

    // Total USD spent on making the movie from creation to distribution
    budgetInMillions: number;

    // Aggregated number of reviews across platforms
    boxOfficeRevenueInMillions: number;

    // Number of award nominations
    academyAwardNominations: number;

    // Number of awards won
    academyAwardWins: number;

    // Movie rating on rotten tomatoes
    rottenTomatoesScore: number;
}