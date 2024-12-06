import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogSection } from '@/components/blog-section'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Zap, Shield, TrendingUp, Calculator } from 'lucide-react'
import '/styles/globals.css'


export default function Home() {
  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlock Your Financial Potential</h1>
            <p className="text-xl mb-8">Discover credit cards tailored to your lifestyle and goals.</p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/explore">Start Exploring <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>

        {/* Featured Cards Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Credit Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Cash Back Master", description: "Earn up to 5% on everyday purchases" },
                { title: "Travel Elite", description: "Rack up miles with every swipe" },
                { title: "Student Starter", description: "Build credit with no annual fee" }
              ].map((card, index) => (
                <Card
                  key={index}
                  className="card-glow bg-gradient-to-br from-primary/80 to-accent/80 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl">{card.title}</CardTitle>
                    <CardDescription className="text-primary-foreground/80">{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-white/20 rounded-lg mb-4"></div>
                    <p className="text-sm">Perfect for: {index === 0 ? "Everyday spenders" : index === 1 ? "Frequent travelers" : "Students"}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="secondary" className="w-full">
                      <Link href={`/explore/${index + 1}`}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/explore">View All Cards</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Creditful</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-secondary rounded-lg">
                <Zap className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Smart Recommendations</h3>
                <p className="text-muted-foreground">Get card suggestions tailored to your spending habits and credit profile.</p>
              </div>
              <div className="text-center p-6 bg-secondary rounded-lg">
                <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Secure Comparisons</h3>
                <p className="text-muted-foreground">Compare cards side-by-side with our secure and unbiased platform.</p>
              </div>
              <div className="text-center p-6 bg-secondary rounded-lg">
                <TrendingUp className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Financial Growth</h3>
                <p className="text-muted-foreground">Learn how to maximize rewards and improve your credit score.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculators Section */}
        <section id="calculators" className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Credit Card Calculators</h2>
            <div className="text-center">
              <p className="text-xl mb-8">Use our calculators to make informed decisions about your credit cards.</p>
              <Button asChild size="lg">
                <Link href="/calculators">
                  <Calculator className="mr-2 h-4 w-4" />
                  Explore Calculators
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <BlogSection />
      </main>
      <Footer />
    </div>)
  );
}

