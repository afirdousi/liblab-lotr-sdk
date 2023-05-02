import { Pagination } from './pagination';
import { Sort } from './sort';
import { Filter } from '../filters/filter';

/**
 * Interface for querying entities
 */
export interface Query extends Partial<Pagination> {
 sort?: Sort;
 filters?: Filter[];
}
