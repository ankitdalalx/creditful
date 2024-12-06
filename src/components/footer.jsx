import Link from 'next/link'

export function Footer() {
  return (
    (<footer className="bg-primary text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Creditful</h3>
            <p className="text-sm opacity-80">Explore the best credit cards tailored for you.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link
                href="/"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link
                href="/explore"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity">Explore Cards</Link></li>
              <li><Link
                href="#calculators"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity">Calculators</Link></li>
              <li><Link
                href="#blog"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link
                href="#"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity">Terms of Service</Link></li>
              <li><Link
                href="#"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link
                href="#"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity">Twitter</Link></li>
              <li><Link
                href="#"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity">Facebook</Link></li>
              <li><Link
                href="#"
                className="text-sm opacity-80 hover:opacity-100 transition-opacity">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-80">&copy; 2024 Creditful. All rights reserved.</p>
        </div>
      </div>
    </footer>)
  );
}

