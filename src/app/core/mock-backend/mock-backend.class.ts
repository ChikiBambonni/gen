import { PaginationInterface } from '@core/interfaces/pagination.interface';

export abstract class MockBackendFactory<T> {

  delay: number;

  protected items: T[] = [];

  constructor(delay?: number) {
    this.delay = Number.isInteger(delay) ? delay : null;
  }

  abstract getData(...args): T | T[] | PaginationInterface<T>;

  getElements(...args): T[] {
    return this.items;
  }

  protected getTableData(params): PaginationInterface<T> {
    const pagesize: number = this.getPageSize(params.pagesize);
    const page: number = this.getPageNumber(params.page);

    const elements = this.getElements(params);
    const offset: number = (page - 1) * pagesize;
    const offsetElements = elements.slice(offset, offset + Number(pagesize));

    return {
      totalPages: Math.ceil(elements.length / pagesize),
      totalElements: elements.length,
      elements: offsetElements,
      page,
      pagesize
    };
  }

  private getPageNumber(pageNumber: number | null, defaultValue = 1): number {
    return Number.isInteger(Number(pageNumber)) ? pageNumber : defaultValue;
  }

  private getPageSize(pageSize: number | null, defaultValue = 10): number {
    return Number.isInteger(Number(pageSize)) ? pageSize : defaultValue;
  }
}
