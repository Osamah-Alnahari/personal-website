"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "osama142494@gmail.com",
      link: "mailto:osama142494@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      value: "+966-55-128-2648",
      link: "tel:+966551282648",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "Dhahran, Saudi Arabia",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl 3xl:max-w-8xl 4xl:max-w-9xl 5xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 4xl:px-16 5xl:px-20">
        <div className="text-center mb-12 md:mb-16 3xl:mb-20 4xl:mb-24">
          <h2 className="text-3xl xs:text-4xl md:text-5xl 3xl:text-6xl 4xl:text-7xl 5xl:text-8xl font-bold text-foreground mb-6 gsap-fade-up">
            Get In Touch
          </h2>
          <p className="text-lg xs:text-xl 3xl:text-2xl 4xl:text-3xl text-muted-foreground max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl mx-auto gsap-fade-up text-pretty">
            Ready to collaborate on your next project? Let's discuss how we can work together to build innovative
            solutions with modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 3xl:grid-cols-5 gap-8 md:gap-12 3xl:gap-16 4xl:gap-20">
          {/* Contact Information */}
          <div className="gsap-fade-left 3xl:col-span-2">
            <h3 className="text-xl sm:text-2xl 3xl:text-3xl 4xl:text-4xl font-bold text-foreground mb-6 md:mb-8 3xl:mb-10">
              Let's Connect
            </h3>
            <div className="space-y-4 md:space-y-6 3xl:space-y-8 mb-6 md:mb-8 3xl:mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4 3xl:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 3xl:w-10 3xl:h-10 4xl:w-12 4xl:h-12 flex items-center justify-center">
                      {React.cloneElement(info.icon, {
                        className: "w-full h-full text-primary",
                      })}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg 3xl:text-xl 4xl:text-2xl font-semibold text-foreground">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-sm sm:text-base 3xl:text-lg 4xl:text-xl text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 sm:p-6 3xl:p-8 4xl:p-10 rounded-lg">
              <h4 className="text-base sm:text-lg 3xl:text-xl 4xl:text-2xl font-semibold text-foreground mb-2 3xl:mb-3">
                Available for Opportunities
              </h4>
              <p className="text-sm sm:text-base 3xl:text-lg 4xl:text-xl text-muted-foreground">
                I'm currently open to internships, research collaborations, and freelance projects. Let's discuss how we
                can work together on innovative solutions!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="gsap-fade-right 3xl:col-span-3">
            <CardHeader className="p-4 sm:p-6 3xl:p-8 4xl:p-10">
              <CardTitle className="text-xl sm:text-2xl 3xl:text-3xl 4xl:text-4xl text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 3xl:p-8 4xl:p-10 pt-0">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 3xl:space-y-8">
                <div className="grid sm:grid-cols-2 gap-4 3xl:gap-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="text-sm sm:text-base 3xl:text-lg 4xl:text-xl h-10 sm:h-12 3xl:h-14 4xl:h-16"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="text-sm sm:text-base 3xl:text-lg 4xl:text-xl h-10 sm:h-12 3xl:h-14 4xl:h-16"
                    />
                  </div>
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base 3xl:text-lg 4xl:text-xl h-10 sm:h-12 3xl:h-14 4xl:h-16"
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="text-sm sm:text-base 3xl:text-lg 4xl:text-xl min-h-[120px] sm:min-h-[150px] 3xl:min-h-[180px] 4xl:min-h-[200px]"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 h-12 sm:h-14 3xl:h-16 4xl:h-18 text-sm sm:text-base 3xl:text-lg 4xl:text-xl"
                >
                  <Send size={16} className="sm:w-5 sm:h-5 3xl:w-6 3xl:h-6 4xl:w-7 4xl:h-7 mr-2 3xl:mr-3" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
