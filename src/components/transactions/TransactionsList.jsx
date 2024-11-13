import { useGlobalState } from '../../context/GlobalState'
import { TransactionItem } from './TransactionItem'

function TransactionsList() {
    const { transactions } = useGlobalState()

    return (
        <>
            <h3 className="txt-slate-300 text-xl font-bold block w-full">History</h3>

            <ul>
                {transactions.map(transaction => (
                    <TransactionItem transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </>
    )
}

export default TransactionsList