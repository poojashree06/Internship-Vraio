import Button from "../Pages/Button";

export default function Jumbotron(props){
    return(
        <>
        <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">{props.data.title}</h1>
          <p className="lead text-muted " >
            {props.data.content}
          </p>
          <p className=''>
            <Button btncolor="btn-primary" text="Main call action"/>
            <Button btncolor="btn-secondary" text="Secondary action"/>
          </p>
        </div>
        
      </section>
        </>
    )
};