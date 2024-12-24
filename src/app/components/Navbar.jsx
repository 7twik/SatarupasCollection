'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useStateAuth } from '../data/Context'
import { Badge } from "@/components/ui/badge"
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Items', href: '/items' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, error, isLoading } = useUser();
  const {data}=useStateAuth();

  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-500 to-purple-300 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            CoolBrand
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavItem key={item.name} href={item.href}>
                {item.name}
              </NavItem>
            ))}
            {isLoading? <div>Loading...</div> : 
        (user)?
        <>
          <NavItem href="/profile">Profile <Badge variant="outline">{data.length}</Badge></NavItem>
          <NavItem href="/api/auth/logout">Logout</NavItem>
        </>:
        <NavItem href="/api/auth/login">Login</NavItem>}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} items={navItems} />
      )}
    </nav>
  )
}

function NavItem({ href, children }) {
  return (
    <Link href={href} className="relative group">
      <span className="text-white text-lg">{children}</span>
      <motion.span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full"
        initial={{ width: '0%' }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}

function MobileMenu({ isOpen, setIsOpen, items }) {
  const { user, error, isLoading } = useUser();
  return (
    <motion.div
      className="md:hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        {isLoading? <div>Loading...</div> : 
        (user)?
        <>
          <Link href="/profile" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition duration-300">Profile <Badge variant="outline">{data.length}</Badge> </Link>
          <Link href="/api/auth/logout" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition duration-300">Logout</Link>
        </>:
        <Link href="/api/auth/login" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition duration-300">Login</Link>}
      </div>
    </motion.div>
  )
}

