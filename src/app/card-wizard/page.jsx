'use client';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const steps = [
  { id: 'personal', title: 'Personal Information' },
  { id: 'profession', title: 'Profession' },
  { id: 'financial', title: 'Financial Information' },
  { id: 'lifestyle', title: 'Lifestyle' },
  { id: 'recommendations', title: 'Card Recommendations' },
]

export default function CardWizard() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    income: '',
    familyMembers: '',
    expenses: '',
    hasCar: false,
  })

  useEffect(() => {
    const savedData = localStorage.getItem('cardWizardData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
      localStorage.setItem('cardWizardData', JSON.stringify(formData))
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (<>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange} />
            </div>
          </div>
        </>);
      case 1:
        return (<>
          <div className="space-y-4">
            <Label>Profession</Label>
            <RadioGroup
              value={formData.profession}
              onValueChange={(value) => handleSelectChange('profession', value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="government" id="government" />
                <Label htmlFor="government">Government Job</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <Label htmlFor="private">Private Sector</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="self-employed" id="self-employed" />
                <Label htmlFor="self-employed">Self-employed</Label>
              </div>
            </RadioGroup>
          </div>
        </>);
      case 2:
        return (<>
          <div className="space-y-4">
            <div>
              <Label htmlFor="income">Annual Income</Label>
              <Input
                id="income"
                name="income"
                type="number"
                value={formData.income}
                onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="familyMembers">Number of Family Members</Label>
              <Input
                id="familyMembers"
                name="familyMembers"
                type="number"
                value={formData.familyMembers}
                onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="expenses">Monthly Expenses</Label>
              <Input
                id="expenses"
                name="expenses"
                type="number"
                value={formData.expenses}
                onChange={handleInputChange} />
            </div>
          </div>
        </>);
      case 3:
        return (<>
          <div className="space-y-4">
            <Label>Do you own a car?</Label>
            <RadioGroup
              value={formData.hasCar ? 'yes' : 'no'}
              onValueChange={(value) => handleSelectChange('hasCar', value === 'yes' ? 'true' : 'false')}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="car-yes" />
                <Label htmlFor="car-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="car-no" />
                <Label htmlFor="car-no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </>);
      case 4:
        return <CardRecommendations formData={formData} />;
      default:
        return null
    }
  }

  return (
    (<div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Card Wizard</CardTitle>
            <CardDescription>Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}</CardDescription>
          </CardHeader>
          <CardContent>
            {renderStep()}
            <div className="flex justify-between mt-6">
              {currentStep > 0 && (
                <Button onClick={handlePrevious}>Previous</Button>
              )}
              {currentStep < steps.length - 1 ? (
                <Button onClick={handleNext}>Next</Button>
              ) : (
                <Button onClick={() => router.push('/')}>Finish</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>)
  );
}

function CardRecommendations({
  formData
}) {
  const [loading, setLoading] = useState(true)
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    // Simulate API call for recommendations
    setTimeout(() => {
      const mockRecommendations = [
        { id: 1, name: 'Cash Back Master', description: 'Great for everyday purchases' },
        { id: 2, name: 'Travel Elite', description: 'Perfect for frequent travelers' },
        { id: 3, name: 'Student Starter', description: 'Ideal for students building credit' },
      ]
      setRecommendations(mockRecommendations)
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return <div className="text-center">Loading recommendations...</div>;
  }

  return (
    (<div className="space-y-4">
      <h3 className="text-lg font-semibold">Based on your information, we recommend:</h3>
      {recommendations.map((card, index) => (
        <div
          key={card.id}
          className="p-4 border rounded-lg shadow-sm animate-fadeIn"
          style={{animationDelay: `${index * 200}ms`}}>
          <h4 className="font-semibold">{card.name}</h4>
          <p>{card.description}</p>
        </div>
      ))}
    </div>)
  );
}

