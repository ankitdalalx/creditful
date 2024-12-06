'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function RewardsCalculatorPage() {
  const [spending, setSpending] = useState('')
  const [rate, setRate] = useState('')
  const [result, setResult] = useState(null)

  const calculateRewards = () => {
    const spendingNum = parseFloat(spending)
    const rateNum = parseFloat(rate)

    if (isNaN(spendingNum) || isNaN(rateNum)) {
      alert('Please enter valid numbers')
      return
    }

    const rewards = spendingNum * (rateNum / 100)
    setResult(parseFloat(rewards.toFixed(2)))
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Rewards Calculator</CardTitle>
            <CardDescription>Calculate your potential credit card rewards.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="spending">Monthly Spending ($)</Label>
              <Input
                id="spending"
                type="number"
                placeholder="Enter your monthly spending"
                value={spending}
                onChange={(e) => setSpending(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rate">Reward Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                placeholder="Enter the reward rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)} />
            </div>
            <Button onClick={calculateRewards} className="w-full">Calculate</Button>
            {result !== null && (
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p className="text-lg font-semibold">Monthly Rewards: ${result}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>)
  );
}

