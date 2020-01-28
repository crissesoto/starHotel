import React from 'react';
import { MDBFooter, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="text-center font-small special-color mt-auto">
            <div className="p-4 text-center">
                <MDBIcon fab icon="facebook" className="mr-3"/>
                <MDBIcon fab icon="twitter" className="mr-3"/>
                <MDBIcon fab icon="instagram" className="mr-3"/>
            </div>
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/crissesoto"> Crisse Soto </a>
            </p>
        </MDBFooter>
    );
}

export default Footer;