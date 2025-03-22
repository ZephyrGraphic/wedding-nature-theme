"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Check } from "lucide-react"

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "0",
    message: "",
    dietaryRestrictions: "",
    songRequest: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attending: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success message
    toast({
      title: "RSVP Submitted",
      description: "Thank you for your response!",
    })

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center border border-green-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif text-green-700 mb-2">Thank You!</h3>
        <p className="text-green-600 mb-6">Your RSVP has been submitted successfully.</p>
        <p className="text-sm text-muted-foreground mb-6">
          We're looking forward to celebrating with you in nature! You'll receive a confirmation email shortly.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="text-green-700 border-green-300 hover:bg-green-50"
        >
          Submit Another Response
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg border border-green-200">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="border-green-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="border-green-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Will you attend?</Label>
          <RadioGroup value={formData.attending} onValueChange={handleRadioChange} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="attending-yes" />
              <Label htmlFor="attending-yes" className="cursor-pointer">
                Yes, I'll be there
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="attending-no" />
              <Label htmlFor="attending-no" className="cursor-pointer">
                Sorry, I can't make it
              </Label>
            </div>
          </RadioGroup>
        </div>

        {formData.attending === "yes" && (
          <>
            <div className="space-y-2">
              <Label htmlFor="guests">Number of guests (including yourself)</Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="5"
                value={formData.guests}
                onChange={handleChange}
                required={formData.attending === "yes"}
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dietaryRestrictions">Dietary Restrictions (if any)</Label>
              <Textarea
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Please let us know of any dietary restrictions"
                rows={2}
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="songRequest">Song Request</Label>
              <Input
                id="songRequest"
                name="songRequest"
                value={formData.songRequest}
                onChange={handleChange}
                placeholder="What song will get you on the dance floor?"
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special message for the couple?"
                rows={3}
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </>
        )}

        <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </div>
          ) : (
            "Submit RSVP"
          )}
        </Button>
      </div>
      <Toaster />
    </form>
  )
}

