import './Product.css';
const Product = () => {
    return  <li>
    <div>
        <img
            alt="Handmade Belgian Dark Chocolate Mask Pop"
            src="./images/choc-mask.jpg"
        />
    </div>
    <div style={{'display': 'flex', 'flex-direction': 'column'}}>
        <div><h3>Chocolate Mask</h3></div>
        <div><p>Handmade Belgian Dark Chocolate Mask Pop</p></div>
        <div style={{'flex-grow': 1}}><b>$3.25</b></div>
        <div
            style={{
                'display': 'flex',
                'flex-direction': 'row-reverse',
                'flex-shrink': 1
            }}
        >
            <div className="plus"><div>+</div></div>
            <div style={{'margin': '0.4rem 0.5rem 0'}}>
                <b>1</b>
            </div>
            <div className="minus"><div>-</div></div>
        </div>
    </div>
</li>
}


export default Product;