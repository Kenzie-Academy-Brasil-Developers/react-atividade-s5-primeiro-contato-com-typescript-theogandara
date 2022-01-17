interface CardProps {
  name: string;
  hobby: string;
  age: number;
}

const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <div className= "Card">
      <div> {name}</div>
      <div> {hobby}</div>
      <div> {age}</div>
    </div>
  );
};

export default Card;
