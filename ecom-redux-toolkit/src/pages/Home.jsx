
import Product from '../components/Product'

const Home = () => {

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <h2 className='heading'>Redux Toolkit E-commerce Store using fake API</h2> 
                    </div>
                </div>
                <section>
                    <Product />
                </section>
            </div>
        </div>
    )
}

export default Home