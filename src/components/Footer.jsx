import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img src="https://s3-alpha-sig.figma.com/img/c323/e614/5fe44fe9aa4ff0011347ab73c5d6358d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oy4PEg3q-kV82AfbHmkKfKm418UHbAjR61Rh3mH9p~RsoHIyBRTZxLyssrOOFQLEQHjQqfqxbA2eZtDbhKtmimbaDFIGeN3MknNaVKjvOgsm60CIDgtChvY6F5SNa~PfcDwzNvhhzUuBoST1BzcRa2qCuGe8SJ7mY~YEhrHFLx9l0ZV4ftOxy9bgo~XZXT2dOCg~SCh3OSZdUSWUo0rruD9qdJgGiwKbgBAo8hNHb3VBecsCUDVuIWTNZM--mDa5KRHxiEH2yX6ZiZ0AUKNX9m6PHFiQIW6XRnfu2~2aopdGjp3LvlXUgQREC0hCrt79koNEsHjJCf82XaGCY0Uobw__" alt="Order Logo" />
          <div className="app-buttons">
            <img src="app-store-badge.png" alt="Download on the App Store" />
            <img src="google-play-badge.png" alt="Get it on Google Play" />
          </div>
          <p>Company # 490039-445, Registered with</p>
          <p>House of companies.</p>
        </div>

        <div className="footer-section">
          <h3>Get Exclusive Deals in your inbox</h3>
          <div className="email-signup">
            <input type="email" placeholder="youremail@gmail.com" />
            <button>Subscribe</button>
          </div>
          <p className="small-text">We won't spam, read our email policy</p>
          <div className="social-icons">
            <img src="facebook-icon.png" alt="Follow us on Facebook" />
            <img src="instagram-icon.png" alt="Follow us on Instagram" />
            <img src="twitter-icon.png" alt="Follow us on Twitter" />
            <img src="tiktok-icon.png" alt="Follow us on TikTok" />
          </div>
        </div>

        <div className="footer-section">
          <h3>Legal Pages</h3>
          <ul>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Modern Slavery Statement</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Important Links</h3>
          <ul>
            <li><a href="#">Get help</a></li>
            <li><a href="#">Add your restaurant</a></li>
            <li><a href="#">Sign up to deliver</a></li>
            <li><a href="#">Create a business account</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
    <p>Order uk Copyright 2024, All Rights Reserved.</p>
    <div className="bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms</a>
      <a href="#">Pricing</a>
      <a href="#">Do not sell or share my personal information</a>
    </div>
  </div>
    </footer>
  );
};

export default Footer;