declare class ListResult<M> {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Array<M>;
  constructor(
    page: number,
    perPage: number,
    totalItems: number,
    totalPages: number,
    items: Array<M>
  );
}

export default ListResult;
