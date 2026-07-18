import "./stepcard.css";


function Stepcard({icon: Icon, numHeading, title,subtitle}){
    return(
       <div>
          <h2> {numHeading} </h2>
          <div>
            <Icon />
          </div>
          <p> {title}</p>
          <p> {subtitle} </p>
       </div>
    );
}

export default Stepcard;