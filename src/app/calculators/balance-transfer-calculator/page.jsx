'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function BalanceTransferCalculatorPage() {
  const [balance, setBalance] = useState('')
  const [fee, setFee] = useState('')
  const [rate, setRate] = useState('')
  const [months, setMonths] = useState('')
  const [result, setResult] = useState(null)

  const calculateBalanceTransfer = () => {
    const balanceNum = parseFloat(balance)
    const feeNum = parseFloat(fee)
    const rateNum = parseFloat(rate)
    const monthsNum = parseInt(months)

    if (isNaN(balanceNum) || isNaN(feeNum) || isNaN(rateNum) || isNaN(monthsNum)) {
      alert('Please enter valid numbers')
      return
    }

    const transferFee = balanceNum * (feeNum / 100)
    const monthlyRate = rateNum / 100 / 12
    const totalInterest = balanceNum * monthlyRate * monthsNum
    const totalCost = transferFee + totalInterest
    setResult(parseFloat(totalCost.toFixed(2)))
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Balance Transfer Calculator</CardTitle>
            <CardDescription>Calculate the cost of a balance transfer.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="balance">Balance to Transfer ($)</Label>
              <Input
                id="balance"
                type="number"
                placeholder="Enter the balance to transfer"
                value={balance}
                onChange={(e) => setBalance(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fee">Transfer Fee (%)</Label>
              <Input
                id="fee"
                type="number"
                placeholder="Enter the transfer fee percentage"
                value={fee}
                onChange={(e) => setFee(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rate">New Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                placeholder="Enter the new interest rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="months">Months until paid off</Label>
              <Input
                id="months"
                type="number"
                placeholder="Enter the number of months"
                value={months}
                onChange={(e) => setMonths(e.target.value)} />
            </div>
            <Button onClick={calculateBalanceTransfer} className="w-full">Calculate</Button>
            {result !== null && (
              <div className="mt-4 p-4 bg-secondary rounded-lg">
                <p className="text-lg font-semibold">Total Cost of Balance Transfer: ${result}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>)
  );
}

