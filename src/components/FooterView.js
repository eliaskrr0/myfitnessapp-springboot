import React from 'react';
import './FooterView.css';  // Si tienes estilos adicionales para el footer

const FooterView = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2024 Mi Sitio. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Inicio</a></li>
              <li><a href="/about" className="text-light">Acerca de</a></li>
              <li><a href="/contact" className="text-light">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;
