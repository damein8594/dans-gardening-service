import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-950 py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Business name and area */}
          <div className="text-center md:text-left">
            <h3 className="text-yellow-400 font-bold text-lg">
              Dan's LS12 Gardening Service
            </h3>
            <p className="text-green-300 text-sm mt-1">
              Serving LS12 and surrounding areas
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1KT7uZtiMX/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-yellow-400 text-2xl hover:text-yellow-300 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/dangardenls12?igsh=czVLajBnb2siN2Rt"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-yellow-400 text-2xl hover:text-yellow-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-6 text-center">
          <p className="text-green-400 text-sm">
            © 2026 Dan's LS12 Gardening Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
