import {useState} from "react"
export function DataBinduseState() {
    const [username] = useState('Kumar');
    const [product] = useState({Name:"Tv",Price:56600});
    const [categories] = useState(["Electronics","Footwear"]);
    return(
        <div className="container-fluid mt-2">
            {username}
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
            </dl>
            <ol>{
                categories.map(category=>
                    <li>{category}</li>
                    )
                }</ol>
        </div>
    )
}