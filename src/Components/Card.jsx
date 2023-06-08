export function Cards({title,description,image}){
    return(
        <div className="card">
            <img src={image} alt={title} className="card-image"/>
            <div className="card-overlay">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}