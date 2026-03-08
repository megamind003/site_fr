# Sito Web Ristorante Da Massy - Cerveteri

## TL;DR

> **Quick Summary**: Creazione sito web completo per "Da Massy", ristorante di cucina mista (terra e mare) a Cerveteri. Il sito posiziona il locale come "salotto accogliente" dove la tradizione etrusca incontra la freschezza del mare tirrenico.
> 
> **Deliverables**:
> - Brand identity completa (logo, palette colori, tipografia)
> - Sito web responsive multilingua (IT/EN)
> - 8 sezioni: Home, Menu, Chi Siamo, Galleria, Prenotazioni, Contatti, Recensioni, Eventi
> - Copywriting bilingue per tutte le sezioni
> - Integrazione Google Business Profile e mappa
> - Shooting fotografico professionale (linee guida + brief)
> 
> **Estimated Effort**: Large (4-6 settimane)
> **Parallel Execution**: YES - 5 waves
> **Critical Path**: Brand Identity → Copywriting → Sviluppo Frontend → Foto → Deploy

---

## Context

### Original Request
Creare da zero il sito web per il ristorante "Da Massy" situato a Via Prato del Cavaliere, 7, 00052 Cerveteri RM. Il locale offre cucina mista (terra e mare). Non esistono materiali pregressi (no logo, no foto, no menu scritto, no testi).

### Interview Summary
**Key Discussions**:
- **Indirizzo confermato**: Via Prato del Cavaliere, 7 (non Via Luigi Iaffei come inizialmente indicato)
- **Nome corretto**: "Da Massy" (con la "y")
- **Tipologia**: Ristorante tradizionale, cucina mista terra e mare
- **Materiali**: Parte da zero - serve tutto
- **Approccio**: Prima struttura concettuale e contenuti, poi realizzazione tecnica
- **Sezioni richieste**: Tutte le sezioni standard (Home, Menu, Chi Siamo, Galleria, Prenotazioni, Contatti, Recensioni, Eventi)
- **Requisito qualità**: Sito "intuitivo", "fatto bene", attenzione ai concetti

