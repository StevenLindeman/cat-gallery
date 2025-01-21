export default function CatCard(props) {
    return (
        <div className="card">
            <img src={props.cat.img.src} alt={props.cat.img.alt} className="card-image"/>
            <div className="info">
                <h2 className="name">{props.cat.name}</h2>
                <p><strong>Date of Birth:</strong> {props.cat.dob}</p>
                <p><strong>Coat:</strong> {props.cat.coat}</p>
                <p><strong>Owner:</strong> {props.cat.owner}</p>
            </div>
      </div>
    )
}