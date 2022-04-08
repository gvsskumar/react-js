import useCounter from "../hooks/use-counter";
import Card from "./Card/Card";
 const ForwardCounter = () => {
   const counter = useCounter(true);   
  return (
    <Card>ForwardCounter : {counter}</Card>
  )
}
export default ForwardCounter;
