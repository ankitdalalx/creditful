'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Calculators() {
  const [interestResult, setInterestResult] = useState(null)
  const [rewardsResult, setRewardsResult] = useState(null)
  const [balanceTransferResult, setBalanceTransferResult] = useState(null)

  const calculateInterest = (balance, rate, months) => {
    const monthlyRate = rate / 100 / 12
    const totalInterest = balance * monthlyRate * months
    setInterestResult(parseFloat(totalInterest.toFixed(2)))
  }

  const calculateRewards = (spending, rate) => {
    const rewards = spending * (rate / 100)
    setRewardsResult(parseFloat(rewards.toFixed(2)))
  }

  const calculateBalanceTransfer = (balance, fee, rate, months) => {
    const transferFee = balance * (fee / 100)
    const monthlyRate = rate / 100 / 12
    const totalInterest = balance * monthlyRate * months
    const totalCost = transferFee + totalInterest
    setBalanceTransferResult(parseFloat(totalCost.toFixed(2)))
  }

  return (
    (<Tabs defaultValue="interest" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="interest">Interest</TabsTrigger>
        <TabsTrigger value="rewards">Rewards</TabsTrigger>
        <TabsTrigger value="balance">Balance Transfer</TabsTrigger>
      </TabsList>
      <TabsContent value="interest">
        <Card>
          <CardHeader>
            <CardTitle>Interest Calculator</CardTitle>
            <CardDescription>Calculate the interest you ll pay on your credit card balance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="balance">Balance ($)</Label>
              <Input id="balance" type="number" placeholder="Enter your balance" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="rate">Interest Rate (%)</Label>
              <Input id="rate" type="number" placeholder="Enter the interest rate" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="months">Months</Label>
              <Input id="months" type="number" placeholder="Enter the number of months" />
            </div>
            <button
              className="bg-primary text-white px-4 py-2 rounded"
              onClick={() => {
                const balance = parseFloat((document.getElementById('balance')).value)
                const rate = parseFloat((document.getElementById('rate')).value)
                const months = parseFloat((document.getElementById('months')).value)
                calculateInterest(balance, rate, months)
              }}>
              Calculate
            </button>
            {interestResult !== null && (
              <p className="mt-4">Total Interest: ${interestResult}</p>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="rewards">
        <Card>
          <CardHeader>
            <CardTitle>Rewards Calculator</CardTitle>
            <CardDescription>Calculate your potential credit card rewards.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="spending">Monthly Spending ($)</Label>
              <Input id="spending" type="number" placeholder="Enter your monthly spending" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="rewardRate">Reward Rate (%)</Label>
              <Input id="rewardRate" type="number" placeholder="Enter the reward rate" />
            </div>
            <button
              className="bg-primary text-white px-4 py-2 rounded"
              onClick={() => {
                const spending = parseFloat((document.getElementById('spending')).value)
                const rate = parseFloat((document.getElementById('rewardRate')).value)
                calculateRewards(spending, rate)
              }}>
              Calculate
            </button>
            {rewardsResult !== null && (
              <p className="mt-4">Monthly Rewards: ${rewardsResult}</p>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="balance">
        <Card>
          <CardHeader>
            <CardTitle>Balance Transfer Calculator</CardTitle>
            <CardDescription>Calculate the cost of a balance transfer.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="transferBalance">Balance to Transfer ($)</Label>
              <Input
                id="transferBalance"
                type="number"
                placeholder="Enter the balance to transfer" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="transferFee">Transfer Fee (%)</Label>
              <Input
                id="transferFee"
                type="number"
                placeholder="Enter the transfer fee percentage" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="transferRate">New Interest Rate (%)</Label>
              <Input id="transferRate" type="number" placeholder="Enter the new interest rate" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="transferMonths">Months until paid off</Label>
              <Input
                id="transferMonths"
                type="number"
                placeholder="Enter the number of months" />
            </div>
            <button
              className="bg-primary text-white px-4 py-2 rounded"
              onClick={() => {
                const balance = parseFloat((document.getElementById('transferBalance')).value)
                const fee = parseFloat((document.getElementById('transferFee')).value)
                const rate = parseFloat((document.getElementById('transferRate')).value)
                const months = parseFloat((document.getElementById('transferMonths')).value)
                calculateBalanceTransfer(balance, fee, rate, months)
              }}>
              Calculate
            </button>
            {balanceTransferResult !== null && (
              <p className="mt-4">Total Cost of Balance Transfer: ${balanceTransferResult}</p>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>)
  );
}

