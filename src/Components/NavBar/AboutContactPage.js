export default function AboutContactPage(props){

    if (props.isTrue)
        return(
            <div className="about-contact">
                <h5 id="about-contact">About Page</h5>
            </div>
        )
    else 
        return(
            <div className="about-contact">
                <h5 id="about-contact">Contact Page</h5>
            </div>
        )
}