import React from 'react'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="mailto:mahmoud.jaber@email.com" className="hover:text-primary-500 transition-colors">
            <Mail size={24} />
          </a>
          <a href="https://linkedin.com/in/mamjaber" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/mamjaber" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
            <Twitter size={24} />
          </a>
        </div>
        <p className="text-sm text-secondary-400">
          © 2025 Mahmoud Jaber. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

