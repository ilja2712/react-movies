export function Card(props) {
    return <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
      </div>
      <img className="activator" src={props.poster}></img>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.name}</span>
        <p><a href="#">{props.year}</a></p>
      </div>
    </div>
              
}