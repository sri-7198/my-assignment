import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-6 border-b bg-white">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent shadow-md" />
        <h1 className="text-2xl font-semibold">Your Product</h1>
      </div>

      <nav>
        <ul className="flex gap-6 text-sm">
          <li>
            <a href="#features" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <button className="px-4 py-2 bg-primary text-white rounded-md">Get Started</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
