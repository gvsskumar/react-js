import useCounter from '../hooks/use-counter';
import Card from './Card/Card';
const BackwardCounter = () => {
    const counter = useCounter(false);
   
  return (
    <Card>BackwardCounter : {counter}</Card>
  )
}
export default BackwardCounter;
