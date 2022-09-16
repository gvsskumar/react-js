export function DataBindStateComponent(){
    var topic = [
        {title:"HTML",description:"It is Markup Language"},
        {title:"React",description:"IT is Javascript Library"}
    ]
    return(
        <div className="container-fluid mt-2">
            <dl>
                {
                    topic.map(item=>
                        <>
                        <dt>{item.title}</dt>
                        <dd>{item.description}</dd>
                        </>
                        )
                }
            </dl>
            {
                topic.map(item=>
                    <details>
                        <summary>{item.title}</summary>
                        <p>{item.description}</p>
                    </details>
                    )
            }
        </div>
    )
}