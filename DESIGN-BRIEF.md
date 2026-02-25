# Design Brief — Popular Auto Tech (Shepparton)

## Creative Direction

### 1. What does walking into this business FEEL like?
Clean, bright, professional. You walk in and there's a customer lounge with Wi-Fi, refreshments, and a TV. Through the glass, you can see the workshop — transparent, nothing hidden. It feels more like a modern medical practice than a gritty workshop. Smijo keeps everything spotless and organized. This is a family man who takes pride in presentation.

### 2. What is the ONE thing someone would remember?
Smijo Paul's journey — from India to becoming Shepparton's most-reviewed mechanic. 534 Google reviews at 4.9★ in a regional town. That's extraordinary. And the transparency — you literally watch your car being worked on from the reception.

### 3. What existing design captures this feel?
A clean Japanese car showroom — think Toyota's Australian website. White space, clear typography, minimal decoration, trust through transparency and cleanliness. Combined with a magazine profile piece — the kind of story-first layout you'd see in a Monocle small-business feature.

---

## Color System — LIGHT PALETTE (opposite of Elite Diesel)

Elite Diesel: dark soot/ember palette. Popular Auto Tech: clean, light, welcoming.

```css
--color-cloud: #FAFAF8        /* page bg — warm off-white */
--color-cotton: #F2F0EC        /* card bg — slightly warm */
--color-stone: #E5E2DB         /* borders, dividers */
--color-graphite: #3A3A3C      /* body text */
--color-asphalt: #1C1C1E       /* headings */
--color-teal: #0F7B6C          /* primary accent — trust, professionalism */
--color-teal-deep: #0A5C50     /* hover state */
--color-saffron: #E8A317       /* warm accent — nod to Indian heritage */
--color-saffron-light: #FBF3E0 /* saffron tint for backgrounds */
```

Why: Light backgrounds = welcoming. Teal = professional trust (VicRoads, VACC). Saffron = warmth, cultural nod to Smijo's Indian heritage without being heavy-handed. Clean greys for readability.

---

## Typography

**Display:** Space Grotesk — modern, clean, geometric character. Has personality without being trendy.
**Body:** DM Sans — extremely readable, friendly, professional.

NOT Teko (Elite Diesel). NOT serif (wrong vibe for a clean modern workshop).

---

## Layout DNA: Story-First Magazine

This site leads with narrative, not services. Smijo's story IS the selling point.

- Generous whitespace (think Monocle magazine)
- Asymmetric hero — text-heavy left, image right
- Pull quotes from real reviews break up sections
- Proof signals woven into content, not giant counter blocks
- Photography is clean and well-lit (not dark/moody)

---

## Section Composition (Home Page)

1. **Hero** — Story hook headline ("From India to Shepparton's Most-Trusted Workshop"), proof strip inline, CTA
2. **Transparent Workshop** — BESPOKE: split panel showing the waiting lounge → workshop visibility concept
3. **Signature Services** — 2 editorial blocks (Log Book Servicing, Roadworthy Certificates) — asymmetric, image + text
4. **Pull Quote** — Real review as large typography break
5. **Additional Services** — Compact numbered list, NOT cards with icons
6. **Smijo's Story** — Magazine-style profile teaser with press mention
7. **Reviews** — 2 real reviews displayed as editorial quotes
8. **CTA** — Call to action with phone, hours summary

---

## Bespoke Component: "The Transparent Workshop"

Smijo's workshop is visible from reception through glass. This is unique — most workshops hide the work. We create a visual section showing this transparency concept:
- Split panel: left shows clean waiting area (lounge, Wi-Fi, TV), right shows workshop view
- A glass-divider visual element connecting them
- Copy: "Watch your car being serviced from our customer lounge"
- This reinforces trust and differentiates from every other mechanic

---

## Bespoke CSS Effect: `.glass-divider`

A vertical frosted-glass stripe effect used as a section divider, referencing the glass wall between reception and workshop. Semi-transparent with backdrop blur.

---

## Image Strategy (Unsplash — CLEAN, BRIGHT, PROFESSIONAL)

1. **Hero:** Clean, well-lit auto workshop interior — `photo-1625047509248-ec889cbff17f`
2. **Workshop/Transparency:** Car on hoist in clean shop — `photo-1580273916550-e323be2ae537`
3. **Services (Log Book):** Mechanic with diagnostic tool — `photo-1507977831781-6e485625925b`
4. **Services (RWC):** Car being inspected — `photo-1581092160607-ee22621dd758`
5. **About/Story:** Community/small business feel — `photo-1517524008697-84bbe3c3fd98`
6. **CTA:** Professional workshop exterior — `photo-1619642751034-765dfdf7c58e`

---

## Pages (5)

1. **Home** (/) — story-first hero, transparent workshop, signature services, reviews, CTA
2. **Services** (/services) — 2 signature services (editorial), 10 additional (compact list)
3. **About Smijo** (/about) — India journey, press feature, VACC/VicRoads, family
4. **Roadworthy** (/roadworthy) — deep RWC page, process steps, VicRoads approved
5. **Contact** (/contact) — hours grid (incl Saturday!), phone, address, map link

---

## Service Display Strategy

**Signature (2):** Full-width editorial blocks with Unsplash image, detailed description, inline review. Asymmetric layout (image left/text right, then swap).

**Additional (10):** Simple numbered list with one-line descriptions. No icons, no cards, no boxes. Clean typography carries it.

**Proof signals:** Inline text near hero: "534 Google reviews · 4.9★ · VicRoads Approved · VACC Member"

---

## Validation Targets
- [ ] ≥5 Unsplash images in homepage
- [ ] Zero icon-in-colored-box patterns
- [ ] Zero animated counters
- [ ] All 5 pages render
- [ ] Phone number clickable
- [ ] Light palette (NOT dark)
- [ ] Space Grotesk + DM Sans fonts loaded
- [ ] Unique `.glass-divider` bespoke effect
