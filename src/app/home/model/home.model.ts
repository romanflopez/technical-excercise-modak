import { Pagination } from 'src/app/shared/model/interfaces.model';

export enum PageSize {
  TWELVE = 12,
  TWENTY = 20,
  THIRTY = 30,
}

export type PaginationUi = Pick<Pagination, 'current_page' | 'limit'>;
