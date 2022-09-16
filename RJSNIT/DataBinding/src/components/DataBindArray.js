export function DataBindArray() {
    const categories = ["Electronics","Footwear","Fashion"];
    return(
        <div className="container-fluid mt-2">
            <div>
                <table className="table table-hover-drak">
                    <thead>
                        <tr>
                            <td>Categories</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          categories.map(category=>
                            <tr key={category}>
                                <td>{category}</td>
                            </tr>)  
                        }
                    </tbody>
                </table>
            </div>
            <div className="w-25">
                {
                    categories.map(category=>
                        <div key={category}>
                            <button className="btn btn-link mb-2 w-100">{category}</button>
                        </div>    
                        )
                }
            </div>
            <div>
                <h2>Toolbar</h2>
                <div className="btn-toolbar bg-danger mb-2">
                    <div className="btn-group">
                        {
                            categories.map(category=>
                                <button key={category} className="btn btn-danger">{category}</button>)
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ol>
                        {
                            categories.map(category=>
                                <li key={category}>
                                    {category}
                                </li>)
                        }
                    </ol>
                </div>
            
            <div className="col">
                <select>
                    {
                      categories.map(category=>
                        <option key={category}>{category}</option>)  
                    }    
                </select>
            </div>
            <div className="col">
                <ul className="list-unstyled">
                 {
                    categories.map(category=>
                        <li key={category}><input type="checkbox" />{category}</li>)
                 }
                </ul>    
            </div>
            </div>
        </div>
    )
}