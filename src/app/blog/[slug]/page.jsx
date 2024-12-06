import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data for blog posts (same as in the listing page)
const blogPosts = [
  {
    id: 1,
    title: "Understanding Credit Card APR",
    description: "Learn what APR means and how it affects your credit card balance.",
    date: "2024-03-01",
    slug: "understanding-credit-card-apr",
    content: "APR stands for Annual Percentage Rate. It's the yearly interest rate you'll pay if you carry a balance on your credit card. Understanding APR is crucial because it directly impacts how much you'll pay in interest over time. A higher APR means you'll pay more in interest, while a lower APR can save you money. It's important to note that if you pay your full balance each month, you can avoid paying interest altogether. When comparing credit cards, always look at the APR as one of the key factors in your decision-making process."
  },
  {
    id: 2,
    title: "Maximizing Your Rewards Points",
    description: "Tips and tricks to get the most out of your credit card rewards program.",
    date: "2024-02-15",
    slug: "maximizing-your-rewards-points",
    content: "To maximize your credit card rewards, start by choosing a card that aligns with your spending habits. Use your card for all eligible purchases, but be sure to pay off the balance in full each month to avoid interest charges. Take advantage of bonus categories and special promotions offered by your card issuer. Consider using your points for travel or gift cards, as these often provide the best value. Don't let your points expire, and always read the fine print to understand any restrictions or limitations on redeeming your rewards."
  },
  {
    id: 3,
    title: "Credit Score Myths Debunked",
    description: "Common misconceptions about credit scores and the truth behind them.",
    date: "2024-01-30",
    slug: "credit-score-myths-debunked",
    content: "There are many myths surrounding credit scores. One common misconception is that checking your own credit score lowers it - this is false. Soft inquiries, like checking your own score, don't affect your credit. Another myth is that you only have one credit score. In reality, you have multiple scores from different credit bureaus. It's also not true that closing old credit cards always improves your score; in fact, it can sometimes lower your score by reducing your available credit. Understanding these truths can help you make better decisions about managing your credit."
  },
  {
    id: 4,
    title: "Choosing the Right Credit Card for Your Lifestyle",
    description: "How to select a credit card that aligns with your spending habits and financial goals.",
    date: "2024-01-15",
    slug: "choosing-the-right-credit-card",
    content: "Selecting the right credit card depends on your individual needs and spending habits. If you frequently travel, look for a card with travel rewards and no foreign transaction fees. For everyday spenders, a cash back card might be more beneficial. Students or those new to credit should consider cards designed for building credit. Always compare annual fees, interest rates, and reward structures. Don't be swayed by flashy sign-up bonuses alone; consider the long-term value the card provides. Remember, the best card for you is one that you'll use responsibly and that aligns with your financial goals."
  },
  {
    id: 5,
    title: "The Pros and Cons of Balance Transfers",
    description: "Explore the benefits and potential pitfalls of credit card balance transfers.",
    date: "2023-12-30",
    slug: "pros-and-cons-of-balance-transfers",
    content: "Balance transfers can be a useful tool for managing credit card debt, but they come with both advantages and disadvantages. On the plus side, they can help you save money on interest, especially if you qualify for a 0% introductory APR. This can make it easier to pay down your debt faster. However, balance transfers often come with fees, typically 3-5% of the transferred amount. It's crucial to calculate whether the potential interest savings outweigh these fees. Additionally, if you don't pay off the balance before the introductory period ends, you could face high interest rates. Balance transfers require discipline and a solid repayment plan to be truly beneficial."
  }
]

export default function BlogPostPage({
  params
}) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">{post.title}</CardTitle>
            <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">{post.description}</p>
            <div className="prose max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>)
  );
}

