# 🧠 BrainAlgo Data Repository

> **Content Management System for BrainAlgo Corporate Website**

This repository contains all content data for the BrainAlgo corporate website. Edit these JSON files to update website content **without any code changes or rebuilds**.

## 📁 Repository Structure

```
brainalgo-data/
├── README.md              # This file
├── CONTRIBUTING.md        # How to contribute
├── data/
│   ├── team/
│   │   └── founders.json  # Team member information
│   ├── products/
│   │   └── products.json  # Product information
│   └── config/
│       └── site.json      # Site-wide configuration
└── schemas/
    ├── founder.schema.json    # Team member data structure
    └── product.schema.json    # Product data structure
```

## 🚀 Quick Start

### Adding a New Team Member
1. Edit `data/team/founders.json`
2. Add your team member following the schema in `schemas/founder.schema.json`
3. Commit changes → Website updates automatically!

### Adding a New Product
1. Edit `data/products/products.json`
2. Add your product following the schema in `schemas/product.schema.json`
3. Commit changes → Website updates automatically!

## 📊 Data Schemas

### Team Member Schema
```json
{
  "id": "unique-identifier",
  "name": "Full Name",
  "role": "Job Title",
  "company": "Company Name",
  "bio": "Brief description (max 200 chars)",
  "expertise": ["Skill1", "Skill2", "Skill3", "Skill4"],
  "avatar": "Initials (2-3 chars)",
  "quote": "Inspirational quote (max 150 chars)",
  "experience_years": 5,
  "location": "City, Country",
  "order": 1
}
```

### Product Schema
```json
{
  "id": "product-id",
  "name": "Product Name",
  "description": "Product description",
  "url": "https://product-url.com",
  "status": "active|coming-soon|beta",
  "features": ["Feature 1", "Feature 2"],
  "launch_date": "2024-01-01"
}
```

## 🔗 API Endpoints

The website automatically fetches data from:
- **Team:** `https://raw.githubusercontent.com/brainalgo/brainalgo-data/main/data/team/founders.json`
- **Products:** `https://raw.githubusercontent.com/brainalgo/brainalgo-data/main/data/products/products.json`

## ✅ Benefits

- 🚀 **Instant Updates** - Changes reflect in 5-10 minutes
- 🔄 **No Rebuilds** - Website doesn't need redeployment
- 👥 **Team Friendly** - Edit via GitHub web interface
- 📝 **Version Control** - All changes tracked
- 🆓 **Free** - No server costs

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

**Made with ❤️ by BrainAlgo Team**
