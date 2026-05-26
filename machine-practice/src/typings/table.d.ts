export type TTableData = {
    id: number;
    name: string;
    department: string;
    age: number;
    salary: number;
    status: string;
};

export type TSortOrder = 'asc' | 'desc';

export type TUseTable = {
    tableData: TTableData[];
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSort: (key: keyof TTableData, order: TSortOrder) => void;
};
