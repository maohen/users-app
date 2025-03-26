export interface ITable<T> {
    columns: ITableElement<T>[],
    title?: string;
    isSearch?: boolean,
    valuesResultsPages: number[];
}

export interface ITableData {
    columns: ITableElement<any>[],
    rows: any[]
}

export interface ITableElement<T> {
    field: string,
    headerName: string | JSX.Element,
    renderCell?: (params: T) => JSX.Element,
    minWidth: number,
}

export interface IFooterTableProps {
    sizeRows: number,
    handleChangeSizePage: (event: any) => void,
    valuesResultsPages: number[],
    numberPage: number,
    totalElements: number,
    size: number,
    handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void
}