**Research Findings** (aggiornato 2026):
- **Competitor locali**: La Brace (75/100, 5640 voti), Trattoria La Rocca (79/100, 2482 voti), Osteria la botte piena (#4/125 Cerveteri, 144 voti, €20-30), Jolly Ristorante Pizzeria (#15/125, 1327 voti, €10-20), Terra Nugas (9.7/10, 730 recensioni, €28, atmosfera ricercata), Taverna Ceretana (#5/66 italiani, 460 voti), Hosteria da Ugo Ceri (#6/18, 1242 voti) - tutti posizionati su tradizione rustica/terra o pesce
- **Da Massy confermato**: Da Massy In Rosticceria presente su Restaurant Guru, Via Prato del Cavaliere 7, #45/58 pizzerie Cerveteri, fascia €8-21, orari 09:30-22:00 (mer-lun, chiuso martedì), 18 foto disponibili
- **Flusso turistico**: Necropoli UNESCO Banditaccia (20 ettari recintati, coordinate 42.00683N 12.10188E), visite guidate gratuite attive (gen 2026), Tomba dei Rilievi aperture straordinarie sold-out, prima domenica del mese ingresso gratuito, 40km da Roma, 30km da Civitavecchia (croceristi)
- **Gap opportunità**: Nessun competitor punta sul dualismo terra/mare con accoglienza personale; Da Massy ha posizionamento pizzeria/rosticceria (€8-21) - opportunità upgrade percezione qualità
- **Tendenze web ristoranti 2026**: Sito come motore acquisizione clienti (non vetrina statica), conversione prioritaria, AI/assistenti vocali influenzano scelte consumatori, mobile-first essenziale, menu HTML (no PDF), prenotazioni dirette (disintermediazione piattaforme), immagini qualità professionale

### Metis Review
**Identified Gaps** (addressed):
- **Positioning**: Differenziarsi come "Convivialità Completa" - unico locale che unisce terra e mare con tocco personale
- **Tono di voce**: Familiare ma curato, evitare formalismi e dialettalismi eccessivi
- **Identità visiva**: Palette Terracotta + Blu Ottanio + Crema (richiamo terra etrusca + mare)
- **Best practice**: Mobile-first, multilingua IT/EN, sticky CTA, local SEO, social proof
- **Gap critici**: Logo, shooting foto, copy bilingue, menu digitale, Google Business Profile

---

## Work Objectives

### Core Objective
Creare un sito web che posizioni Da Massy come riferimento gastronomico a Cerveteri per turisti UNESCO e clienti locali, comunicando l'unicità della cucina mista terra/mare con accoglienza familiare.

### Concrete Deliverables
- Logo e brand identity completa
- Sito web responsive (8 sezioni)
- Copy IT/EN per tutte le pagine
- Galleria foto professionale (min. 30 scatti)
- Sistema prenotazioni integrato
- Google Business Profile configurato
- Documentazione gestione contenuti

### Definition of Done
- [ ] Sito pubblicato e accessibile online
- [ ] Tutte le sezioni funzionanti su mobile e desktop
- [ ] Form prenotazioni testato e operativo
- [ ] Versione inglese completa e verificata
- [ ] Foto caricate e ottimizzate
- [ ] Google Business Profile collegato e verificato
- [ ] Test velocità: caricamento <3 secondi

### Must Have
- Mobile-first design (90% traffico da smartphone)
- Multilingua IT/EN con switch intuitivo
- Sticky CTA "Prenota/Chiama" su mobile
- Menu in formato HTML (non PDF) per SEO
- Mappa interattiva con indicazioni dalla Necropoli
- Integrazione recensioni Google/TripAdvisor

### Must NOT Have (Guardrails)
- NO foto stock - solo foto originali del locale
- NO menu in PDF - sempre testo HTML leggibile
- NO linguaggio formale/ingessato - tono familiare
- NO animazioni pesanti che rallentano il caricamento
- NO sezioni vuote o "under construction"
- NO testi generici - sempre specifici su Da Massy e Cerveteri

---

## Verification Strategy

### Test Decision
- **Infrastruttura esiste**: NO - progetto da zero
- **Automated tests**: NO - sito statico/landing, no unit test necessari
- **Framework**: Next.js 14 + Tailwind CSS (moderno, performante, SEO-friendly)
- **QA Policy**: Agent-Executed Scenarios ONLY (Playwright per UI, curl per API)

### QA Policy
Ogni task include scenari QA eseguiti dall'agente:
- **Frontend/UI**: Playwright - navigazione, responsive check, form submission, screenshot
- **Performance**: Lighthouse via Playwright - Core Web Vitals
- **SEO**: Playwright - verifica meta tag, structured data, hreflang
- **Contenuti**: Playwright - verifica testi IT/EN, link funzionanti

Evidence salvata in `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`

---

## Execution Strategy

### Parallel Execution Waves

> Massimizzazione parallelismo: 5 waves, task indipendenti eseguiti in parallelo

```
Wave 1 (Start Immediato - Foundation & Brand):
├── Task 1: Brand Identity (logo, palette, typography) [artistry]
├── Task 2: Copywriting Home Page (IT/EN) [writing]
├── Task 3: Copywriting Menu Page (IT/EN) [writing]
├── Task 4: Copywriting Chi Siamo (IT/EN) [writing]
├── Task 5: Copywriting Contatti & Info (IT/EN) [writing]
└── Task 6: Setup Google Business Profile [quick]

Wave 2 (After Wave 1 - Sviluppo Frontend Core):
├── Task 7: Setup Next.js + Tailwind + i18n [quick]
├── Task 8: Home Page Component [visual-engineering]
├── Task 9: Menu Page Component [visual-engineering]
├── Task 10: Chi Siamo Page Component [visual-engineering]
├── Task 11: Contatti Page Component [visual-engineering]
└── Task 12: Navigation & Footer [visual-engineering]

Wave 3 (After Wave 2 - Funzionalità Avanzate):
├── Task 13: Galleria Page Component [visual-engineering]
├── Task 14: Prenotazioni Form + Backend [unspecified-high]
├── Task 15: Recensioni Integration [quick]
├── Task 16: Eventi Page Component [visual-engineering]
├── Task 17: SEO Meta Tags + Structured Data [quick]
└── Task 18: Mobile Sticky CTA [visual-engineering]

Wave 4 (After Wave 3 - Contenuti & Media):
├── Task 19: Shooting Fotografico (brief + linee guida) [artistry]
├── Task 20: Ottimizzazione Foto (resize, compress, WebP) [quick]
├── Task 21: Caricamento Contenuti Finali [quick]
├── Task 22: Integrazione Mappa Google [quick]
└── Task 23: Test Cross-Browser [unspecified-high]

Wave 5 (After Wave 4 - Deploy & Verify):
├── Task 24: Deploy su Vercel/Netlify [quick]
├── Task 25: Performance Audit (Lighthouse ≥90) [deep]
├── Task 26: SEO Audit (meta, sitemap, robots) [quick]
└── Task 27: Documentazione Gestione [writing]

Wave FINAL (After ALL - Review Indipendente):
├── F1: Plan Compliance Audit [oracle]
├── F2: Code Quality Review [unspecified-high]
├── F3: Real Manual QA [unspecified-high]
└── F4: Scope Fidelity Check [deep]

Critical Path: Task 1 → Task 7 → Task 8-12 → Task 14 → Task 19-21 → Task 24 → F1-F4
Parallel Speedup: ~65% faster than sequential
Max Concurrent: 6 (Wave 1 & 2)
```

### Dependency Matrix (abbreviato)

| Task | Dipende Da | Blocca |
|------|------------|--------|
| 1-6  | —          | 7-18   |
| 7    | 1          | 8-12   |
| 8-12 | 2-5, 7     | 13-18  |
| 13-18| 8-12       | 19-23  |
| 19   | —          | 20-21  |
| 20-21| 13-18      | 24     |
| 24   | 20-23      | 25-27  |
| 25-27| 24         | F1-F4  |

### Agent Dispatch Summary

- **Wave 1**: 6 task → `artistry` (1), `writing` (2-5), `quick` (6)
- **Wave 2**: 6 task → `quick` (7), `visual-engineering` (8-12)
- **Wave 3**: 6 task → `visual-engineering` (13,16,18), `unspecified-high` (14), `quick` (15,17)
- **Wave 4**: 5 task → `artistry` (19), `quick` (20-22), `unspecified-high` (23)
- **Wave 5**: 4 task → `quick` (24,26), `deep` (25), `writing` (27)
- **FINAL**: 4 task → `oracle` (F1), `unspecified-high` (F2,F3), `deep` (F4)

---

## TODOs

- [ ] 1. Brand Identity - Logo, Palette, Typography

  **What to do**:
  - Creare 3 concept di logo per "Da Massy" (vettoriale, scalabile)
  - Definire palette colori: Terracotta (#C15B3E), Blu Ottanio (#2C5F6F), Crema (#F5F1E8)
  - Selezionare font: Serif per titoli (es. Playfair Display), Sans-Serif per testi (es. Inter)
  - Creare brand guidelines: uso logo, colori, tipografia, spacing
  - Deliverable: file SVG/PNG logo, brand guidelines PDF

  **Must NOT do**:
  - NO logo troppo complesso (deve funzionare su mobile)
  - NO colori neon o saturi (devono richiamare terra/mare naturale)
  - NO font decorativi eccessivi (leggibilità prima di tutto)

  **Recommended Agent Profile**:
  - **Category**: `artistry` - Design creativo richiede sensibilità artistica per bilanciare tradizione e modernità
  - **Skills**: [] - Nessun skill specifico richiesto, l'agente artistry ha capacità creative native

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (fondazione del brand)
  - **Blocks**: Task 7-18 (sviluppo frontend usa brand identity)
  - **Blocked By**: None

  **References**:
  - Competitor analysis: La Brace, Trattoria La Rocca, Il Camoscio (tutti rustici/terra)
  - Metis analysis: palette Terracotta + Blu Ottanio per dualismo terra/mare
  - Best practice: logo semplice, scalabile, riconoscibile su mobile

  **Acceptance Criteria**:
  - [ ] 3 concept logo presentati con varianti chiaro/scuro
  - [ ] Palette colori definita con codici HEX/RGB
  - [ ] Font selezionati con licenze verificate (Google Fonts o simili)
  - [ ] Brand guidelines documento completo (min. 5 pagine)

  **QA Scenarios**:

  ```
  Scenario: Logo scalability test
    Tool: Playwright
    Preconditions: Logo caricato in pagina test
    Steps:
      1. Navigare alla pagina test con logo
      2. Ridimensionare viewport da 1920px a 320px in step
      3. Verificare leggibilità logo a ogni step
    Expected Result: Logo rimane riconoscibile e leggibile a tutte le dimensioni
    Failure Indicators: Logo diventa illeggibile sotto 768px
    Evidence: .sisyphus/evidence/task-1-logo-scalability.png

  Scenario: Color contrast accessibility
    Tool: Playwright + axe-core
    Preconditions: Pagina test con palette colori
    Steps:
      1. Caricare pagina con elementi nei colori del brand
      2. Eseguire axe-core accessibility scan
      3. Verificare contrast ratio ≥4.5:1 per testo normale
    Expected Result: Tutti i contrasti superano WCAG AA
    Failure Indicators: axe-core riporta violazioni contrasto
    Evidence: .sisyphus/evidence/task-1-accessibility-report.json
  ```

  **Commit**: YES (groups with 2-6)
  - Message: `feat(brand): logo, palette, typography guidelines`
  - Files: `src/assets/logo.svg, src/styles/brand.css, docs/brand-guidelines.md`
  - Pre-commit: N/A

---

- [ ] 2. Copywriting Home Page (IT/EN)

  **What to do**:
  - Scrivere copy per Home Page in Italiano e Inglese
  - Sezioni: Hero (claim + CTA), Chi è Massy (intro), Highlight Menu (anteprima), CTA Prenota
  - Tono: familiare ma curato, genuino, ospitale
  - Claim esempio: "Il sapore autentico di Cerveteri, tra terra e mare" / "The authentic taste of Cerveteri, between land and sea"
  - Integrare keyword SEO: "ristorante Cerveteri", "cucina terra e mare", "vicino Necropoli"
  - Deliverable: documento copy IT/EN per Home Page

  **Must NOT do**:
  - NO linguaggio formale/ingessato ("la nostra struttura offre...")
  - NO testi generici da ristorante ("piatti deliziosi", "atmosfera accogliente")
  - NO dialettalismi eccessivi (incomprensibili per turisti)
  - NO testi troppo lunghi (mobile-first, scansionabilità)

  **Recommended Agent Profile**:
  - **Category**: `writing` - Copywriting richiede competenze di scrittura creativa e persuasiva
  - **Skills**: [] - L'agente writing ha capacità native di copywriting

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (con Task 3-6)
  - **Blocks**: Task 8 (Home Page Component usa copy)
  - **Blocked By**: None

  **References**:
  - Metis analysis: tono familiare ma curato, esempio "Portiamo in tavola il pescato del giorno..."
  - SEO best practice: keyword placement in H1, primi 100 caratteri, CTA
  - Turismo UNESCO: linguaggio accessibile per internazionali

  **Acceptance Criteria**:
  - [ ] Copy IT completo per tutte le sezioni Home
  - [ ] Copy EN completo e tradotto professionalmente (non Google Translate)
  - [ ] Claim principale incluso in H1
  - [ ] CTA "Prenota" presente min. 2 volte
  - [ ] Lunghezza totale: 300-500 parole per lingua

  **QA Scenarios**:

  ```
  Scenario: Readability test (Flesch-Kincaid)
    Tool: Bash (script Python)
    Preconditions: Copy IT e EN in file di testo
    Steps:
      1. Eseguire script calcolo Flesch-Kincaid score
      2. Verificare score tra 60-80 (facile lettura)
    Expected Result: Score ≥60 per entrambe le lingue
    Failure Indicators: Score <60 (troppo complesso)
    Evidence: .sisyphus/evidence/task-2-readability-report.txt

  Scenario: SEO keyword presence
    Tool: Bash (grep)
    Preconditions: Copy HTML con tag H1, H2, meta
    Steps:
      1. Cercare keyword "ristorante Cerveteri" in H1/H2
      2. Cercare keyword "terra e mare" nel body
      3. Verificare presenza in meta description
    Expected Result: Tutte le keyword presenti nelle posizioni corrette
    Failure Indicators: Keyword assenti o in posizioni non ottimali
    Evidence: .sisyphus/evidence/task-2-seo-check.txt
  ```

  **Commit**: YES (groups with 3-6)
  - Message: `feat(copy): home page copy IT/EN`
  - Files: `src/content/home-it.json, src/content/home-en.json`
  - Pre-commit: N/A

---

- [ ] 3. Copywriting Menu Page (IT/EN)

  **What to do**:
  - Scrivere copy per Menu Page in Italiano e Inglese
  - Sezioni: Intro menu, Categorie (Antipasti, Primi, Secondi Terra, Secondi Mare, Contorni, Dolci, Vini)
  - Per ogni piatto: nome, descrizione ingredienti, prezzo (€)
  - Descrizioni evocative: "Filetto di branzino al sale con verdure di stagione" non "Pesce al forno"
  - Evidenziare piatti signature e ingredienti locali (km 0)
  - Deliverable: documento copy IT/EN per Menu Page

  **Must NOT do**:
  - NO descrizioni generiche ("pasta al sugo", "pesce del giorno")
  - NO prezzi nascosti o "prezzo mercato" senza indicazione
  - NO menu in formato PDF (solo HTML/JSON per SEO)
  - NO piatti senza descrizione ingredienti (allergeni, provenienza)

  **Recommended Agent Profile**:
  - **Category**: `writing` - Copywriting menu richiede capacità descrittive e conoscenza terminologia culinaria
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (con Task 2, 4-6)
  - **Blocks**: Task 9 (Menu Page Component)
  - **Blocked By**: None

  **References**:
  - Competitor menu: La Brace (grigliata mista €), Trattoria La Rocca (pappardelle cinghiale)
  - Menu engineering: piatti signature in evidenza, prezzi psicologici
  - Allergeni: normativa UE 1169/2011 (glutine, crostacei, pesce, ecc.)

  **Acceptance Criteria**:
  - [ ] Min. 8 categorie menu (Antipasti, Primi, Secondi Terra, Secondi Mare, Contorni, Dolci, Vini, Bevande)
  - [ ] Min. 5 piatti per categoria
  - [ ] Ogni piatto ha descrizione ingredienti (min. 10 parole)
  - [ ] Prezzi indicati per ogni piatto
  - [ ] Copy IT e EN completi

  **QA Scenarios**:

  ```
  Scenario: Menu completeness check
    Tool: Bash (JSON validation)
    Preconditions: File JSON menu IT e EN
    Steps:
      1. Validare struttura JSON (schema menu)
      2. Contare piatti per categoria
      3. Verificare presenza prezzi e descrizioni
    Expected Result: JSON valido, min. 5 piatti/categoria, tutti i prezzi presenti
    Failure Indicators: JSON invalido, categorie vuote, prezzi mancanti
    Evidence: .sisyphus/evidence/task-3-menu-validation.json

  Scenario: Allergen labeling check
    Tool: Bash (grep)
    Preconditions: Menu HTML/JSON con allergeni
    Steps:
      1. Cercare simboli allergeni (glutine, pesce, lattosio, ecc.)
      2. Verificare legenda allergeni presente
    Expected Result: Tutti gli allergeni UE etichettati, legenda visibile
    Failure Indicators: Allergeni mancanti o non etichettati
    Evidence: .sisyphus/evidence/task-3-allergen-check.txt
  ```

  **Commit**: YES (groups with 2, 4-6)
  - Message: `feat(copy): menu page copy IT/EN`
  - Files: `src/content/menu-it.json, src/content/menu-en.json`
  - Pre-commit: N/A

---

- [ ] 4. Copywriting Chi Siamo Page (IT/EN)

  **What to do**:
  - Scrivere copy per Chi Siamo / La Nostra Filosofia
  - Storytelling: storia di "Massy", filosofia culinaria, legame con Cerveteri
  - Elementi narrativi: accoglienza familiare, dualismo terra/mare, ingredienti locali
  - Tono: caldo, personale, appassionato ("siamo", "la nostra famiglia", "vi aspettiamo")
  - Includere: anni di attività, team, valori (km 0, sostenibilità, tradizione)
  - Deliverable: documento copy IT/EN per Chi Siamo

  **Must NOT do**:
  - NO testi corporate freddi ("la società", "il personale")
  - NO storie inventate o esagerate (autenticità prima di tutto)
  - NO elenchi puntati asettici (narrativa fluida)
  - NO lunghezze eccessive (max 600 parole per lingua)

  **Recommended Agent Profile**:
  - **Category**: `writing` - Storytelling e narrativa richiedono competenze di scrittura creativa
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (con Task 2-3, 5-6)
  - **Blocks**: Task 10 (Chi Siamo Page Component)
  - **Blocked By**: None

  **References**:
  - Metis analysis: narrativa "Massy non è solo un ristorante, è la casa di chi ama mangiare bene"
  - Claim: "I sapori della nostra terra, il respiro del nostro mare"
  - Ristoranti di successo: storie autentiche, volti del team, valori chiari

  **Acceptance Criteria**:
  - [ ] Storia di Massy raccontata (origine nome, filosofia)
  - [ ] Legame con Cerveteri evidenziato (territorio, tradizioni)
  - [ ] Valori chiari (km 0, accoglienza, qualità)
  - [ ] Copy IT e EN completi
  - [ ] Lunghezza: 400-600 parole per lingua

  **QA Scenarios**:

  ```
  Scenario: Storytelling coherence check
    Tool: Bash (text analysis)
    Preconditions: Copy Chi Siamo IT e EN
    Steps:
      1. Cercare parole chiave narrative ("storia", "famiglia", "tradizione", "Massy")
      2. Verificare coerenza tono (caldo vs formale)
      3. Contare occorrenze pronomi personali ("noi", "vi", "nostro")
    Expected Result: Min. 10 occorrenze tono familiare, parole chiave presenti
    Failure Indicators: Tono formale predominante, assenza narrativa
    Evidence: .sisyphus/evidence/task-4-storytelling-analysis.txt
  ```

  **Commit**: YES (groups with 2-3, 5-6)
  - Message: `feat(copy): chi siamo page copy IT/EN`
  - Files: `src/content/about-it.json, src/content/about-en.json`
  - Pre-commit: N/A

---

- [ ] 5. Copywriting Contatti & Info (IT/EN)

  **What to do**:
  - Scrivere copy per Contatti / Dove Siamo
  - Sezioni: Indirizzo, Telefono, Email, Orari, Mappa, Parcheggio, Come Arrivare
  - Includere indicazioni dalla Necropoli Banditaccia ("A soli 5 minuti dalla Necropoli")
  - Includere info accessibilità (sedie a rotelle, parcheggio)
  - CTA multiple: "Chiama ora", "Prenota tavolo", "Come arrivare"
  - Deliverable: documento copy IT/EN per Contatti

  **Must NOT do**:
  - NO solo indirizzo senza indicazioni (i turisti non conoscono la zona)
  - NO orari nascosti o difficili da trovare
  - NO mappa statica (deve essere interattiva Google Maps)
  - NO informazioni di contatto incomplete

  **Recommended Agent Profile**:
  - **Category**: `writing` - Copy informativo richiede chiarezza e precisione
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (con Task 2-4, 6)
  - **Blocks**: Task 11 (Contatti Page Component)
  - **Blocked By**: None

  **References**:
  - Indirizzo: Via Prato del Cavaliere, 7, 00052 Cerveteri RM
  - Necropoli Banditaccia: riferimento cruciale per turisti
  - Best practice: click-to-call, click-to-maps su mobile

  **Acceptance Criteria**:
  - [ ] Indirizzo completo con CAP e provincia
  - [ ] Telefono con prefisso internazionale (+39)
  - [ ] Email valida
  - [ ] Orari apertura/chiusura per ogni giorno
  - [ ] Indicazioni da Necropoli, Roma, Civitavecchia
  - [ ] Copy IT e EN completi

  **QA Scenarios**:

  ```
  Scenario: Click-to-action test (mobile)
    Tool: Playwright
    Preconditions: Pagina Contatti caricata su viewport mobile
    Steps:
      1. Cliccare sul numero di telefono
      2. Verificare apertura dialer (tel: link)
      3. Cliccare su indirizzo
      4. Verificare apertura Google Maps (maps.google.com link)
    Expected Result: Link tel: e maps: funzionanti e corretti
    Failure Indicators: Link non cliccabili o URL errati
    Evidence: .sisyphus/evidence/task-5-cta-test.mp4

  Scenario: Schema.org LocalBusiness validation
    Tool: Bash (curl + Google Rich Results Test API)
    Preconditions: Pagina Contatti con structured data
    Steps:
      1. Estrarre JSON-LD structured data
      2. Validare schema LocalBusiness completo
    Expected Result: Tutti i campi required presenti (name, address, telephone, openingHours)
    Failure Indicators: Schema invalido o campi mancanti
    Evidence: .sisyphus/evidence/task-5-schema-validation.json
  ```

  **Commit**: YES (groups with 2-4, 6)
  - Message: `feat(copy): contatti page copy IT/EN`
  - Files: `src/content/contact-it.json, src/content/contact-en.json`
  - Pre-commit: N/A

---

- [ ] 6. Setup Google Business Profile

  **What to do**:
  - Creare/claimare Google Business Profile per Da Massy
  - Inserire: nome, indirizzo, telefono, sito web, orari, categoria (Ristorante)
  - Caricare logo e foto (min. 10 foto iniziali)
  - Compilare descrizione business (con keyword SEO)
  - Verificare profilo (cartolina postale o telefono)
  - Abilitare messaggi e prenotazioni
  - Deliverable: GBP verificato e collegato al sito

  **Must NOT do**:
  - NO informazioni inconsistenti con il sito (NAP: Name, Address, Phone deve coincidere)
  - NO foto di bassa qualità o stock
  - NO descrizione vuota o generica
  - NO categoria errata (deve essere "Ristorante")

  **Recommended Agent Profile**:
  - **Category**: `quick` - Task operativo di setup, richiede precisione ma non creatività
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (con Task 2-5)
  - **Blocks**: Task 15 (Recensioni Integration)
  - **Blocked By**: None

  **References**:
  - NAP consistency: fondamentale per Local SEO
  - Google Business Profile guidelines: https://support.google.com/business
  - Competitor GBP: La Brace, Trattoria La Rocca (analisi recensioni)

  **Acceptance Criteria**:
  - [ ] Profilo creato e verificato
  - [ ] Tutte le informazioni compilate (100% complete)
  - [ ] Min. 10 foto caricate
  - [ ] Orari aggiornati
  - [ ] Sito web collegato
  - [ ] Messaggi abilitati

  **QA Scenarios**:

  ```
  Scenario: GBP listing completeness
    Tool: Bash (curl Google Business Profile API)
    Preconditions: GBP creato e verificato
    Steps:
      1. Chiamare API Google per recuperare profilo
      2. Verificare tutti i campi compilati
    Expected Result: Tutti i campi required presenti e validi
    Failure Indicators: Campi vuoti o profilo non verificato
    Evidence: .sisyphus/evidence/task-6-gbp-completeness.json

  Scenario: NAP consistency check
    Tool: Bash (comparison script)
    Preconditions: Sito web e GBP entrambi attivi
    Steps:
      1. Estrarre NAP dal sito (footer/contatti)
      2. Estrarre NAP da GBP
      3. Confrontare stringhe
    Expected Result: NAP identico (stesso nome, indirizzo, telefono)
    Failure Indicators: Differenze nel NAP (penalizzazione SEO)
    Evidence: .sisyphus/evidence/task-6-nap-consistency.txt
  ```

  **Commit**: NO (task esterno a Google)
  - Message: N/A
  - Files: N/A
  - Pre-commit: N/A

---

- [ ] 7. Setup Next.js + Tailwind + i18n

  **What to do**:
  - Inizializzare progetto Next.js 14 (App Router)
  - Configurare Tailwind CSS con brand colors (Terracotta, Blu Ottanio, Crema)
  - Configurare i18n per multilingua IT/EN (next-intl o simile)
  - Setup struttura cartelle: /src/app/[lang]/, /src/components/, /src/content/
  - Configurare metadata base (title, description, favicon)
  - Setup ESLint + Prettier per code quality
  - Deliverable: Boilerplate pronto per sviluppo componenti

  **Must NOT do**:
  - NO Next.js 13 o inferiore (usare App Router, non Pages Router)
  - NO CSS tradizionale (solo Tailwind utility-first)
  - NO i18n fatto male (routing /[lang]/ obbligatorio per SEO)
  - NO dipendenze superflue (keep it lean)

  **Recommended Agent Profile**:
  - **Category**: `quick` - Setup boilerplate standard, pattern consolidati
  - **Skills**: [] - Configurazione Next.js è conoscenza base

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (dipende da Task 1, blocca Wave 2)
  - **Blocks**: Task 8-12 (tutti i componenti frontend)
  - **Blocked By**: Task 1 (brand identity per colori)

  **References**:
  - Next.js 14 docs: https://nextjs.org/docs/app
  - Tailwind CSS: https://tailwindcss.com/docs
  - next-intl: https://next-intl-docs.vercel.app/
  - Brand guidelines: Task 1 (colori, font)

  **Acceptance Criteria**:
  - [ ] Next.js 14 installato e funzionante (`npm run dev` → localhost:3000)
  - [ ] Tailwind configurato con brand colors in tailwind.config.js
  - [ ] i18n funzionante: /it/ e /en/ routing attivo
  - [ ] Struttura cartelle creata
  - [ ] ESLint + Prettier configurati
  - [ ] TypeScript configurato (strict mode)

  **QA Scenarios**:

  ```
  Scenario: i18n routing test
    Tool: Playwright
    Preconditions: Next.js app in esecuzione su localhost:3000
    Steps:
      1. Navigare a /it/ → verificare contenuto italiano
      2. Navigare a /en/ → verificare contenuto inglese
      3. Cambiare lingua da switcher → verificare redirect corretto
    Expected Result: Routing funzionante, contenuti corretti per lingua
    Failure Indicators: 404, contenuti sbagliati, switcher non funzionante
    Evidence: .sisyphus/evidence/task-7-i18n-test.mp4

  Scenario: Build test
    Tool: Bash (npm run build)
    Preconditions: Codice sorgente completo
    Steps:
      1. Eseguire npm run build
      2. Verificare exit code 0
      3. Verificare output .next/ creato
    Expected Result: Build completato senza errori
    Failure Indicators: Errori TypeScript, ESLint, o build fallito
    Evidence: .sisyphus/evidence/task-7-build-output.txt
  ```

  **Commit**: YES (groups with 8-12)
  - Message: `chore(project): setup Next.js 14 + Tailwind + i18n`
  - Files: `package.json, next.config.js, tailwind.config.js, tsconfig.json, src/app/`
  - Pre-commit: `npm run build`

---

- [ ] 8. Home Page Component

  **What to do**:
  - Sviluppare componente Home Page completo
  - Sezioni: Hero (immagine full-width + claim + CTA), Chi è Massy (intro), Highlight Menu (grid piatti), Testimonianze, CTA finale
  - Implementare responsive design (mobile-first)
  - Integrare copy da Task 2 (IT/EN)
  - Animazioni leggere (fade-in on scroll, hover effects)
  - Performance optimization (lazy loading immagini, code splitting)
  - Deliverable: Pagina Home funzionante e responsive

  **Must NOT do**:
  - NO animazioni pesanti (Google Lighthouse ≥90 performance)
  - NO immagini non ottimizzate (WebP, lazy load obbligatorio)
  - NO layout non responsive (test su 320px-1920px)
  - NO testo hardcoded (usare content files da Task 2)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering` - Componente UI visivo richiede sensibilità design e UX
  - **Skills**: [`frontend-ui-ux`] - Skill per UI/UX di alta qualità, pattern visivi consolidati

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 2 (dopo Task 7)
  - **Blocks**: Task 13-18 (dipendono da structure/layout)
  - **Blocked By**: Task 2 (copy), Task 7 (setup)

  **References**:
  - Copy Home Page: Task 2 (content IT/EN)
  - Brand guidelines: Task 1 (colori, font, spacing)
  - Best practice: Hero section efficace, CTA visibili, mobile-first

  **Acceptance Criteria**:
  - [ ] Hero section con immagine full-width e CTA
  - [ ] Sezione "Chi è Massy" con storytelling
  - [ ] Highlight Menu con min. 4 piatti in evidenza
  - [ ] CTA "Prenota" presente min. 2 volte
  - [ ] Responsive: perfetto su 320px, 768px, 1024px, 1920px
  - [ ] Lighthouse Performance ≥90

  **QA Scenarios**:

  ```
  Scenario: Mobile responsive test
    Tool: Playwright
    Preconditions: Home page caricata
    Steps:
      1. Impostare viewport 375x812 (iPhone)
      2. Verificare leggibilità testi, CTA cliccabili
      3. Scorrere pagina, verificare layout non rompe
      4. Ripetere su 768px (iPad), 1920px (desktop)
    Expected Result: Layout perfetto su tutte le dimensioni
    Failure Indicators: Testo illeggibile, CTA non cliccabili, overflow
    Evidence: .sisyphus/evidence/task-8-responsive-test.png

  Scenario: Lighthouse performance audit
    Tool: Playwright + Lighthouse
    Preconditions: Home page caricata
    Steps:
      1. Eseguire Lighthouse audit (mobile)
      2. Verificare Performance ≥90, Accessibility ≥90, SEO ≥90
    Expected Result: Tutti i score ≥90
    Failure Indicators: Score <90 in qualsiasi categoria
    Evidence: .sisyphus/evidence/task-8-lighthouse-report.json

  Scenario: CTA click tracking
    Tool: Playwright
    Preconditions: Home page con analytics (se configurato)
    Steps:
      1. Cliccare CTA "Prenota" in Hero
      2. Cliccare CTA "Prenota" in footer
      3. Verificare redirect a pagina Prenotazioni
    Expected Result: Entrambe le CTA portano a /prenotazioni
    Failure Indicators: Link rotti, redirect sbagliati
    Evidence: .sisyphus/evidence/task-8-cta-test.mp4
  ```

  **Commit**: YES (groups with 9-12)
  - Message: `feat(pages): home page component`
  - Files: `src/app/[lang]/page.tsx, src/components/home/`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 9. Menu Page Component

  **What to do**:
  - Sviluppare componente Menu Page completo
  - Sezioni: Intro, Categorie menu (tabs o accordion), Lista piatti con descrizioni e prezzi
  - Implementare navigazione tra categorie (Anchor links o tabs)
  - Integrare copy da Task 3 (IT/EN)
  - Design: leggibile, prezzi ben visibili, descrizioni evocative
  - Accessibility: screen reader friendly, contrasti WCAG AA
  - Deliverable: Pagina Menu funzionante e responsive

  **Must NOT do**:
  - NO menu in PDF (solo HTML)
  - NO prezzi nascosti o poco visibili
  - NO descrizioni troncate (mostrare complete)
  - NO navigazione confusa tra categorie

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering` - UI complessa con gestione contenuti strutturati
  - **Skills**: [`frontend-ui-ux`] - Pattern per menu leggibili e accessibili

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (con Task 8, 10-12)
  - **Blocks**: Task 13-18
  - **Blocked By**: Task 3 (copy), Task 7 (setup)

  **References**:
  - Copy Menu: Task 3 (content IT/EN)
  - Brand guidelines: Task 1
  - Competitor menu: La Brace, Trattoria La Rocca (analisi struttura)

  **Acceptance Criteria**:
  - [ ] Tutte le categorie menu presenti (min. 8)
  - [ ] Ogni piatto mostra: nome, descrizione, prezzo
  - [ ] Navigazione categorie funzionante (tabs/anchor)
  - [ ] Prezzi allineati e ben visibili
  - [ ] Responsive: perfetto su mobile e desktop
  - [ ] Accessibility: contrasto ≥4.5:1, screen reader test

  **QA Scenarios**:

  ```
  Scenario: Menu category navigation
    Tool: Playwright
    Preconditions: Menu page caricata
    Steps:
      1. Cliccare su ogni categoria (Antipasti, Primi, ecc.)
      2. Verificare scroll/switch alla sezione corretta
      3. Verificare contenuto visibile per ogni categoria
    Expected Result: Navigazione fluida, tutte le sezioni accessibili
    Failure Indicators: Link non funzionanti, sezioni vuote
    Evidence: .sisyphus/evidence/task-9-navigation-test.mp4

  Scenario: Screen reader accessibility
    Tool: Playwright + axe-core
    Preconditions: Menu page caricata
    Steps:
      1. Eseguire axe-core accessibility scan
      2. Verificare 0 violazioni critiche/serie
    Expected Result: 0 violazioni WCAG AA
    Failure Indicators: axe-core riporta violazioni
    Evidence: .sisyphus/evidence/task-9-accessibility-report.json
  ```

  **Commit**: YES (groups with 8, 10-12)
  - Message: `feat(pages): menu page component`
  - Files: `src/app/[lang]/menu/page.tsx, src/components/menu/`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 10. Chi Siamo Page Component

  **What to do**:
  - Sviluppare componente Chi Siamo / La Nostra Filosofia
  - Sezioni: Storytelling (testo + foto Massy), Valori (icon + testo), Team (foto + ruoli), Timeline (anni di attività)
  - Integrare copy da Task 4 (IT/EN)
  - Design: caldo, accogliente, umano (foto del team)
  - Layout: testo e immagini bilanciate, non muri di testo
  - Deliverable: Pagina Chi Siamo funzionante e responsive

  **Must NOT do**:
  - NO muri di testo (spezzare con immagini, icone)
  - NO foto stock (solo foto reali del team)
  - NO tono corporate (mantenere familiare)
  - NO lunghezza eccessiva (max 2-3 scroll su mobile)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering` - Pagina narrativa con bilanciamento testo/immagini
  - **Skills**: [`frontend-ui-ux`] - Pattern per storytelling visivo

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (con Task 8-9, 11-12)
  - **Blocks**: Task 13-18
  - **Blocked By**: Task 4 (copy), Task 7 (setup)

  **References**:
  - Copy Chi Siamo: Task 4
  - Brand guidelines: Task 1
  - Best practice: storytelling autentico, volti del team

  **Acceptance Criteria**:
  - [ ] Storia di Massy raccontata con layout accattivante
  - [ ] Sezione valori con icone
  - [ ] Foto team (placeholder se non disponibili)
  - [ ] Responsive: perfetto su mobile e desktop
  - [ ] Loading time <2 secondi

  **QA Scenarios**:

  ```
  Scenario: Visual hierarchy test
    Tool: Playwright
    Preconditions: Chi Siamo page caricata
    Steps:
      1. Verificare heading hierarchy (H1 → H2 → H3)
      2. Verificare spacing tra sezioni
      3. Verificare leggibilità testo (font-size ≥16px mobile)
    Expected Result: Gerarchia visiva chiara, testo leggibile
    Failure Indicators: Heading saltati, testo piccolo, spacing inconsistente
    Evidence: .sisyphus/evidence/task-10-hierarchy-test.png
  ```

  **Commit**: YES (groups with 8-9, 11-12)
  - Message: `feat(pages): chi siamo page component`
  - Files: `src/app/[lang]/chi-siamo/page.tsx, src/components/about/`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 11. Contatti Page Component

  **What to do**:
  - Sviluppare componente Contatti / Dove Siamo
  - Sezioni: Indirizzo, Mappa interattiva, Orari, Telefono/Email, Form contatti, Come Arrivare
  - Integrare Google Maps embed (o Leaflet per privacy)
  - Integrare copy da Task 5 (IT/EN)
  - CTA: click-to-call, click-to-maps su mobile
  - Structured data: schema.org LocalBusiness
  - Deliverable: Pagina Contatti funzionante e responsive

  **Must NOT do**:
  - NO mappa statica (deve essere interattiva)
  - NO informazioni incomplete (tutti i contatti visibili)
  - NO form senza validazione
  - NO structured data mancante ( LocalBusiness obbligatorio)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering` - UI con integrazione mappa e form
  - **Skills**: [`frontend-ui-ux`] - Pattern per form e mappe

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (con Task 8-10, 12)
  - **Blocks**: Task 13-18
  - **Blocked By**: Task 5 (copy), Task 7 (setup)

  **References**:
  - Copy Contatti: Task 5
  - Google Maps Embed API: https://developers.google.com/maps/documentation/embed
  - Schema.org LocalBusiness: https://schema.org/LocalBusiness

  **Acceptance Criteria**:
  - [ ] Mappa interattiva funzionante
  - [ ] Click-to-call e click-to-maps su mobile
  - [ ] Form contatti con validazione
  - [ ] Orari visibili e leggibili
  - [ ] Structured data LocalBusiness valido
  - [ ] Responsive: perfetto su mobile e desktop

  **QA Scenarios**:

  ```
  Scenario: Map interaction test
    Tool: Playwright
    Preconditions: Contatti page caricata
    Steps:
      1. Verificare mappa caricata
      2. Interagire con mappa (zoom, pan)
      3. Cliccare "Indicazioni" → verificare apertura Google Maps
    Expected Result: Mappa interattiva, link funzionanti
    Failure Indicators: Mappa non caricata, link rotti
    Evidence: .sisyphus/evidence/task-11-map-test.mp4

  Scenario: Form validation test
    Tool: Playwright
    Preconditions: Contatti page con form
    Steps:
      1. Submit form vuoto → verificare errori
      2. Submit con email invalida → verificare errore
      3. Submit con dati validi → verificare successo
    Expected Result: Validazione funzionante, messaggi chiari
    Failure Indicators: Form submit senza validazione, errori non chiari
    Evidence: .sisyphus/evidence/task-11-form-validation.mp4
  ```

  **Commit**: YES (groups with 8-10, 12)
  - Message: `feat(pages): contatti page component`
  - Files: `src/app/[lang]/contatti/page.tsx, src/components/contact/`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 12. Navigation & Footer

  **What to do**:
  - Sviluppare componente Navigation (header) e Footer
  - Navigation: logo, link alle pagine, switch lingua IT/EN, CTA "Prenota"
  - Footer: contatti rapidi, link social, copyright, link legali (privacy, cookie)
  - Responsive: hamburger menu su mobile, sticky header opzionale
  - Accessibility: keyboard navigation, ARIA labels
  - Deliverable: Componenti Navigation e Footer riutilizzabili

  **Must NOT do**:
  - NO menu mobile non funzionante (hamburger deve aprire/chiudere)
  - NO switch lingua nascosto (deve essere ben visibile)
  - NO footer incompleto (tutti i link legali richiesti)
  - NO accessibility ignorata (keyboard nav obbligatoria)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering` - Componenti navigazione critici per UX
  - **Skills**: [`frontend-ui-ux`] - Pattern per navigation e footer

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (con Task 8-11)
  - **Blocks**: Task 13-18 (tutte le pagine usano nav/footer)
  - **Blocked By**: Task 1 (logo), Task 7 (setup)

  **References**:
  - Brand guidelines: Task 1 (logo, colori)
  - Best practice: sticky nav su mobile, footer completo
  - Accessibility: WCAG 2.1 keyboard navigation

  **Acceptance Criteria**:
  - [ ] Logo cliccabile (torna a home)
  - [ ] Tutte le pagine linkate in nav
  - [ ] Switch lingua IT/EN funzionante
  - [ ] CTA "Prenota" sempre visibile
  - [ ] Hamburger menu mobile funzionante
  - [ ] Footer con tutti i link legali
  - [ ] Keyboard navigation test passato

  **QA Scenarios**:

  ```
  Scenario: Mobile hamburger menu
    Tool: Playwright
    Preconditions: Qualsiasi pagina caricata
    Steps:
      1. Impostare viewport mobile (375px)
      2. Cliccare hamburger icon
      3. Verificare menu aperto
      4. Cliccare link → verificare navigazione
      5. Cliccare close → verificare menu chiuso
    Expected Result: Menu si apre/chiude, link funzionano
    Failure Indicators: Menu non si apre, link non cliccabili
    Evidence: .sisyphus/evidence/task-12-hamburger-test.mp4

  Scenario: Language switcher
    Tool: Playwright
    Preconditions: Qualsiasi pagina caricata
    Steps:
      1. Cliccare switcher IT → EN
      2. Verificare URL cambia (/it/ → /en/)
      3. Verificare contenuto tradotto
      4. Ripetere EN → IT
    Expected Result: Switching funziona, contenuti corretti
    Failure Indicators: URL non cambia, contenuti non tradotti
    Evidence: .sisyphus/evidence/task-12-i18n-switch.mp4

  Scenario: Keyboard navigation
    Tool: Playwright
    Preconditions: Qualsiasi pagina caricata
    Steps:
      1. Premere Tab → verificare focus su elementi navigabili
      2. Premere Enter su link → verificare navigazione
      3. Verificare focus visible (outline)
    Expected Result: Tutti gli elementi navigabili da tastiera
    Failure Indicators: Elementi non focusabili, outline assente
    Evidence: .sisyphus/evidence/task-12-keyboard-nav.mp4
  ```

  **Commit**: YES (groups with 8-11)
  - Message: `feat(components): navigation and footer`
  - Files: `src/components/navigation.tsx, src/components/footer.tsx`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 13. Galleria Page Component

  **What to do**:
  - Sviluppare componente Galleria Foto
  - Layout: grid responsive (masonry o grid CSS)
  - Funzionalità: lightbox per ingrandimento, lazy loading immagini
  - Categorie foto: Locale, Piatti, Team, Eventi
  - Integrazione: placeholder foto (da sostituire con Task 20)
  - Performance: lazy loading, WebP format, dimensioni ottimizzate
  - Deliverable: Pagina Galleria funzionante e performante

  **Must NOT do**:
  - NO immagini non ottimizzate (max 200KB per foto)
  - NO lazy loading mancante (performance killer)
  - NO lightbox che blocca scroll
  - NO grid non responsive (deve adattarsi a mobile)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering` - Grid layout e gestione immagini
  - **Skills**: [`frontend-ui-ux`] - Pattern per gallerie e lightbox

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (con Task 14-18)
  - **Blocks**: Task 20-21 (caricamento foto finali)
  - **Blocked By**: Task 7 (setup), Task 12 (nav/footer)

  **References**:
  - Best practice: lazy loading, WebP, responsive images
  - Lightbox libraries: photoswipe, lightgallery (leggere, accessibili)

  **Acceptance Criteria**:
  - [ ] Grid responsive (3 colonne desktop, 2 tablet, 1 mobile)
  - [ ] Lightbox funzionante (click per ingrandire)
  - [ ] Lazy loading implementato
  - [ ] Categorie filtrabili (opzionale)
  - [ ] Performance: caricamento <3 secondi con 30 foto

  **QA Scenarios**:

  ```
  Scenario: Lazy loading test
    Tool: Playwright
    Preconditions: Galleria page con 30+ foto
    Steps:
      1. Caricare pagina, verificare solo foto above-the-load
      2. Scrollare verso il basso
      3. Verificare foto caricano on-demand
    Expected Result: Lazy loading funzionante, foto caricano allo scroll
    Failure Indicators: Tutte le foto caricano subito (performance hit)
    Evidence: .sisyphus/evidence/task-13-lazy-loading.mp4

  Scenario: Lightbox interaction
    Tool: Playwright
    Preconditions: Galleria page caricata
    Steps:
      1. Cliccare su una foto
      2. Verificare lightbox aperto a full-screen
      3. Cliccare close o outside → verificare chiusura
      4. Verificare navigazione avanti/indietro (se multiple)
    Expected Result: Lightbox si apre/chiude, navigazione funziona
    Failure Indicators: Lightbox non si apre, chiusura non funziona
    Evidence: .sisyphus/evidence/task-13-lightbox-test.mp4
  ```

  **Commit**: YES (groups with 14-18)
  - Message: `feat(pages): galleria page component`
  - Files: `src/app/[lang]/galleria/page.tsx, src/components/gallery/`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 14. Prenotazioni Form + Backend

  **What to do**:
  - Sviluppare sistema prenotazioni completo
  - Frontend: form con campi (nome, email, telefono, data, ora, persone, note)
  - Backend: API route per salvare prenotazioni (database o email)
  - Validazione: frontend + backend (campi required, formato email, telefono)
  - Conferma: email automatica al cliente + notifica al ristorante
  - Alternative: integrazione WhatsApp (click-to-chat per prenotazione rapida)
  - Deliverable: Sistema prenotazioni funzionante end-to-end

  **Must NOT do**:
  - NO validazione solo frontend (deve esserci anche backend)
  - NO email non confermate (inviare conferma al cliente)
  - NO dati persi (salvare su database o almeno log)
  - NO form senza gestione errori

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high` - Full-stack: frontend form + backend API + email
  - **Skills**: [] - Competenze full-stack standard

  **Parallelization**:
  - **Can Run In Parallel**: NO (dipende da struttura pagine)
  - **Parallel Group**: Wave 3 (dopo Task 8-12)
  - **Blocks**: Task 23 (test end-to-end)
  - **Blocked By**: Task 7 (setup), Task 12 (nav/footer)

  **References**:
  - Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
  - Email: Resend, SendGrid, o SMTP diretto
  - Database: SQLite (semplice), PostgreSQL, o Google Sheets (low-cost)

  **Acceptance Criteria**:
  - [ ] Form con tutti i campi richiesti
  - [ ] Validazione frontend (errori in tempo reale)
  - [ ] API backend funzionante
  - [ ] Email conferma inviata al cliente
  - [ ] Notifica al ristorante (email o WhatsApp)
  - [ ] Dati salvati (database o log)

  **QA Scenarios**:

  ```
  Scenario: Form submission success
    Tool: Playwright
    Preconditions: Pagina Prenotazioni caricata
    Steps:
      1. Compilare form con dati validi
      2. Submit form
      3. Verificare messaggio successo
      4. Verificare email ricevuta (controllare inbox test)
    Expected Result: Form submit, conferma visiva, email inviata
    Failure Indicators: Errore submit, nessuna email, messaggio errore
    Evidence: .sisyphus/evidence/task-14-submit-success.mp4

  Scenario: Form validation errors
    Tool: Playwright
    Preconditions: Pagina Prenotazioni caricata
    Steps:
      1. Submit form vuoto → verificare errori
      2. Email invalida → verificare errore
      3. Data passata → verificare errore
    Expected Result: Errori di validazione mostrati chiaramente
    Failure Indicators: Form submit senza validazione, errori non chiari
    Evidence: .sisyphus/evidence/task-14-validation-errors.mp4

  Scenario: Backend API test
    Tool: Bash (curl)
    Preconditions: API endpoint attivo
    Steps:
      1. POST /api/prenotazioni con dati validi
      2. Verificare response 200 OK
      3. POST con dati invalidi → verificare 400 Bad Request
    Expected Result: API risponde correttamente, validazione backend
    Failure Indicators: 500 error, validazione mancante
    Evidence: .sisyphus/evidence/task-14-api-test.txt
  ```

  **Commit**: YES (groups with 15-18)
  - Message: `feat(feature): prenotazioni form + backend API`
  - Files: `src/app/[lang]/prenotazioni/page.tsx, src/app/api/prenotazioni/route.ts`
  - Pre-commit: `npm run build && npm run lint && npm test`

---

- [ ] 15. Recensioni Integration

  **What to do**:
  - Integrare recensioni da Google Business Profile e/o TripAdvisor
  - Opzioni: widget ufficiale Google, API terze (Elfsight, TrustIndex), o scrape manuale
  - Display: carousel o grid con stelle, testo, autore, data
  - Filtro: mostrare solo recensioni 4-5 stelle (opzionale)
  - CTA: "Lascia una recensione" → link a Google/TripAdvisor
  - Deliverable: Sezione recensioni funzionante e aggiornata

  **Must NOT do**:
  - NO recensioni fake o inventate (solo reali)
  - NO widget pesanti che rallentano il sito
  - NO recensioni negative in evidenza (filtrare o moderare)
  - NO link a piattaforme sbagliate

  **Recommended Agent Profile**:
  - **Category**: `quick` - Integrazione widget/API, task operativo
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (con Task 13-14, 16-18)
  - **Blocks**: Task 23 (test QA)
  - **Blocked By**: Task 6 (GBP setup)

  **References**:
  - Google Reviews Widget: https://developers.google.com/maps/documentation/javascript/examples/interaction-reviews
  - TripAdvisor Widget: https://www.tripadvisor.com/WidgetEmbed
  - Alternative: Elfsight, TrustIndex (paid ma facili)

  **Acceptance Criteria**:
  - [ ] Recensioni visibili e aggiornate
  - [ ] Stelle e rating corretti
  - [ ] CTA "Lascia recensione" funzionante
  - [ ] Performance: widget non rallenta pagina
  - [ ] Responsive: perfetto su mobile

  **QA Scenarios**:

  ```
  Scenario: Reviews widget loading
    Tool: Playwright
    Preconditions: Pagina con recensioni caricata
    Steps:
      1. Verificare widget caricato entro 3 secondi
      2. Verificare recensioni visibili (min. 5)
      3. Verificare stelle e rating corretti
    Expected Result: Widget caricato, recensioni visibili
    Failure Indicators: Widget non caricato, recensioni assenti
    Evidence: .sisyphus/evidence/task-15-widget-load.mp4

  Scenario: Review CTA link
    Tool: Playwright
    Preconditions: Pagina con recensioni
    Steps:
      1. Cliccare "Lascia una recensione"
      2. Verificare apertura Google/TripAdvisor in new tab
    Expected Result: Link corretto, nuova tab aperta
    Failure Indicators: Link rotto, stessa tab (perde utente)
    Evidence: .sisyphus/evidence/task-15-cta-link.mp4
  ```

  **Commit**: YES (groups with 13-14, 16-18)
  - Message: `feat(integration): recensioni Google/TripAdvisor`
  - Files: `src/components/reviews.tsx`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 16. Eventi Page Component

  **What to do**:
  - Sviluppare componente Eventi / Serate a Tema
  - Sezioni: Lista eventi (data, titolo, descrizione, prezzo, CTA prenota)
  - Funzionalità: filtro per data, countdown per eventi futuri
  - Esempi eventi: "Serata Degustazione Vino", "Cena Etrusca", "Aperitivo al Tramonto"
  - Integrazione: copy placeholder (eventi da definire con cliente)
  - Deliverable: Pagina Eventi funzionante e aggiornabile

  **Must NOT do**:
  - NO eventi passati in evidenza (solo futuri o archivio separato)
  - NO informazioni incomplete (data, ora, prezzo sempre visibili)
  - NO CTA mancante (ogni evento deve avere "Prenota")
  - NO layout confusionario (lista chiara e ordinata)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering` - UI per lista eventi con CTA
  - **Skills**: [`frontend-ui-ux`] - Pattern per card eventi

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (con Task 13-15, 17-18)
  - **Blocks**: Task 23 (test QA)
  - **Blocked By**: Task 7 (setup), Task 12 (nav/footer)

  **References**:
  - Best practice: card eventi con immagine, data in evidenza, CTA chiara
  - Esempi: OpenTable Events, Resy

  **Acceptance Criteria**:
  - [ ] Lista eventi con card (immagine, titolo, data, descrizione, prezzo)
  - [ ] Filtro per data (opzionale)
  - [ ] CTA "Prenota" per ogni evento
  - [ ] Eventi futuri in evidenza
  - [ ] Responsive: perfetto su mobile

  **QA Scenarios**:

  ```
  Scenario: Events list rendering
    Tool: Playwright
    Preconditions: Pagina Eventi caricata
    Steps:
      1. Verificare lista eventi visibile (min. 3 eventi placeholder)
      2. Verificare ogni card ha: immagine, titolo, data, prezzo, CTA
      3. Cliccare CTA → verificare redirect a prenotazioni
    Expected Result: Eventi visibili, CTA funzionanti
    Failure Indicators: Card incomplete, CTA non funzionanti
    Evidence: .sisyphus/evidence/task-16-events-list.mp4
  ```

  **Commit**: YES (groups with 13-15, 17-18)
  - Message: `feat(pages): eventi page component`
  - Files: `src/app/[lang]/eventi/page.tsx, src/components/events/`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 17. SEO Meta Tags + Structured Data

  **What to do**:
  - Implementare SEO tecnica completa
  - Meta tags: title, description, keywords, og:title, og:description, twitter:card
  - Structured data: schema.org LocalBusiness, Restaurant, Menu
  - Hreflang: tag per multilingua IT/EN
  - Sitemap: generare sitemap.xml dinamica
  - Robots: configurare robots.txt
  - Deliverable: SEO tecnica completa e validata

  **Must NOT do**:
  - NO meta tag duplicati o mancanti
  - NO structured data invalido (validare con Google Rich Results)
  - NO hreflang sbagliato (deve corrispondere a URL reali)
  - NO sitemap statica (deve aggiornarsi con nuovi contenuti)

  **Recommended Agent Profile**:
  - **Category**: `quick` - Task tecnico, configurazione standard
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (con Task 13-16, 18)
  - **Blocks**: Task 26 (SEO Audit)
  - **Blocked By**: Task 8-12 (pagine create)

  **References**:
  - Next.js Metadata: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  - Schema.org Restaurant: https://schema.org/Restaurant
  - Google Rich Results Test: https://search.google.com/test/rich-results

  **Acceptance Criteria**:
  - [ ] Meta tags unici per ogni pagina
  - [ ] Structured data valido (LocalBusiness, Restaurant, Menu)
  - [ ] Hreflang IT/EN corretto
  - [ ] Sitemap.xml generata e accessibile
  - [ ] Robots.txt configurato
  - [ ] Google Rich Results Test: 0 errori

  **QA Scenarios**:

  ```
  Scenario: Meta tags verification
    Tool: Playwright
    Preconditions: Ogni pagina caricata
    Steps:
      1. Estrarre meta title, description, og tags
      2. Verificare unicità per pagina
      3. Verificare lunghezza ottimale (title 50-60 chars, description 150-160)
    Expected Result: Meta tags unici e ottimizzati
    Failure Indicators: Meta duplicati, troppo lunghi/corti, mancanti
    Evidence: .sisyphus/evidence/task-17-meta-tags.txt

  Scenario: Structured data validation
    Tool: Bash (curl + schema validator)
    Preconditions: Sito deployato (URL pubblico)
    Steps:
      1. Chiamare Google Rich Results Test API
      2. Verificare 0 errori, 0 warning
    Expected Result: Structured data valido
    Failure Indicators: Errori o warning da Google
    Evidence: .sisyphus/evidence/task-17-structured-data.json
  ```

  **Commit**: YES (groups with 13-16, 18)
  - Message: `feat(seo): meta tags + structured data + sitemap`
  - Files: `src/app/[lang]/layout.tsx, src/app/sitemap.ts, src/app/robots.ts`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 18. Mobile Sticky CTA

  **What to do**:
  - Implementare CTA sticky "Prenota/Chiama" per mobile
  - Posizione: bottom fixed bar (sempre visibile su mobile)
  - Contenuto: 2 bottoni (Chiama, Prenota) o 1 bottone + icona telefono
  - Comportamento: nascosto su desktop, visibile solo <768px
  - Z-index: sopra tutti gli elementi (ma non coprire contenuti critici)
  - Deliverable: CTA sticky funzionante e non intrusiva

  **Must NOT do**:
  - NO CTA su desktop (inutile e antiestetico)
  - NO CTA che copre contenuti importanti (padding bottom aggiuntivo)
  - NO click accidentali (dimensioni adeguate, spacing)
  - NO animazioni fastidiose

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering` - UI component mobile-specific
  - **Skills**: [`frontend-ui-ux`] - Pattern per sticky CTA

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (con Task 13-17)
  - **Blocks**: Task 23 (test QA mobile)
  - **Blocked By**: Task 12 (nav/footer)

  **References**:
  - Best practice: bottom bar, 2 CTA max, dimensioni 44x44px min (touch target)

  **Acceptance Criteria**:
  - [ ] Sticky bar visibile solo su mobile (<768px)
  - [ ] 2 CTA: "Chiama" (tel: link) e "Prenota" (link a pagina)
  - [ ] Z-index corretto (sopra header/footer)
  - [ ] Padding bottom aggiunto al body (evita overlay contenuti)
  - [ ] Touch target ≥44x44px

  **QA Scenarios**:

  ```
  Scenario: Sticky CTA visibility
    Tool: Playwright
    Preconditions: Qualsiasi pagina caricata
    Steps:
      1. Impostare viewport 375px (mobile)
      2. Scrollare pagina dall'alto al basso
      3. Verificare CTA sempre visibile
      4. Impostare viewport 1920px (desktop)
      5. Verificare CTA nascosta
    Expected Result: CTA visibile solo su mobile, sempre in view
    Failure Indicators: CTA nascosta su mobile, visibile su desktop
    Evidence: .sisyphus/evidence/task-18-sticky-visibility.mp4

  Scenario: CTA click test
    Tool: Playwright
    Preconditions: Pagina con sticky CTA (mobile viewport)
    Steps:
      1. Cliccare "Chiama" → verificare apertura dialer
      2. Cliccare "Prenota" → verificare redirect a prenotazioni
    Expected Result: Entrambi i link funzionano
    Failure Indicators: Link non cliccabili, redirect sbagliati
    Evidence: .sisyphus/evidence/task-18-cta-clicks.mp4
  ```

  **Commit**: YES (groups with 13-17)
  - Message: `feat(mobile): sticky CTA bar`
  - Files: `src/components/sticky-cta.tsx`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 19. Shooting Fotografico (Brief + Linee Guida)

  **What to do**:
  - Creare brief dettagliato per shooting fotografico professionale
  - Lista shot obbligatori:
    - Esterno locale (giorno e sera)
    - Interno sala (angolo ampio, dettagli tavoli, illuminazione)
    - Cucina (chef all'opera, piatti in preparazione)
    - Piatti signature (min. 15 piatti: antipasti, primi, secondi terra, secondi mare, dolci)
    - Team (Massy, chef, sala - ritratti e action shot)
    - Dettagli (ingredienti, impiattamento, vino versato)
  - Linee guida: illuminazione naturale, stile luminoso e caldo, no filtri pesanti
  - Specifiche tecniche: RAW + JPEG, min. 24MP, formato verticale e orizzontale
  - Deliverable: Brief documento + foto grezze (da ottimizzare Task 20)

  **Must NOT do**:
  - NO foto stock (solo foto originali del locale)
  - NO foto buie o sgranate (illuminazione professionale obbligatoria)
  - NO piatti freddi o poco appetitosi (cucina deve essere in azione)
  - NO persone di sfondo non autorizzate (privacy)

  **Recommended Agent Profile**:
  - **Category**: `artistry` - Brief fotografico richiede sensibilità artistica e conoscenza tecnica
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 4 (dopo Task 13-18)
  - **Blocks**: Task 20-21 (ottimizzazione e caricamento)
  - **Blocked By**: Task 13 (Galleria component pronto)

  **References**:
  - Food photography best practice: luce naturale, angolo 45°, styling ingredienti
  - Ristoranti di successo: foto luminose, team visibile, atmosfera accogliente

  **Acceptance Criteria**:
  - [ ] Brief documento completo con lista shot
  - [ ] Min. 100 foto scattate
  - [ ] Min. 15 piatti signature fotografati
  - [ ] Foto team e locale completi
  - [ ] Formato RAW + JPEG disponibili

  **QA Scenarios**:

  ```
  Scenario: Photo quality check
    Tool: Look_at (analisi visiva)
    Preconditions: Campione 30 foto selezionate
    Steps:
      1. Analizzare illuminazione (istogramma bilanciato)
      2. Verificare fuoco (piatti nitidi)
      3. Verificare composizione (regola terzi, angoli vari)
    Expected Result: Foto professionali, illuminazione corretta, composizione curata
    Failure Indicators: Foto buie, sfocate, composizione povera
    Evidence: .sisyphus/evidence/task-19-photo-quality-report.txt
  ```

  **Commit**: NO (task esterno - foto grezze)
  - Message: N/A
  - Files: `src/assets/photos/raw/` (foto grezze)
  - Pre-commit: N/A

---

- [ ] 20. Ottimizzazione Foto (Resize, Compress, WebP)

  **What to do**:
  - Ottimizzare tutte le foto dallo shooting
  - Resize: 3 dimensioni (thumbnail 400px, medium 800px, large 1600px)
  - Formato: WebP (con fallback JPEG per browser vecchi)
  - Compressione: qualità 80% (bilancio qualità/dimensione)
  - Target: max 200KB per foto large, max 50KB per thumbnail
  - Naming: descrittivo e SEO-friendly (es. `antipasto-misto-damassy.webp`)
  - Deliverable: Tutte le foto ottimizzate in `src/assets/photos/`

  **Must NOT do**:
  - NO foto oltre 500KB (performance killer)
  - NO solo JPEG (WebP obbligatorio per performance)
  - NO naming generico (`IMG_001.jpg` → no)
  - NO qualità sotto 70% (foto sgranate)

  **Recommended Agent Profile**:
  - **Category**: `quick` - Task operativo di ottimizzazione
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 4 (dopo Task 19)
  - **Blocks**: Task 21 (caricamento contenuti)
  - **Blocked By**: Task 19 (foto grezze)

  **References**:
  - Sharp (Node.js): https://sharp.pixelplumbing.com/
  - WebP best practice: https://developers.google.com/speed/webp

  **Acceptance Criteria**:
  - [ ] Tutte le foto convertite in WebP
  - [ ] 3 dimensioni per ogni foto (thumbnail, medium, large)
  - [ ] Dimensione max 200KB (large), 50KB (thumbnail)
  - [ ] Naming descrittivo e SEO-friendly
  - [ ] Qualità visiva mantenuta (no artefatti)

  **QA Scenarios**:

  ```
  Scenario: Image size validation
    Tool: Bash (script di verifica)
    Preconditions: Tutte le foto ottimizzate in src/assets/photos/
    Steps:
      1. Scansionare tutte le foto
      2. Verificare dimensione file (max 200KB large)
      3. Verificare formato WebP
    Expected Result: Tutte le foto sotto limite, formato corretto
    Failure Indicators: Foto oltre 200KB, formato sbagliato
    Evidence: .sisyphus/evidence/task-20-size-validation.txt

  Scenario: Visual quality check
    Tool: Look_at (analisi visiva campione)
    Preconditions: Campione 20 foto ottimizzate
    Steps:
      1. Confrontare originale vs ottimizzata
      2. Verificare qualità visiva (no artefatti, colori corretti)
    Expected Result: Qualità visiva equivalente, dimensione ridotta
    Failure Indicators: Artefatti visibili, colori sbiaditi
    Evidence: .sisyphus/evidence/task-20-quality-check.txt
  ```

  **Commit**: YES (groups with 21-23)
  - Message: `chore(assets): optimize photos (WebP, resize, compress)`
  - Files: `src/assets/photos/` (tutte le foto ottimizzate)
  - Pre-commit: N/A

---

- [ ] 21. Caricamento Contenuti Finali

  **What to do**:
  - Caricare tutti i contenuti finali nel sito
  - Foto: sostituire placeholder con foto ottimizzate (Task 20)
  - Copy: verificare testi IT/EN definitivi (Task 2-5)
  - Menu: inserire piatti e prezzi finali
  - Contatti: verificare indirizzo, telefono, orari definitivi
  - SEO: verificare meta tag e structured data
  - Deliverable: Sito con contenuti finali completi

  **Must NOT do**:
  - NO placeholder rimasti (tutto deve essere definitivo)
  - NO link rotti o immagini mancanti
  - NO errori di battitura nei testi
  - NO prezzi o informazioni non verificate

  **Recommended Agent Profile**:
  - **Category**: `quick` - Task operativo di caricamento contenuti
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 4 (dopo Task 20)
  - **Blocks**: Task 24 (deploy)
  - **Blocked By**: Task 20 (foto ottimizzate), Task 2-5 (copy)

  **References**:
  - Copy: Task 2-5 (contenuti IT/EN)
  - Foto: Task 20 (foto ottimizzate)
  - Menu: Task 3 (menu definitivo)

  **Acceptance Criteria**:
  - [ ] Tutte le foto caricate e visibili
  - [ ] Tutti i testi IT/EN presenti e corretti
  - [ ] Menu completo con prezzi
  - [ ] Contatti verificati (indirizzo, telefono, orari)
  - [ ] Nessun placeholder rimasto
  - [ ] Nessun link rotto

  **QA Scenarios**:

  ```
  Scenario: Content completeness check
    Tool: Playwright
    Preconditions: Sito con contenuti caricati
    Steps:
      1. Navigare tutte le pagine (Home, Menu, Chi Siamo, Galleria, Contatti, Eventi)
      2. Verificare assenza placeholder ("Lorem ipsum", "coming soon")
      3. Verificare tutte le immagini caricate (no 404)
    Expected Result: Tutti i contenuti presenti, nessun placeholder
    Failure Indicators: Placeholder visibili, immagini 404
    Evidence: .sisyphus/evidence/task-21-content-check.mp4

  Scenario: Link integrity check
    Tool: Playwright
    Preconditions: Sito navigabile
    Steps:
      1. Scansionare tutti i link interni
      2. Verificare nessun 404
    Expected Result: Tutti i link funzionanti
    Failure Indicators: Link rotti (404)
    Evidence: .sisyphus/evidence/task-21-link-check.txt
  ```

  **Commit**: YES (groups with 20, 22-23)
  - Message: `feat(content): load final content (photos, copy, menu)`
  - Files: `src/content/*, src/assets/photos/*`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 22. Integrazione Mappa Google

  **What to do**:
  - Integrare Google Maps interattiva nella pagina Contatti
  - Ottenere API Key da Google Cloud Console
  - Configurare Maps Embed API o JavaScript API
  - Posizionare marker su Via Prato del Cavaliere, 7, Cerveteri
  - Aggiungere CTA "Indicazioni" per navigazione
  - Deliverable: Mappa interattiva funzionante

  **Must NOT do**:
  - NO API key esposta nel codice (usare environment variables)
  - NO mappa statica (deve essere interattiva)
  - NO marker sbagliato (verificare coordinate esatte)
  - NO quota superata (monitorare utilizzo API)

  **Recommended Agent Profile**:
  - **Category**: `quick` - Integrazione API standard
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4 (con Task 21, 23)
  - **Blocks**: Task 23 (test end-to-end)
  - **Blocked By**: Task 11 (Contatti page)

  **References**:
  - Google Maps Embed API: https://developers.google.com/maps/documentation/embed
  - Google Cloud Console: https://console.cloud.google.com/

  **Acceptance Criteria**:
  - [ ] Mappa caricata e interattiva
  - [ ] Marker posizionato correttamente
  - [ ] CTA "Indicazioni" funzionante
  - [ ] API key sicura (environment variable)
  - [ ] Responsive: perfetta su mobile

  **QA Scenarios**:

  ```
  Scenario: Map interaction test
    Tool: Playwright
    Preconditions: Pagina Contatti caricata
    Steps:
      1. Verificare mappa caricata
      2. Interagire (zoom, pan)
      3. Cliccare "Indicazioni" → verificare Google Maps
    Expected Result: Mappa interattiva, link funzionante
    Failure Indicators: Mappa non caricata, link rotto
    Evidence: .sisyphus/evidence/task-22-map-test.mp4
  ```

  **Commit**: YES (groups with 20-21, 23)
  - Message: `feat(integration): Google Maps embed`
  - Files: `src/components/map.tsx, .env.local`
  - Pre-commit: `npm run build && npm run lint`

---

- [ ] 23. Test Cross-Browser

  **What to do**:
  - Testare sito su tutti i browser principali
  - Browser: Chrome, Firefox, Safari, Edge (ultime 2 versioni)
  - Device: desktop (Windows, Mac), mobile (iOS Safari, Android Chrome)
  - Verificare: layout, funzionalità, performance
  - Documentare: eventuali bug specifici per browser
  - Deliverable: Report test cross-browser

  **Must NOT do**:
  - NO test solo su Chrome (altri browser possono rompersi)
  - NO bug ignorati (documentare e fixare)
  - NO device mobile ignorati (50%+ traffico da mobile)

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high` - Test sistematico su multiple piattaforme
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 4 (dopo Task 21-22)
  - **Blocks**: Task 25-27 (deploy e audit)
  - **Blocked By**: Task 21 (contenuti finali)

  **References**:
  - BrowserStack o LambdaTest per test cross-browser cloud
  - Playwright per automazione test

  **Acceptance Criteria**:
  - [ ] Chrome (desktop + mobile): OK
  - [ ] Firefox (desktop + mobile): OK
  - [ ] Safari (desktop + iOS): OK
  - [ ] Edge (desktop): OK
  - [ ] Nessun bug critico su nessun browser

  **QA Scenarios**:

  ```
  Scenario: Cross-browser visual regression
    Tool: Playwright
    Preconditions: Sito deployato
    Steps:
      1. Catturare screenshot Home page su Chrome, Firefox, Safari, Edge
      2. Confrontare screenshot (differenze layout)
      3. Verificare nessuna differenza critica
    Expected Result: Layout consistente su tutti i browser
    Failure Indicators: Differenze layout significative
    Evidence: .sisyphus/evidence/task-23-visual-regression.png

  Scenario: Functional test per browser
    Tool: Playwright
    Preconditions: Sito deployato
    Steps:
      1. Testare form prenotazioni su ogni browser
      2. Testare navigazione menu su ogni browser
      3. Testare sticky CTA su mobile browser
    Expected Result: Tutte le funzionalità lavorano su ogni browser
    Failure Indicators: Funzionalità rotte su browser specifici
    Evidence: .sisyphus/evidence/task-23-functional-test.txt
  ```

  **Commit**: YES (groups with 20-22)
  - Message: `test(qa): cross-browser testing report`
  - Files: `docs/cross-browser-report.md`
  - Pre-commit: N/A

---

- [ ] 24. Deploy su Vercel/Netlify

  **What to do**:
  - Deployare sito su piattaforma hosting (Vercel o Netlify)
  - Configurare: dominio personalizzato (damassy.it o damassy-ristorante.it)
  - SSL: certificato HTTPS automatico
  - Environment variables: configurare API key, email, ecc.
  - CI/CD: deploy automatico su push a main
  - Deliverable: Sito live e accessibile online

  **Must NOT do**:
  - NO deploy senza dominio personalizzato (no *.vercel.app)
  - NO SSL mancante (HTTPS obbligatorio)
  - NO environment variables esposte (no API key nel client)
  - NO deploy senza backup/rollback plan

  **Recommended Agent Profile**:
  - **Category**: `quick` - Deploy standard su Vercel/Netlify
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 5 (dopo Task 20-23)
  - **Blocks**: Task 25-27 (audit post-deploy)
  - **Blocked By**: Task 21-23 (contenuti e test completi)

  **References**:
  - Vercel: https://vercel.com/docs
  - Netlify: https://docs.netlify.com/
  - Custom domain: https://vercel.com/docs/custom-domains

  **Acceptance Criteria**:
  - [ ] Sito deployato e accessibile online
  - [ ] Dominio personalizzato configurato
  - [ ] HTTPS attivo e valido
  - [ ] Environment variables configurate
  - [ ] CI/CD attivo (deploy su push)
  - [ ] Tempo uptime: 99.9%

  **QA Scenarios**:

  ```
  Scenario: Deploy verification
    Tool: Bash (curl)
    Preconditions: Sito deployato su dominio personalizzato
    Steps:
      1. GET https://damassy.it → verificare 200 OK
      2. Verificare redirect HTTP → HTTPS
      3. Verificare certificato SSL valido
    Expected Result: Sito accessibile, HTTPS attivo, SSL valido
    Failure Indicators: 404, HTTPS non attivo, SSL scaduto
    Evidence: .sisyphus/evidence/task-24-deploy-check.txt

  Scenario: CI/CD test
    Tool: Bash (git push test)
    Preconditions: Repository Git collegato a Vercel/Netlify
    Steps:
      1. Fare commit e push di una modifica minore
      2. Verificare deploy automatico triggerato
      3. Verificare modifica live sul sito
    Expected Result: Deploy automatico funzionante
    Failure Indicators: Deploy non triggerato, errore CI/CD
    Evidence: .sisyphus/evidence/task-24-cicd-test.mp4
  ```

  **Commit**: NO (deploy esterno)
  - Message: N/A
  - Files: N/A
  - Pre-commit: N/A

---

- [ ] 25. Performance Audit (Lighthouse ≥90)

  **What to do**:
  - Eseguire audit performance completo con Google Lighthouse
  - Metriche: Performance, Accessibility, Best Practices, SEO, PWA
  - Target: ≥90 in tutte le categorie (specialmente Performance)
  - Ottimizzazioni comuni: image lazy loading, code splitting, font display swap, preconnect
  - Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
  - Deliverable: Report Lighthouse con score e raccomandazioni

  **Must NOT do**:
  - NO score sotto 90 (accettabile solo per PWA opzionale)
  - NO ottimizzazioni ignorate (ogni warning va risolto)
  - NO test solo desktop (mobile è prioritario)

  **Recommended Agent Profile**:
  - **Category**: `deep` - Audit sistematico richiede analisi approfondita e ottimizzazioni multiple
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 5 (dopo Task 24 deploy)
  - **Blocks**: Task F1-F4 (final verification)
  - **Blocked By**: Task 24 (sito deployato)

  **References**:
  - Google Lighthouse: https://developer.chrome.com/docs/lighthouse/overview/
  - Core Web Vitals: https://web.dev/vitals/
  - PageSpeed Insights: https://pagespeed.web.dev/

  **Acceptance Criteria**:
  - [ ] Performance ≥90 (mobile e desktop)
  - [ ] Accessibility ≥90
  - [ ] Best Practices ≥90
  - [ ] SEO ≥90
  - [ ] LCP <2.5s, FID <100ms, CLS <0.1
  - [ ] Tutte le ottimizzazioni raccomandate implementate

  **QA Scenarios**:

  ```
  Scenario: Lighthouse mobile audit
    Tool: Playwright + Lighthouse
    Preconditions: Sito deployato su dominio pubblico
    Steps:
      1. Eseguire Lighthouse audit (mobile emulation)
      2. Verificare tutti gli score ≥90
      3. Verificare Core Web Vitals nella soglia verde
    Expected Result: Tutti gli score ≥90, Core Web Vitals verdi
    Failure Indicators: Score <90, Core Web Vitals arancioni/rossi
    Evidence: .sisyphus/evidence/task-25-lighthouse-report.json

  Scenario: Performance regression check
    Tool: Bash (curl + PageSpeed Insights API)
    Preconditions: Sito deployato
    Steps:
      1. Chiamare PageSpeed Insights API
      2. Confrontare score con baseline
    Expected Result: Score in linea o migliore di baseline
    Failure Indicators: Score peggiorato rispetto a baseline
    Evidence: .sisyphus/evidence/task-25-pagespeed-report.json
  ```

  **Commit**: YES (groups with 26-27)
  - Message: `perf(audit): Lighthouse ≥90 all categories`
  - Files: `docs/lighthouse-report.json`
  - Pre-commit: N/A

---

- [ ] 26. SEO Audit (Meta, Sitemap, Robots)

  **What to do**:
  - Eseguire audit SEO tecnico completo
  - Verificare: meta tag unici, structured data valido, sitemap.xml, robots.txt, hreflang
  - Tool: Google Search Console, Screaming Frog, Sitebulb
  - Indicizzazione: verificare pagine indicizzate su Google
  - Local SEO: verificare Google Business Profile collegato e coerente
  - Deliverable: Report SEO conIssues e raccomandazioni

  **Must NOT do**:
  - NO errori di indicizzazione (404, redirect chain)
  - NO meta tag duplicati o mancanti
  - NO structured data invalido
  - NO sitemap non aggiornata

  **Recommended Agent Profile**:
  - **Category**: `quick` - Audit SEO è task operativo con tool standard
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 5 (con Task 25, 27)
  - **Blocks**: Task F1-F4 (final verification)
  - **Blocked By**: Task 24 (sito deployato)

  **References**:
  - Google Search Console: https://search.google.com/search-console
  - Screaming Frog: https://www.screamingfrog.co.uk/seo-spider/
  - Google Rich Results Test: https://search.google.com/test/rich-results

  **Acceptance Criteria**:
  - [ ] 0 errori SEO critici
  - [ ] Tutti i meta tag unici e ottimizzati
  - [ ] Structured data valido (0 errori Google Rich Results)
  - [ ] Sitemap.xml accessibile e valida
  - [ ] Robots.txt configurato correttamente
  - [ ] Hreflang IT/EN corretto
  - [ ] Google Business Profile collegato e NAP coerente

  **QA Scenarios**:

  ```
  Scenario: Sitemap accessibility
    Tool: Bash (curl)
    Preconditions: Sito deployato
    Steps:
      1. GET https://damassy.it/sitemap.xml → verificare 200 OK
      2. Verificare formato XML valido
      3. Verificare tutte le pagine presenti
    Expected Result: Sitemap accessibile, XML valido, tutte le pagine incluse
    Failure Indicators: 404, XML invalido, pagine mancanti
    Evidence: .sisyphus/evidence/task-26-sitemap-check.txt

  Scenario: Google Rich Results validation
    Tool: Bash (curl Google Rich Results API)
    Preconditions: Sito deployato
    Steps:
      1. Chiamare API per ogni pagina principale
      2. Verificare 0 errori, 0 warning
    Expected Result: Structured data valido, 0 errori
    Failure Indicators: Errori o warning da Google
    Evidence: .sisyphus/evidence/task-26-rich-results.json
  ```

  **Commit**: YES (groups with 25, 27)
  - Message: `seo(audit): technical SEO validation`
  - Files: `docs/seo-audit-report.md`
  - Pre-commit: N/A

---

- [ ] 27. Documentazione Gestione

  **What to do**:
  - Creare documentazione completa per gestione sito
  - Sezioni:
    - Guida aggiornamento contenuti (menu, eventi, foto)
    - Guida gestione prenotazioni (come visualizzare, gestire email)
    - Guida gestione recensioni (rispondere, monitorare)
    - Contatti supporto (chi chiamare per problemi tecnici)
    - Credenziali (Vercel, dominio, Google Business, email)
  - Formato: documento markdown semplice e leggibile
  - Deliverable: `docs/manuale-gestione.md`

  **Must NOT do**:
  - NO documentazione tecnica incomprensibile (deve essere usabile dal cliente)
  - NO credenziali in chiaro nel documento (usare password manager)
  - NO istruzioni incomplete (step-by-step con screenshot)

  **Recommended Agent Profile**:
  - **Category**: `writing` - Documentazione tecnica richiede chiarezza espositiva
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 5 (con Task 25-26)
  - **Blocks**: Task F1-F4 (final verification)
  - **Blocked By**: Task 24 (sito deployato)

  **References**:
  - Best practice: documentazione con screenshot, step numerati, linguaggio semplice

  **Acceptance Criteria**:
  - [ ] Guida aggiornamento menu (step-by-step)
  - [ ] Guida aggiornamento eventi (step-by-step)
  - [ ] Guida gestione prenotazioni (email, dashboard)
  - [ ] Lista contatti supporto
  - [ ] Lista credenziali (con riferimento a password manager)
  - [ ] Linguaggio semplice e accessibile

  **QA Scenarios**:

  ```
  Scenario: Documentation usability test
    Tool: Bash (review umano)
    Preconditions: Documento documentazione completo
    Steps:
      1. Far leggere documentazione a persona non tecnica
      2. Chiedere di completare task (es. aggiornare menu)
      3. Verificare completamento senza aiuto
    Expected Result: Persona non tecnica completa task con documentazione
    Failure Indicators: Persona bloccata, chiede aiuto, non capisce
    Evidence: .sisyphus/evidence/task-27-usability-report.txt
  ```

  **Commit**: YES (groups with 25-26)
  - Message: `docs(manual): gestione sito per cliente`
  - Files: `docs/manuale-gestione.md`
  - Pre-commit: N/A

---

## Final Verification Wave (MANDATORY — after ALL tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Rejection → fix → re-run.

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Leggere il piano end-to-end. Per ogni "Must Have": verificare implementazione esiste (leggi file, curl endpoint, run command). Per ogni "Must NOT Have": cercare nel codebase pattern proibiti — reject con file:line se trovato. Verificare file evidence esistono in .sisyphus/evidence/. Confrontare deliverables con piano.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Eseguire `npm run build` + `npm run lint` + `npm test`. Verificare file modificati per: `as any`/`@ts-ignore`, catch vuoti, console.log in prod, import unused. Controllare AI slop: commenti eccessivi, over-abstraction, nomi generici (data/result/item/temp).
  Output: `Build [PASS/FAIL] | Lint [PASS/FAIL] | Tests [N pass/N fail] | Files [N clean/N issues] | VERDICT`

- [ ] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill se UI)
  Partire da stato pulito. Eseguire OGNI scenario QA da OGNI task — seguire step esatti, catturare evidence. Testare integrazione cross-task (feature lavorano insieme, non isolamento). Testare edge cases: stato vuoto, input invalido, azioni rapide. Salvare in `.sisyphus/evidence/final-qa/`.
  Output: `Scenarios [N/N pass] | Integration [N/N] | Edge Cases [N tested] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  Per ogni task: leggere "What to do", leggere diff reale (git log/diff). Verificare 1:1 — tutto nello spec costruito (niente mancante), niente oltre spec costruito (niente creep). Controllare compliance "Must NOT do". Rilevare contaminazione cross-task: Task N tocca file Task M. Flag cambiamenti non accountati.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

- **Wave 1 (Task 1-6)**: `feat(brand): identity guidelines` | `feat(copy): pages copy IT/EN` | `chore(gbp): setup profile`
- **Wave 2 (Task 7-12)**: `chore(project): setup Next.js` | `feat(pages): home/menu/chi-siamo/contatti` | `feat(components): nav/footer`
- **Wave 3 (Task 13-18)**: `feat(pages): galleria/eventi` | `feat(feature): prenotazioni` | `feat(integration): recensioni/maps` | `feat(seo): metadata` | `feat(mobile): sticky-cta`
- **Wave 4 (Task 19-23)**: `chore(assets): photos optimized` | `feat(content): final content` | `test(qa): cross-browser`
- **Wave 5 (Task 24-27)**: `deploy: production` | `perf(audit): lighthouse` | `seo(audit): technical` | `docs(manual): gestione`

---

## Success Criteria

### Verification Commands
```bash
npm run build              # Expected: Build completed successfully
npm run lint               # Expected: No lint errors
npm test                   # Expected: All tests pass
npm run lighthouse         # Expected: Performance ≥90, Accessibility ≥90, SEO ≥90
curl https://damassy.it    # Expected: 200 OK, HTML response
```

### Final Checklist
- [ ] Tutti i "Must Have" presenti e funzionanti
- [ ] Tutti i "Must NOT Have" assenti (verificato con grep/search)
- [ ] Tutti i test passano (build, lint, lighthouse, cross-browser)
- [ ] Sito live su dominio personalizzato con HTTPS
- [ ] Documentazione consegnata al cliente
- [ ] Google Business Profile verificato e collegato
- [ ] Tutte le evidence salvate in .sisyphus/evidence/
