import './navbar.css'
interface props{
    item : string []
    onClear:()=>void
}
const Cart = ({item,onClear}:props) => {
  return (
    <>
      <div className="products">
        <h1>Products</h1>:
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <button onClick={onClear}> Delate</button>
      </div>
    </>
  );
  }
export default Cart