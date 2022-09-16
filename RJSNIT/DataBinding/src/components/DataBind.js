export function DataBind(){
    var product = {
        Name: "HP Laptop",
        Price:58000,
        Stock:false
    }
    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock===true)?"Avaiable ": "Out of Stock"}</dd>
            </dl>
        </div>
    )
}