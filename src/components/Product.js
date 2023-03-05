import './Product.css';
const Product = (props) => {
    return <li>
    <div>
        <img
            alt={props.description}
            src={props.image}
        />
    </div>
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <div><h3>{props.name}</h3></div>
        <div><p>{props.description}</p></div>
        <div style={{flexGrow: 1}}><b>${props.price}</b></div>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row-reverse',
                flexShrink: 1,
                color: 'var(--color-primary)',
            }}
        >

            <svg onClick={props.addRemoveProduct.bind(this, props.id, 1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{'width': 'calc(8 * var(--unit))', cursor: 'pointer'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div style={{padding: 'calc(1.5 * var(--unit))', textAlign: "center"}}>
                <b style={{ fontSize: 'calc(3.5 * v(--unit))', fontWeight: 'var(--semi-bold)', '--text-opacity': '.2'}}>{(props.cartData && props.cartData.qty) || 0}</b>
            </div>
            <svg onClick={props.addRemoveProduct.bind(this, props.id, -1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{'width': 'calc(8 * var(--unit))', cursor: 'pointer'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    </div>
</li>
}


export default Product;
