'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function InterestCalculatorPage() {
  const [balance, setBalance] = useState('')
  const [rate, setRate] = useState('')
  const [months, setMonths] = useState('')
  const [result, setResult] = useState(null)

  const calculateInterest = () => {
    const balanceNum = parseFloat(balance)
    const rateNum = parseFloat(rate)
    const monthsNum = parseInt(months)

    if (isNaN(balanceNum) || isNaN(rateNum) || isNaN(monthsNum)) {
      alert('Please enter valid numbers')
      return
    }

    const monthlyRate = rateNum / 100 / 12
    const totalInterest = balanceNum * monthlyRate * monthsNum
    setResult(parseFloat(totalInterest.toFixed(2)))
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Interest Calculator</CardTitle>
            <CardDescription>Calculate the interest you ll pay on your credit card balance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="balance">Balance ($)</Label>
              <Input
                id="balance"
                type="number"
                placeholder="Enter your balance"
                value={balance}
                onChange={(e) => setBalance(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rate">Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                placeholder="Enter the interest rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="months">Months</Label>
              <Input
                id="months"
                type="number"
                placeholder="Enter the number of months"
                value={months}
                onChange={(e) => setMonths(e.target.value)} />
            </div>
            <Button onClick={calculateInterest} className="w-full">Calculate</Button>
            {result !== null && (
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p className="text-lg font-semibold">Total Interest: ${result}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>)
  );
}

