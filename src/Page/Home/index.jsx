import Layout from "../../Components/Layout";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="home-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">Horometros</h5>
                  <p className="card-text">
                    Control de maquinarias en tiempo real.
                  </p>
                <Link to="/horometro">
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">Depósitos</h5>
                  <p className="card-text">
                    Control de stock de repuestos de los depósitos.
                  </p>
                  <Link to="/depositos">
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">Torneria</h5>
                  <p className="card-text">
                    Control de stock de repuestos fabricados.
                  </p>
                    <Link to="/torneria">
                  <Button variant="success">Ver mas...</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
