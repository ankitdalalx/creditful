'use client';
export const runtime = 'edge';

import { useParams } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Mock data for credit cards (expanded with more details)
const creditCards = [
  { 
    id: 1, 
    name: 'Cash Back Master', 
    cashback: '5%', 
    annualFee: 0, 
    creditScore: 'Excellent', 
    type: 'Cashback',
    bank: 'CreditBank',
    description: 'Earn top-tier cash back on all your purchases with no annual fee.',
    pros: ['High cashback rate', 'No annual fee', 'Welcome bonus available'],
    cons: ['Requires excellent credit', 'Foreign transaction fees apply'],
    imageUrl: '/placeholder.svg?height=300&width=500'
  },
  { 
    id: 2, 
    name: 'Travel Elite', 
    cashback: '3%', 
    annualFee: 95, 
    creditScore: 'Good', 
    type: 'Travel',
    bank: 'Voyager Financial',
    description: 'Unlock premium travel perks and earn miles on every purchase.',
    pros: ['Travel insurance included', 'Airport lounge access', 'No foreign transaction fees'],
    cons: ['Annual fee', 'Lower rewards on non-travel purchases'],
    imageUrl: '/placeholder.svg?height=300&width=500'
  },
  // ... add more detailed card data for the other cards
]

export default function CardDetailsPage() {
  const params = useParams()
  const cardId = parseInt(params.id)
  const card = creditCards.find(c => c.id === cardId)

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">{card.name}</CardTitle>
            <CardDescription>{card.type} Card | {card.creditScore} Credit Score</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={card.imageUrl}
                alt={card.name}
                className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Card Details</h3>
                <p><strong>Cashback:</strong> {card.cashback}</p>
                <p><strong>Annual Fee:</strong> ${card.annualFee}</p>
                <p><strong>Issuing Bank:</strong> {card.bank}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p>{card.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pros</h3>
                <ul className="list-disc list-inside">
                  {card.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cons</h3>
                <ul className="list-disc list-inside">
                  {card.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>)
  );
}

