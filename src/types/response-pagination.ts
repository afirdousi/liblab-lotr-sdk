export interface PaginatedResponse<T> {
    results: T[];
    totalItems: number;
    currentPage: number;
    totalPages: number;
}
