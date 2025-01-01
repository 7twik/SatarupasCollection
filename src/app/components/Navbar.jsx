"use client";

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useStateAuth } from '../data/Context'
import { Badge } from "../../components/ui/badge"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Items', href: '/items' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null);
  async function kind(){
    const usr=await fetch('/api/kinde').then((res) => res.json());
    console.log(usr);
    const us=await usr.user;
    setUser(us);
  }
  useEffect(() => {
    kind();
  }, []);
  
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
            {
        (user!==undefined&&user!==null&&user.email!="")?
        <>
          <NavItem href="/profile">Profile <Badge variant="outline">{data.length}</Badge></NavItem>
          {/*  eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <LogoutLink>Logout</LogoutLink>
        </>:
        <>
        {/*  eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <LoginLink>Sign in</LoginLink>
        </>}
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
        (user!==undefined&&user!==null&&user.email!="")?
        <MobileMenu log={true} isOpen={isOpen} setIsOpen={setIsOpen} items={navItems} />:
        <MobileMenu log={false} isOpen={isOpen} setIsOpen={setIsOpen} items={navItems} />
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

function MobileMenu({ log,isOpen, setIsOpen, items }) {
 
  
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
        {
        (log==true)?
        <>
          <Link href="/profile" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white hover:bg-opacity-20 transition duration-300">Profile & Cart </Link>
          <LogoutLink>Logout</LogoutLink>
        </>:
        <>
        {/*  eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <LoginLink>Login</LoginLink>
        </>}
          
      </div>
    </motion.div>
  )
}

