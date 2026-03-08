'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'

export interface ReservationFormProps {
  className?: string
  onSubmit?: (data: ReservationData) => Promise<void>
}

export interface ReservationData {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  notes?: string
}

export function ReservationForm({ className, onSubmit }: ReservationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    notes: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await onSubmit?.(formData)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Section variant="dark" className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader>
          <SectionTitle className="text-white">Prenota un Tavolo</SectionTitle>
          <SectionSubtitle className="text-gray-300">
            Assicurati il tuo posto da Da Massy. Rispondiamo entro 24 ore.
          </SectionSubtitle>
        </SectionHeader>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-terracotta focus:outline-none"
                placeholder="Mario Rossi"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-terracotta focus:outline-none"
                placeholder="mario@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                Telefono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-terracotta focus:outline-none"
                placeholder="+39 333 1234567"
              />
            </div>

            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-200 mb-2">
                Ospiti *
              </label>
              <select
                id="guests"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-terracotta focus:outline-none"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'persona' : 'persone'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-200 mb-2">
                Data *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-terracotta focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-200 mb-2">
                Orario *
              </label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-900 focus:ring-2 focus:ring-brand-terracotta focus:outline-none"
              >
                <option value="">Seleziona...</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-200 mb-2">
                Note Speciali
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-terracotta focus:outline-none resize-none"
                placeholder="Allergie, occasioni speciali, preferenze..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-8 px-8 py-4 bg-brand-terracotta text-white font-semibold rounded-lg hover:bg-brand-terracotta-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Invio in corso...' : 'Richiedi Prenotazione'}
          </button>
        </form>
      </div>
    </Section>
  )
}
