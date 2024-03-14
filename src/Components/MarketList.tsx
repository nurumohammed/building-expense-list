interface Products {
  id: number;
  product: string;
  item: string;
  amount: number 
  description: string;
}
interface props {
  expenses: Products[];
  onDelete: (id: number) => void;
}
const MarketList = ({ expenses, onDelete }: props) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>PRODUCTS</th>
          <th>ITEM </th>
          <th>AMOUNT</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((value) => (
          <tr key={value.id}>
            <td>{value.product}</td>
            <td>{value.item}</td>
            <td>{value.amount}</td>
            <td>{value.description}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(value.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td>${expenses.reduce((acc,current)=>current.amount +acc,0).toFixed(2)}</td>
          <td>total amount</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default MarketList;
