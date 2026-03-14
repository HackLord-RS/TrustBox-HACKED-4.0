<h1 align="center">TrustBox: Document Integrity Platform</h1>

<p align="center">
  <strong>Verify what hasn't changed with cryptographic certainty.</strong><br></br><strong>Deployed Link : trustbox.netlify.app</strong>
</p>

## Overview

TrustBox is a secure, browser-based Document Integrity Audit System. Rather than relying on trust, TrustBox utilizes cryptographic hashing (SHA-256) to mathematically prove that a target document is perfectly identical to its original reference document.

Whether you're dealing with legal contracts, financial records, or compliance documents, TrustBox allows you to establish an immutable audit trail of document versions and integrity checks—all executed locally in the browser.

## Key Features

- **🔒 Cryptographic Verification:** Instant, mathematically sound verification using SHA-256. Determines if two documents are a "Match" or an "Integrity Compromise (Mismatch)" down to the byte level.
- **📄 Verification Certificates (PDF):** Download professional PDF certificates for every verification, containing the unique Verification ID, timestamps, target hashes, and the results.
- **📊 Document Integrity Timeline:** View a chronological version history of verifications grouped by the reference document. Easily track when the document was verified successfully and when a mismatch occurred.
- **🔗 Public Verification Links:** Generate shareable public links (e.g., `/TBX-20260314-ABCD`) that allow third parties to independently view and download the Verification Certificate without requiring an account.
- **🛡️ Private Vault:** Securely store and manage pre-verified baseline documents to compare future target files against effortlessly.
- **📈 Comprehensive Dashboard:** Export your entire verification history as a styled PDF report for auditing and compliance tracking.

## Technology Stack

- **Frontend Framework:** React 19 / TypeScript / Vite
- **Styling:** Tailwind CSS
- **Local Persistence & Mock Backend:** Client-side LocalStorage
- **PDF Generation:** `jspdf` & `jspdf-autotable`
- **Cryptography:** Native Web Crypto API (`SubtleCrypto` for SHA-256)

## Getting Started

Because TrustBox is designed to run entirely client-side without a required database dependency, getting started is extremely fast.

### Prerequisites
- Node.js (v18+)

### Installation & Running

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Usage Workflow

1. **Sign Up/Login:** Create a local mock account to start logging history.
2. **Verify:** Navigate to `Verification`. Upload an "Original Reference" document and a "Target Document".
3. **Analyze:** Click `Verify Integrity` to compute the hashes. 
4. **Audit:** 
   - Download the PDF Certificate.
   - Toggle the **Document Integrity Timeline** to view chronological version tracking.
   - Share the Verification ID URL (e.g., `http://localhost:3000/TBX-XXXXXX-XXXX`) with external reviewers.
5. **Dashboard:** Review all historical verifications and generate a full PDF Audit Report.

## Privacy & Security Note

All hashing occurs **locally** in the browser utilizing standard Web Crypto APIs. Documents are **never uploaded** to an external server during verification, ensuring absolute privacy for sensitive data.

---
*Created by TrustBox*
