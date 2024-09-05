import PropTypes from "prop-types";

function List(props){

    const {items, category} = props;
    
    const listItems = items.map(item => 
    <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b>
    </li>);

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.defaultProps = {
    items: [],
    category: "Category"
};

// Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead as shown below.
// const {items = [], category = "Category"} = props;

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
    category: PropTypes.string
}

export default List;

