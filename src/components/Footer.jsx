import React from 'react';
import '../styles/Footer.css'; // Asegúrate de crear este archivo para los estilos del pie de página

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Contacto: info@tiendaropaonline.com</p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Tienda Ropa Online. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;