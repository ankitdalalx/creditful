import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Understanding Credit Card APR",
    description: "Learn what APR means and how it affects your credit card balance.",
    date: "2024-03-01",
    slug: "understanding-credit-card-apr"
  },
  {
    id: 2,
    title: "Maximizing Your Rewards Points",
    description: "Tips and tricks to get the most out of your credit card rewards program.",
    date: "2024-02-15",
    slug: "maximizing-your-rewards-points"
  },
  {
    id: 3,
    title: "Credit Score Myths Debunked",
    description: "Common misconceptions about credit scores and the truth behind them.",
    date: "2024-01-30",
    slug: "credit-score-myths-debunked"
  },
  {
    id: 4,
    title: "Choosing the Right Credit Card for Your Lifestyle",
    description: "How to select a credit card that aligns with your spending habits and financial goals.",
    date: "2024-01-15",
    slug: "choosing-the-right-credit-card"
  },
  {
    id: 5,
    title: "The Pros and Cons of Balance Transfers",
    description: "Explore the benefits and potential pitfalls of credit card balance transfers.",
    date: "2023-12-30",
    slug: "pros-and-cons-of-balance-transfers"
  }
]

export default function BlogListingPage() {
  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Creditful Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{post.description}</p>
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>)
  );
}

