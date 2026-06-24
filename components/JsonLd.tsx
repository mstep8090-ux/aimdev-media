import React from 'react';

interface JsonLdProps {
  schema: Record<string, any> | Record<string, any>[];
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://aimdevmedia.com/#organization',
    name: 'Aimdev Media',
    url: 'https://aimdevmedia.com',
    logo: 'https://aimdevmedia.com/logo.png',
    sameAs: [
      'https://instagram.com/aimdevmedia',
      'https://facebook.com/aimdevmedia'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@aimdevmedia.com',
      availableLanguage: ['English']
    }
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://aimdevmedia.com/#website',
    url: 'https://aimdevmedia.com',
    name: 'Aimdev Media',
    description: 'Aimdev Media is the premier church media agency specializing in professional sermon clipping, viral short-form video editing, and graphic design.',
    publisher: {
      '@id': 'https://aimdevmedia.com/#organization'
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `https://aimdevmedia.com${item.item}`
    }))
  };
}
