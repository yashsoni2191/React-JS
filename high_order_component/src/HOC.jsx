import Rotate from "./Components/Spinner"

const loader = ({ dd }) => {
    return <h1>Loading... {dd}</h1>;
  };

  const loader2 = ({ dd }) => {
    return <h1>Still Loading...{dd}</h1>;
  };

  const HighOrder = (Product) => {
    return function ({...props}) {
      if (props.dd) {
        return <Rotate />;
      }
      return <Product {...props} />;
    };
  };

  const ProductList = ({ arr, dd }) => {
    return (
      <>
        <h4>{dd}</h4>
        {arr.map((el) => {
          return <>
          <h5 key={el.id}>{el.title}</h5>;
          <img src={el.image} alt="" height="200px" width="200px"/>
          </>
        })}
      </>
    );
  };

  export const deepak = ()=>{
    return (<h1>Helloooo</h1>)
  }
  
  export const C = HighOrder(deepak)
  const A = HighOrder(ProductList)

  export default A
