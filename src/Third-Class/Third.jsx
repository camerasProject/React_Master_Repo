import ProductDetail from "./IInd Method/ProductDetail";
import Higher from "./Ist Method/Higher";

export default function Third() {
  const datas = [
    {
      name: "Iphone17",
      price: 100000,
      qty: 5,
      decription:
        "This is the latest model of Iphone with advanced features and sleek design.",
    },
    {
      name: "Samsung Galaxy S23",
      price: 90000,
      qty: 10,
      decription:
        "This is the latest model of Samsung Galaxy with advanced features and sleek design.",
    },
    {
      name: "OnePlus 11",
      price: 80000,
      qty: 15,
      decription:
        "This is the latest model of OnePlus with advanced features and sleek design.",
    },
    {
      name: "Google Pixel 7",
      price: 70000,
      qty: 20,
      decription:
        "This is the latest model of Google Pixel with advanced features and sleek design.",
    },
    {
      name: "Xiaomi Mi 12",
      price: 60000,
      qty: 25,
      decription:
        "This is the latest model of Xiaomi Mi with advanced features and sleek design.",
    },
    {
      name: "Oppo Find X5",
      price: 50000,
      qty: 30,
      decription:
        "This is the latest model of Oppo Find X with advanced features and sleek design.",
    },
    {
      name: "Vivo X80 Pro",
      price: 40000,
      qty: 35,
      decription:
        "This is the latest model of Vivo X80 Pro with advanced features and sleek design.",
    },
    {
      name: "Realme GT 2 Pro",
      price: 30000,
      qty: 40,
      decription:
        "This is the latest model of Realme GT 2 Pro with advanced features and sleek design.",
    },
    {
      name: "Asus ROG Phone 5",
      price: 20000,
      qty: 45,
      decription:
        "This is the latest model of Asus ROG Phone with advanced features and sleek design.",
    },
    {
      name: "Sony Xperia 1 III",
      price: 10000,
      qty: 50,
      decription:
        "This is the latest model of Sony Xperia with advanced features and sleek design.",
    },
  ];
  return (
    <div>
      {/* <h1>Props : It means data transfer from parent component to child component</h1> */}
      {/* <Higher/> */}
      {datas.map((el) => (
        // This is the way to pass data from parent component to child component using props
        <ProductDetail
          name={el.name}
          price={el.price}
          qty={el.qty}
          desc={el.decription}
        />
      ))}

      {/* 
        What is Props Drilling : It is the process of passing data from parent component to child component through multiple levels of components. It is a common problem in React when we have to pass data from parent component to child component through multiple levels of components.
      */}
    </div>
  );
}
