import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://bescheibenagency.com.br"),
  title: {
    default: "Bescheiben Digital Agency | Sistemas de Crescimento B2B",
    template: "%s | Bescheiben Digital Agency",
  },
  description:
    "Construímos sistemas de crescimento previsível para empresas B2B de tecnologia. Estratégia digital orientada a dados, infraestrutura de marketing e geração de demanda qualificada.",
  keywords: [
    "marketing digital B2B",
    "agência marketing B2B",
    "sistemas de crescimento B2B",
    "geração de demanda B2B",
    "estratégia digital empresas tecnologia",
    "inbound marketing B2B",
    "RevOps",
  ],
  authors:  [{ name: "Bescheiben Digital Agency" }],
  creator:  "Bescheiben Digital Agency",
  openGraph: {
    type:        "website",
    locale:      "pt_BR",
    url:         "https://bescheibenagency.com.br",
    title:       "Bescheiben Digital Agency | Sistemas de Crescimento B2B",
    description: "Construímos sistemas de crescimento previsível para empresas B2B de tecnologia.",
    siteName:    "Bescheiben Digital Agency",
    images: [{
      url:    "/og-image.svg",
      width:  1200,
      height: 630,
      alt:    "Bescheiben Digital Agency — Signal Nexus",
    }],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Bescheiben Digital Agency",
    description: "Sistemas de crescimento previsível para empresas B2B.",
    images:      ["/og-image.svg"],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
  alternates: { canonical: "https://bescheibenagency.com.br" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type":    "Organization",
              name:        "Bescheiben Digital Agency",
              url:         "https://bescheibenagency.com.br",
              logo:        "https://bescheibenagency.com.br/logo.svg",
              description: "Construímos sistemas de crescimento previsível para empresas B2B de tecnologia.",
              address: {
                "@type":         "PostalAddress",
                addressCountry:  "BR",
                addressRegion:   "São Paulo",
              },
              contactPoint: {
                "@type":       "ContactPoint",
                contactType:   "customer service",
                email:         "contato@bescheibenagency.com.br",
              },
              sameAs: [
                "https://www.linkedin.com/company/bescheiben",
                "https://www.instagram.com/bescheiben",
              ],
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {children}
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "#100D2A",
              border:     "1px solid rgba(107,78,255,0.2)",
              color:      "#E2E8F0",
              fontFamily: "'Space Grotesk', sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
