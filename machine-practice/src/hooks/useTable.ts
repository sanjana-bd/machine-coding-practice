import { useMemo, useState } from "react";
import type { TSortOrder, TTableData, TUseTable } from "../typings/table";
import debounce from "../utils/debounce";

const useTable = (data: TTableData[]): TUseTable => {
    const [searchData, setSearchData] = useState<string>('');
    const [sortConfig, setSortConfig] = useState<{ key: keyof TTableData; order: TSortOrder } | null>(null);

    const tableData = useMemo(() => {
        let filteredData = data;

        if (searchData) {
            filteredData = filteredData.filter((item) =>
                item.name.match(new RegExp(searchData, 'i')) || item.department.match(new RegExp(searchData, 'i'))
            );
        }

        if (sortConfig) {
            filteredData = [...filteredData].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.order === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.order === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }

        return filteredData;
    }, [data, searchData, sortConfig]);
    
    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchData(searchTerm);
    };

    const handleSearch = useMemo(() => debounce(handleSearchInput, 500), []);

    const handleSort = (key: keyof TTableData) => {
        setSortConfig(prevConfig => ({
             key,
             order: prevConfig?.key === key && prevConfig?.order === 'asc' ? 'desc' : 'asc'
        }));
    };

    return {
        tableData,
        handleSearch,
        handleSort
    }
}

export default useTable;
