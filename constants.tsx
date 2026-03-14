
import React from 'react';

export const TERMS_NOTICE = `TrustBox verifies document integrity using cryptographic hashing.
It does not verify legality, validity, authenticity, ownership, or intent.
A match indicates mathematical identity; a mismatch indicates modification.
TrustBox does not provide legal advice.
Uploaded files are processed only to generate cryptographic fingerprints.`;

export const Icons = {
  Logo: ({ className = "w-12 h-12" }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer Hexagon Circuit */}
        <path d="M50 5 L85 25 V65 L50 85 L15 65 V25 Z" fill="none" stroke="#1e293b" strokeWidth="1.5" />
        
        {/* Connection Lines and Nodes */}
        <line x1="50" y1="5" x2="50" y2="15" stroke="#475569" strokeWidth="1" />
        <line x1="85" y1="25" x2="75" y2="30" stroke="#475569" strokeWidth="1" />
        <line x1="85" y1="65" x2="75" y2="60" stroke="#475569" strokeWidth="1" />
        <line x1="15" y1="25" x2="25" y2="30" stroke="#475569" strokeWidth="1" />
        
        <circle cx="50" cy="5" r="2.5" fill="#475569" />
        <circle cx="85" cy="25" r="2.5" fill="#475569" />
        <circle cx="85" cy="65" r="2.5" fill="#475569" />
        <circle cx="50" cy="85" r="2.5" fill="#475569" />
        <circle cx="15" cy="65" r="2.5" fill="#475569" />
        <circle cx="15" cy="25" r="2.5" fill="#475569" />
        
        {/* Inner Blue Shield */}
        <path d="M50 20 C50 20 72 26 72 45 C72 68 50 78 50 78 C50 78 28 68 28 45 C28 26 50 20 50 20Z" fill="#1e3a8a" />
        <path d="M50 25 C50 25 66 30 66 45 C66 62 50 72 50 72 C50 72 34 62 34 45 C34 30 50 25 50 25Z" fill="#0f172a" />
        
        {/* White Lock */}
        <rect x="44" y="44" width="12" height="9" rx="1.5" fill="white" />
        <path d="M46 44 V41 C46 38.5 47.5 37 50 37 C52.5 37 54 38.5 54 41 V44" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="50" cy="48.5" r="1.5" fill="#0f172a" />

        {/* Green Checkmark */}
        <path d="M38 52 L48 62 L78 32" stroke="#4ade80" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" 
              style={{ filter: 'drop-shadow(0px 0px 4px rgba(74, 222, 128, 0.5))' }} />
      </svg>
    </div>
  ),
  Shield: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 5V11C4 16.2 7.4 21.1 12 22C16.6 21.1 20 16.2 20 11V5L12 2Z" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="2"/>
      <path d="M9 12L11 14L15 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  File: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Alert: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  ),
};
