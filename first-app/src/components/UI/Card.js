import "./Card.css";

const Card = (props) => {

    // custom component can't be defined like normal html e.g. <div className="...">...
    // use two css definitions from Card.css and props 
    const classes = 'card ' + props.className

    return (
        // in order to be a wrapper
        // every component can receive
        // children -> reserved name -> children: content between the tags of a custom component
        <div className={classes}>{props.children}</div>
    );
}

export default Card;