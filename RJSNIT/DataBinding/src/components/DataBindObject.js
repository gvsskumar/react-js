export function DataBindObject(){
    var products = [
    {Name:"Winter Jacket",Price:4500,Photo:"jacket.jpg"},
    {Name:"Nike Casuals",Price:5500,Photo:"jacket.jpg"},
    {Name:"Speaker",Price:3500,Photo:"jacket.jpg"}
]
return(
    <div className="container-fluid mt-2">
        <h2>Product Table</h2>
        <table className="table table-hover">
           <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Preview</th>
                <th colSpan="2">Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    products.map(product=>
                    <tr key={product.Name}>
                        <td>{product.Name}</td>
                        <td>{product.Price}</td>
                        <td>{product.Photo}</td>
                        <td>
                            <button className="btn btn-outline-info">
                                <span className="bi bi-pen-fill"></span>
                            </button>
                        </td>
                        <td>
                        <button className="btn btn-outline-danger">
                                <span className="bi bi-trash-fill"></span>
                            </button>
                        </td>
                    </tr>)
                }

            </tbody> 
        </table>
    </div>
)
}