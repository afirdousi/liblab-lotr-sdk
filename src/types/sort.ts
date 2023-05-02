/**
 * Interface for sorting entity results
 */
export interface Sort {
    by: string;
    direction: "asc" | "desc";
}