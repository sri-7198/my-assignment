import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-sm text-gray-600 border-t text-center">
      © {new Date().getFullYear()} Your Name
    </footer>
  );
}
