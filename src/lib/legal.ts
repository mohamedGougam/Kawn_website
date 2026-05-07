const BASE = "/legal";

export interface LegalDocument {
  key: string;
  title: string;
  description: string;
  effectiveDate: string;
  fileUrl: string;
  icon: string;
}

export const legalDocuments: LegalDocument[] = [
  {
    key: "privacy_policy",
    title: "Privacy Policy",
    description:
      "How Kawn collects, uses, and protects your personal data. Covers data storage, third-party sharing, user rights, and GDPR/CCPA compliance.",
    effectiveDate: "Apr 11, 2026",
    fileUrl: `${BASE}/KAWN-Privacy-Policy-v1.0-en.pdf`,
    icon: "🔒",
  },
  {
    key: "terms_of_service",
    title: "Terms of Service",
    description:
      "The binding agreement between you and Kawn governing your use of the platform, your responsibilities, and Kawn's rights.",
    effectiveDate: "Apr 11, 2026",
    fileUrl: `${BASE}/KAWN-Terms-of-Service-v1.0-en.pdf`,
    icon: "📋",
  },
  {
    key: "community_guidelines",
    title: "Community Guidelines",
    description:
      "The standards of behaviour expected across all Kawn communities — what is and isn't allowed to keep the platform safe and respectful.",
    effectiveDate: "Apr 11, 2026",
    fileUrl: `${BASE}/KAWN-Community-Guidelines-v1.0-en.pdf`,
    icon: "🤝",
  },
  {
    key: "content_moderation_reporting_policy",
    title: "Content Moderation & Reporting Policy",
    description:
      "How Kawn reviews, moderates, and acts on reported content and accounts, including appeal processes and enforcement actions.",
    effectiveDate: "Apr 11, 2026",
    fileUrl: `${BASE}/KAWN-Content-Moderation-and-Reporting-Policy-v1.0-en.pdf`,
    icon: "🛡️",
  },
  {
    key: "safety_abuse_policy",
    title: "Safety & Abuse Policy",
    description:
      "Kawn's zero-tolerance approach to harassment, abuse, hate speech, and dangerous content — and how violations are handled.",
    effectiveDate: "Apr 11, 2026",
    fileUrl: `${BASE}/KAWN-Safety-and-Abuse-Policy-v1.0-en.pdf`,
    icon: "⚠️",
  },
  {
    key: "account_data_deletion_policy",
    title: "Account & Data Deletion Policy",
    description:
      "Your rights to delete your Kawn account and all associated data, timelines for removal, and what data may be retained by law.",
    effectiveDate: "Apr 11, 2026",
    fileUrl: `${BASE}/KAWN-Account-and-Data-Deletion-Policy-v1.0-en.pdf`,
    icon: "🗑️",
  },
];
