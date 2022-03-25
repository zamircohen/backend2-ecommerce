import ProductListItem from '../components/ProductListItem.js';
import PRODUCTS from '../products.js';

const Home = () => (
  <>
    <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
            </div>
        </div>
    </header>
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                { PRODUCTS.map(product => <ProductListItem key={product.sku} {...product} />) }
            </div>
        </div>
    </section>
  </>
);

export default Home;
