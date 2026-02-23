const Footer = () => {
    return (
        <section className="footer-section" id="footer">
            <footer className="footer border-top">
                <div className="footer-content col-12 col-md-12 col-lg-12 row mt-4 align-items-start">
                    <h3 className="footer-logo mb-4">TrackOn</h3>
                    <div className="col-3 col-md-3 col-lg-3">
                        <h4>Follow Us</h4>
                        <p>Twitter: @TrackOn</p>
                        <p>LinkedIn: TrackOn</p>
                    </div>
                    <div className="col-3 col-md-3 col-lg-3">
                        <h4>Contact Us</h4>
                        <p>Email: support@trackon.com</p>
                    </div>
                    <div className="col-3 col-md-3 col-lg-3">
                        <h4>Legal</h4>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
                    <div className="col-3 col-md-3 col-lg-3">
                        <h4>Company</h4>
                        <p>About Us</p>
                        <p>Careers</p>
                    </div>
                </div>
                <p className="footer-strip">© 2024 TrackOn. All rights reserved.</p>
            </footer>
        </section>
    )
}
export default Footer;