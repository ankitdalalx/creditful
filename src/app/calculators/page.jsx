import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const calculators = [
  { 
    name: 'Interest Calculator', 
    description: 'Calculate the interest you\'ll pay on your credit card balance.',
    link: '/calculators/interest-calculator'
  },
  { 
    name: 'Rewards Calculator', 
    description: 'Estimate your potential credit card rewards based on your spending.',
    link: '/calculators/rewards-calculator'
  },
  { 
    name: 'Balance Transfer Calculator', 
    description: 'Determine if a balance transfer could save you money on interest.',
    link: '/calculators/balance-transfer-calculator'
  },
]

export default function CalculatorsPage() {
  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Credit Card Calculators</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calculators.map((calc, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{calc.name}</CardTitle>
                <CardDescription>{calc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={calc.link}>Use Calculator</Link>
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

