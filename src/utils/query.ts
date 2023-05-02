import { Query, Sort } from '../types';
import { Filter } from '../filters/filter';

export class QueryUtil {

    private readonly SORT = 'sort';
    private readonly LIMIT = 'limit';
    private readonly PAGE = 'page';
    private readonly OFFSET = 'offset';

    public stringify(query: Query) {
        const searchParams: URLSearchParams = new URLSearchParams();

        this.appendPagination(searchParams, query);
        this.appendSort(searchParams, query.sort);

        const searchString = searchParams.toString();

        if (query.filters?.length) {
            return this.withFilters(searchString, query.filters);

        }

        return searchString;
    }

    public formatSort({by, direction}: Sort) {
        return `${by}:${direction}`
    }

    public appendPagination(searchParams: URLSearchParams, query: Query) {
        if (query.page) {
            searchParams.append(this.PAGE, query.page.toString());
        }

        if (query.limit) {
            searchParams.append(this.LIMIT, query.limit.toString());
        }

        if (query.offset) {
            searchParams.append(this.OFFSET, query.offset.toString());
        }
    }

    public appendSort(searchParams: URLSearchParams, sort: Sort) {
        if (sort) {
            searchParams.append(this.SORT, this.formatSort(sort));
        }
    }

    public withFilters(searchString: string, filters: Filter[]): string {
        const filterValues = filters.reduce(
            (previousValue, currentValue) => previousValue + currentValue, '');

        return searchString ? `${searchString}&${filterValues}` : `${filterValues}`;
    }
}