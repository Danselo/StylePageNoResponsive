export function StyleSection({title,description,image}){
    return(
        <section className="style-section">
            <img src={image} alt={title} className="style-section-image" />
            <div className="style-section-line">
                <h2 className="style-section-title">{title}</h2>
                <p className="style-section-description">{description}</p>
            </div>
        </section>
    )

}