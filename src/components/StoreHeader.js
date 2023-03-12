import './StoreHeader.css';

function StoreHeader ({ cartData }) {
    let totalUnitsInCart = Object.values(cartData).reduce((sum, { qty }) => {
        return sum + qty;
    }, 0);

    return <header>
        <h1 className="font-cursive" style={{ flexGrow: 1, alignText: 'center', width: '100%' }}>Shushan Headquarters</h1>
        
        <div className='cart' style={{ position: 'absolute', right: 40, top: 40  }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 'calc(6 * var(--unit))', height: 'calc(6 * var(--unit))' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            {
                totalUnitsInCart > 0
                    ? <div style={{
                        position: 'absolute', 
                        top: 0, 
                        right: -6, 
                        width: 'calc(4 * var(--unit))', 
                        height: 'calc(4 * var(--unit))', 
                        borderRadius: '50%', 
                        backgroundColor: 'var(--color-primary)', 
                        color: 'var(--color-white)', 
                        display: 'flex', 
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <b style={{fontSize: 'calc(2.5 * var(--unit))', fontWeight: 'var(--semi-bold)', color: 'white'}}>{totalUnitsInCart}</b>
                    </div>
                    : ''
            }
        </div>
    </header>
}


export default StoreHeader;
