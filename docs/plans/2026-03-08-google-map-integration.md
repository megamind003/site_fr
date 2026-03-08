# Google Map Integration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Embed an interactive Google Map and restaurant contact information on the Contacts page.

**Architecture:** Add a new section above the reservation form containing a responsive Google Maps iframe and a contact details block (address, phone, email).

**Tech Stack:** Next.js, Tailwind CSS, next-intl.

---

### Task 1: Add Google Map and Contact Info Section

**Files:**
- Modify: `src/app/[locale]/contatti/page.tsx`

**Step 1: Add the Map and Contact Info section above the ReservationForm**

```tsx
// src/app/[locale]/contatti/page.tsx

// ... existing imports ...

export default function ContattiPage() {
  const t = useTranslations('Contact')

  return (
    <>
      <NavBar items={navItems} cta={{ label: 'Prenota', href: '/contatti' }} />
      
      <Section variant="alternate" className="pt-24">
        <Container>
          <SectionHeader>
            <SectionTitle>{t('title')}</SectionTitle>
            <SectionSubtitle>{t('subtitle')}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      {/* New Section for Map and Contact Info */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Column */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.5!2d12.097!3d42.009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAwJzMyLjQiTiAxMsKwMDUnNDkuMiJF"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[250px] lg:h-[400px]"
                  title="Google Maps"
                ></iframe>
              </div>
              <div className="text-center lg:text-left">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=42.009,12.097" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium inline-flex items-center gap-2"
                >
                  Apri in Google Maps
                </a>
              </div>
            </div>

            {/* Contact Info Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Dove Siamo</h3>
                <p className="text-lg text-gray-600">
                  Via [Street Name], Cerveteri (RM)
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Contatti</h3>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Telefono:</span>
                    <a href="tel:+393331234567" className="hover:text-primary">+39 333 1234567</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:info@damassy.it" className="hover:text-primary">info@damassy.it</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="alternate">
        <Container>
          <div className="max-w-2xl mx-auto">
            <SectionHeader>
              <SectionTitle>Prenota un Tavolo</SectionTitle>
            </SectionHeader>
            <ReservationForm />
          </div>
        </Container>
      </Section>
    </>
  )
}
```

**Step 2: Run lsp_diagnostics to check for errors**

Run: `lsp_diagnostics src/app/[locale]/contatti/page.tsx`
Expected: No errors.

**Step 3: Commit**

```bash
git add src/app/[locale]/contatti/page.tsx
git commit -m "feat: add google map and contact info to contacts page"
```
