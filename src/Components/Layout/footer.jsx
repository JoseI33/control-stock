
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer mt-5 fixed-bottom">
            <footer className="py-3 bg-dark text-white-50 text-center ">
                <Container fluid>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-6">
                            <h5>TM Roldan SRL</h5>
                            <p>© 2025. Todos los derechos reservados.</p>
                        </div>
                        </div>
                    </Container>
            </footer>
        </div>
    );
    }

export default Footer;
