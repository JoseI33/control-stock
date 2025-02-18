import PropTypes from 'prop-types';
import  Navbar  from '../Navbar'

  

const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        <div style={{ marginTop: '70px', padding: '20px' }}>
          {children} {/* Ahora children está correctamente definido */}
        </div>
      </>
            );
  };

  Layout.propTypes = {
    children: PropTypes.node.isRequired,  // children debe ser un nodo React válido
  };

export default Layout