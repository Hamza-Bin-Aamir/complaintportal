function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <div className="FooterContainer">
        <div className="FooterSection">
          <h4>quick links</h4>
          <ul>
            <li><a href="#idk">idk</a></li>
            <li><a href="#thiswebsite">this website</a></li>
            <li><a href="#aintthat">aint that</a></li>
            <li><a href="#deep">deep</a></li>
          </ul>
        </div>

        <div className="FooterSection">
          <h4>contact</h4>
          <p>email: <a href="mailto:support@complaintportal.com">osmioushamza@gmail.com</a></p>
          <p>phone: <a href="tel:+923325353590">+92 (332) 5353590</a></p>
        </div>

        <div className="FooterSection">
          <h4>follow the amazing creator</h4>
          <div className="SocialLinks">
            <a href="http://github.com/Hamza-Bin-Aamir/" target="_blank" rel="noopener noreferrer">github</a>
            <a href="https://www.instagram.com/hamzabaamir" target="_blank" rel="noopener noreferrer">instagram</a>
            <a href="https://www.linkedin.com/in/hamza-b-aamir/" target="_blank" rel="noopener noreferrer">twt for nerds</a>
          </div>
        </div>
      </div>

      <div className="FooterBottom">
        <p>&copy; {currentYear} hamza baamir. all rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
