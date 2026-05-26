import { employees } from "../../data/table.data"
import useTable from "../../hooks/useTable"

const Table = () => {
    const { tableData, handleSearch } = useTable(employees);

    return (
        <div className='table-container'>
            <div className='table-search-container'>
                <input type="text" placeholder="Search by name..." className='table-search-input' onChange={handleSearch} />
            </div>
        {!!tableData?.length && (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>{employee.age}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
         )}
        </div>
    )
}

export default Table;
