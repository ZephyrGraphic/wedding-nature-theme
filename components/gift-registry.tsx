"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Home, Plane, Coffee } from "lucide-react"

export default function GiftRegistry() {
  const [activeTab, setActiveTab] = useState<string>("monetary")

  const registryOptions = [
    {
      id: "monetary",
      title: "Monetary Gift",
      icon: <Gift className="h-6 w-6" />,
      description: "Help us start our new life together",
      details: (
        <div className="space-y-4">
          <p>If you wish to give a monetary gift, you may do so through the following methods:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6">
                <h4 className="font-medium text-lg mb-2 text-green-700">Bank Transfer</h4>
                <p className="text-sm text-muted-foreground mb-4">Bank: Example Bank</p>
                <p className="text-sm text-muted-foreground mb-4">Account: 1234 5678 9012 3456</p>
                <p className="text-sm text-muted-foreground">Name: Sarah & John</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6">
                <h4 className="font-medium text-lg mb-2 text-green-700">Digital Wallet</h4>
                <p className="text-sm text-muted-foreground mb-4">PayPal: example@email.com</p>
                <p className="text-sm text-muted-foreground">Venmo: @example-handle</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "honeymoon",
      title: "Honeymoon Fund",
      icon: <Plane className="h-6 w-6" />,
      description: "Help us create unforgettable memories",
      details: (
        <div className="space-y-4">
          <p>
            We're planning our dream honeymoon to Bali! Your contribution will help make our trip even more special.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-medium text-lg mb-2 text-green-700">Romantic Dinner</h4>
                <p className="text-sm text-muted-foreground mb-2">$100</p>
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                  Gift This
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-medium text-lg mb-2 text-green-700">Spa Day</h4>
                <p className="text-sm text-muted-foreground mb-2">$150</p>
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                  Gift This
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-medium text-lg mb-2 text-green-700">Scuba Diving</h4>
                <p className="text-sm text-muted-foreground mb-2">$200</p>
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                  Gift This
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "charity",
      title: "Charity Donation",
      icon: <Home className="h-6 w-6" />,
      description: "Support causes close to our hearts",
      details: (
        <div className="space-y-4">
          <p>
            In lieu of traditional gifts, consider donating to these environmental charities that are meaningful to us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6">
                <h4 className="font-medium text-lg mb-2 text-green-700">Rainforest Trust</h4>
                <p className="text-sm text-muted-foreground mb-4">Help protect endangered forests and wildlife</p>
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                  Donate
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6">
                <h4 className="font-medium text-lg mb-2 text-green-700">Ocean Conservation</h4>
                <p className="text-sm text-muted-foreground mb-4">Support marine life protection efforts</p>
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                  Donate
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      id: "registry",
      title: "Gift Registry",
      icon: <Coffee className="h-6 w-6" />,
      description: "Browse our wish list",
      details: (
        <div className="space-y-4">
          <p>We've created registries at the following stores:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-medium text-lg mb-2 text-green-700">Amazon</h4>
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                  View Registry
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-medium text-lg mb-2 text-green-700">Target</h4>
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                  View Registry
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-green-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-medium text-lg mb-2 text-green-700">Crate & Barrel</h4>
                <Button variant="outline" className="w-full border-green-300 text-green-700 hover:bg-green-50">
                  View Registry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {registryOptions.map((option) => (
          <Button
            key={option.id}
            variant={activeTab === option.id ? "default" : "outline"}
            className={`flex items-center gap-2 ${activeTab === option.id ? "bg-green-700 hover:bg-green-800" : "border-green-300 text-green-700 hover:bg-green-50"}`}
            onClick={() => setActiveTab(option.id)}
          >
            {option.icon}
            <span>{option.title}</span>
          </Button>
        ))}
      </div>

      <div className="mt-6">{registryOptions.find((option) => option.id === activeTab)?.details}</div>
    </div>
  )
}

