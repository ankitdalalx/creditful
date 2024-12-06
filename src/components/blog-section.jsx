import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "Understanding Credit Card APR",
    description: "Learn what APR means and how it affects your credit card balance.",
    slug: "understanding-credit-card-apr"
  },
  {
    id: 2,
    title: "Maximizing Your Rewards Points",
    description: "Tips and tricks to get the most out of your credit card rewards program.",
    slug: "maximizing-your-rewards-points"
  },
  {
    id: 3,
    title: "Credit Score Myths Debunked",
    description: "Common misconceptions about credit scores and the truth behind them.",
    slug: "credit-score-myths-debunked"
  }
]

export function BlogSection() {
  return (
    (<section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Financial Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                  Read More
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>)
  );
}

