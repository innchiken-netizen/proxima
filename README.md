# Proxima — French Formulation Science. African Understanding.

Official Phase 1 Master Build for **Proxima Skincare** (Lagos, Nigeria), designed with inspiration from modern high-end beauty platforms (**Ariva**, **Skin Cafe**, and **Lovable**), deployable directly to **Vercel** from a GitHub repository.

---

## 📸 Image Asset Mapping (`public/images/`)

All images from your folder have been renamed with **clean, semantic filenames**. When you have your final studio photography, simply replace the file with the same name:

### Product Photography:
| Filename | SKU | Product Name | Size | Retail Price |
| :--- | :--- | :--- | :--- | :--- |
| `product-shower-gel.jpg` | `PDL-GEL` | **Gel Douche Peau de Lune** (Shower Gel) | 1000ml | ₦8,167 |
| `product-body-lotion.jpg` | `PDL-LAIT` | **Lait Peau de Lune** (Body Lotion) | 550ml | ₦7,750 |
| `product-body-oil.jpg` | `PDL-HUILE` | **Huile Peau de Lune** (Vitamin B3 Body Oil) | 300ml | ₦6,500 |
| `product-face-cream.jpg` | `PDL-CREAM` | **Crème de Visage Peau de Lune** (Face Cream) | 50ml | ₦6,917 |
| `product-glow-oil.jpg` | `PDL-SNOWOIL` | **Huile Éclat Actifs Purs** (Arbutin + Niacinamide) | 150ml | ₦9,500 |

### Campaign & Lifestyle Photography:
| Filename | Placement in Design | Role |
| :--- | :--- | :--- |
| `hero-model.jpg` | **Hero Section** (Right banner) | Main editorial model portrait with frosted product card |
| `lifestyle-glow.jpg` | **Bento Row (Card 02) & Story Page** | Melanin skin glow & hydration close-up |
| `lifestyle-routine.jpg` | **Bento Row (Card 04)** | Daily application ritual & specialist guidance |
| `lifestyle-wellness.jpg` | **Why Choose Proxima Section** | Natural beauty model portrait & barrier protection |

---

## 🎨 Design System & Layout Innovations

Inspired by the provided references (**Ariva**, **Skin Cafe**, **Nurturing Body**, and **Lovable**):
1. **Centered Minimalist Luxury Header**:
   - Navigation links on left, Proxima Paris-Lagos monogram centered, language toggle (EN \| FR), wishlist, and bag on right.
2. **Asymmetric Editorial Hero**:
   - Left: Brand statement, credibility pill ("Trade Fair Complex Flagship, Lagos · Retail & Wholesale"), and quick CTAs.
   - Right: Hero model photography with an overlaid frosted glass product card + "SHOP NOW" pill button.
3. **4-Card Bento Grid Row**:
   - `01 · Personalized Skincare`: Routine Quiz quick-link with diagonal arrow ↗.
   - `02 · Holistic Wellness`: Model portrait linking to Our Story ↗.
   - `03 · Daily Rituals`: Warm gold accent card for heat & humidity skincare practices.
   - `04 · B2B Wholesale`: Direct link to carton pricing & WhatsApp distributor desk ↗.
4. **"Our Collection" Grid (Skin Cafe Style)**:
   - Category filter pills (`All`, `Body Care`, `Face Care`, `Best Sellers`).
   - Clean product cards with wishlist heart button, centered bottle photography, and a circular "VIEW ALL" interactive card.
5. **"Ingredients That Make a Difference" (Ariva Style)**:
   - Central hero bottle surrounded by radiating active ingredient cards (Niacinamide, Alpha Arbutin, Retinol, Vitamin C).
6. **Split Editorial Feature ("Why Choose Proxima")**:
   - Model applying skincare side-by-side with French formulation standards & African barrier realities.
7. **Interactive B2B Wholesale & Case Pricing Calculator**:
   - Real carton pricing, unit cost vs retail price, merchant gross profit calculations in ₦, and 1-tap WhatsApp wholesale application.
8. **Interactive FAQ Accordion**:
   - Clear answers on formulation for tropical climates, zero bleaching commitment, Lagos pickup, and wholesale ordering.
9. **Slide-Over Cart Drawer & WhatsApp Checkout**:
   - Calculates ₦ totals and generates a pre-filled WhatsApp order message to `+2349044943580`.

---

## 🚀 One-Click Deploy to Vercel via GitHub

1. Initialize git and commit the code:
   ```bash
   git init
   git add .
   git commit -m "feat: Proxima luxury e-commerce build"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. In [Vercel](https://vercel.com/), select **Add New Project** and import the repository.
3. Vercel automatically detects **Vite**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy! The included `vercel.json` ensures full client-side routing on all paths (`/`, `/shop`, `/routine`, `/story`, `/wholesale`, `/contact`).
