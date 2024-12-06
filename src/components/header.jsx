import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, Wand2 } from 'lucide-react'

export function Header() {
  return (
    (<header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Creditful
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
            <li><Link
              href="/explore"
              className="text-gray-600 hover:text-primary transition-colors">Explore</Link></li>
            <li><Link
              href="/calculators"
              className="text-gray-600 hover:text-primary transition-colors">Calculators</Link></li>
            <li><Link
              href="/blog"
              className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Button asChild variant="outline" className="group">
            <Link href="/card-wizard">
              <Wand2 className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Card Wizard
            </Link>
          </Button>
          <Button>Sign Up</Button>
        </div>
        <button className="md:hidden text-gray-600">
          <Menu size={24} />
        </button>
      </div>
    </header>)
  );
}

