export const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://morningtide.com.au/#organization",
    "name": "Morningtide Consulting Pty Ltd",
    "alternateName": "Morningtide Consulting",
    "legalName": "Morningtide Consulting Pty Ltd",
    "url": "https://morningtide.com.au",
    "logo": {
        "@type": "ImageObject",
        "url": "https://morningtide.com.au/images/logo/colour.png",
        "width": "250",
        "height": "100"
    },
    "image": "https://morningtide.com.au/images/logo/colour.png",
    "description": "Morningtide Consulting provides expert school strategy planning and leadership development services for Australian independent schools. We help education leaders craft compelling strategic plans and implement them successfully.",
    "foundingDate": "2020",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-403-987-946",
        "contactType": "Customer Service",
        "email": "info@morningtide.com.au",
        "areaServed": "AU",
        "availableLanguage": ["English"],
        "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
        }
    },
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Victoria",
        "addressRegion": "VIC",
        "addressCountry": "AU"
    },
    "areaServed": [
        {
            "@type": "City",
            "name": "Melbourne"
        },
        {
            "@type": "City",
            "name": "Sydney"
        },
        {
            "@type": "City",
            "name": "Brisbane"
        },
        {
            "@type": "City",
            "name": "Adelaide"
        },
        {
            "@type": "City",
            "name": "Perth"
        }
    ],
    "serviceType": [
        "School Strategy Consulting",
        "Education Strategy Planning",
        "Leadership Development",
        "Strategic Planning for Schools",
        "Change Management Consulting",
        "Organizational Culture Development"
    ],
    "knowsAbout": [
        "School Strategy",
        "Strategic Planning",
        "Leadership Development",
        "Change Management",
        "Organizational Culture",
        "Education Consulting",
        "High-Performing Teams",
        "Innovation in Education"
    ],
    "sameAs": [
        "https://www.linkedin.com/company/morningtide-consulting"
    ],
    "slogan": "Strategy Planning for Independent Schools"
};

export const schemaWeb = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://morningtide.com.au/#website",
    "url": "https://morningtide.com.au",
    "name": "Morningtide Consulting",
    "description": "School strategy consulting and leadership development for Australian independent schools",
    "publisher": {
        "@id": "https://morningtide.com.au/#organization"
    },
    "inLanguage": "en-AU"
};

export const schemaCrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://morningtide.com.au/"
      }
    ]
};

export const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "School Strategy Consulting",
    "provider": {
      "@id": "https://morningtide.com.au/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Strategy Consulting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Teams Workshop",
            "description": "Collaborative workshop to align leadership teams around strategic priorities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Health Check",
            "description": "Assessment of current strategic planning effectiveness"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "After-Action Reviews Workshop",
            "description": "Structured review process to learn from strategic initiatives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vision & Values Refresh",
            "description": "Facilitated process to renew organizational vision and values"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Goal Alignment Audit",
            "description": "Analysis of strategic goal alignment across the organization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "R.I.D.G.E Strategic Process",
            "description": "Comprehensive strategic planning framework for schools"
          }
        }
      ]
    }
  };

  
