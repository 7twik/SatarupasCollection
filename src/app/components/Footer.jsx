import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-purple-500 to-purple-300 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Satarupa's Collection</h2>
            <p className="text-sm text-purple-100">
              Empowering innovation through cutting-edge technology solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-purple-200 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-purple-200 transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-purple-200 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-purple-200 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-purple-200 transition-colors">
                Handcraft
              </Link></li>
              <li><Link href="/" className="hover:text-purple-200 transition-colors">
                Custom Design
              </Link></li>
              <li><Link href="/" className="hover:text-purple-200 transition-colors">
                Textile
              </Link></li>
              <li><Link href="/" className="hover:text-purple-200 transition-colors">
                Accessories
              </Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex flex-col md:flex-row ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 bg-purple-100 text-purple-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-300 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-700 text-white rounded-r-md hover:bg-purple-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-400 text-center text-sm">
          <p>© {new Date().getFullYear()} Satarupa &apos; s Collection. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-purple-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-purple-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

