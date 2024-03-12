import "./item.module.css";

export default function Item({ item }) {
  return (
    <div className="container">
      <h3 className="title">{item.title}</h3>
      <img src={item.image} alt={item.title} className="image" />
      <p>
        <strong className="price">${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
