import "./styles.css";

// Do not remove the export statement from Card Component.
//Refactor the given Card component.
// export const Card = (props) => (
//   <div className="card">
//     <h3>Name: {props.name}</h3>
//     <span>About: {props.about}</span>
//   </div>
// );

export function Card(props) {

  const {name, about} = props;

  return (
    <div className="card">
      <h3>Name: {name} </h3>
      <span>About: {about}</span>
    </div>
  )
}

export default function App() {
  return <Card name="Sopan B." about="Hello Developer." />;
}
