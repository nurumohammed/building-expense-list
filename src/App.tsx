import { useState } from "react";
import MarketList from "./Components/MarketList";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      item: "Electronics",
      product: "Mobile",
      amount: 1000,
      description: "i pad 8 apple max pro ",
    },
    {
      id: 2,
      item: "Electronics",
      product: "Laptop",
      amount: 10000,
      description: "i pad 8 apple max pro ",
    },
    {
      id: 3,
      item: "Electronics",
      product: "Air phone",
      amount: 500,
      description: "i pad 8 apple max pro ",
    },
    {
      id: 4,
      item: "Food",
      product: "berger",
      amount: 1000,
      description: "Remedan cafea and restorant ",
    },
  ]);
  const handleDelete =(id:number)=>{setData(data.filter(item => item.id !== id))}

  return (
    <div>
      <MarketList expenses={data} onDelete={handleDelete} />
    </div>
  );
}

export default App;
