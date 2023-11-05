import {
    Table,
    TableHead,
    TableHeadItem,
    TableItem
} from './TransactionHistory.styled.js';

export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <TableHeadItem>Type</TableHeadItem>
                    <TableHeadItem>Amount</TableHeadItem>
                    <TableHeadItem>Currency</TableHeadItem>
                </tr>
            </TableHead>
            <tbody>
                {items.map(item => {
                    return (
                        <TableItem key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </TableItem>
                    );
                })}
            </tbody>
        </Table>
    );
};