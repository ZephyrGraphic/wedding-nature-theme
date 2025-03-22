"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

interface GuestMessage {
  id: number
  name: string
  message: string
  date: string
}

export default function GuestBook() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sample messages - in a real app, these would come from a database
  const [messages, setMessages] = useState<GuestMessage[]>([
    {
      id: 1,
      name: "Emma & David",
      message:
        "Congratulations on your special day! We're so happy for you both and can't wait to celebrate with you in the beautiful outdoors!",
      date: "March 15, 2025",
    },
    {
      id: 2,
      name: "Michael Johnson",
      message:
        "Wishing you a lifetime of love and happiness together. Your nature-themed wedding sounds absolutely perfect for you two!",
      date: "March 10, 2025",
    },
  ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Add new message
    const newMessage: GuestMessage = {
      id: messages.length + 1,
      name: formData.name,
      message: formData.message,
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    }

    setMessages((prev) => [newMessage, ...prev])

    // Show success message
    toast({
      title: "Message Added",
      description: "Thank you for your message!",
    })

    // Reset form
    setFormData({
      name: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-green-200">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border-green-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share your wishes or memories..."
              rows={4}
              className="border-green-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>
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
              "Sign Guestbook"
            )}
          </Button>
        </div>
      </form>

      <div className="space-y-4">
        <h3 className="text-xl font-serif text-green-700 mb-4">Messages from Loved Ones</h3>
        <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
          {messages.map((message) => (
            <div key={message.id} className="bg-white p-4 rounded-lg shadow-md border border-green-200">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-green-700">{message.name}</h4>
                <span className="text-xs text-muted-foreground">{message.date}</span>
              </div>
              <p className="text-sm">{message.message}</p>
            </div>
          ))}
        </div>
      </div>
      <Toaster />
    </div>
  )
}

