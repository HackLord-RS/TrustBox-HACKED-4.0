
export type UserRole = 'user' | 'admin';
export type AuthView = 'login' | 'signup' | 'landing' | 'action' | 'dashboard' | 'vault' | 'admin_dashboard' | 'public_certificate';

export interface User {
  email: string;
  isLoggedIn: boolean;
  role: UserRole;
}

export interface VerificationResult {
  status: 'IDLE' | 'PROCESSING' | 'MATCH' | 'MISMATCH';
  timestamp?: string;
  file1Name?: string;
  file2Name?: string;
  hash1?: string;
  hash2?: string;
}

export interface VerificationHistoryEntry {
  id: string;
  timestamp: string;
  referenceName: string;
  targetName: string;
  result: 'MATCH' | 'MISMATCH';
  hash1: string;
  hash2: string;
}

export interface FileData {
  file: File;
  hash: string | null;
}

export interface RegisteredFile {
  id: string;
  name: string;
  hash: string;
  timestamp: string;
  size: number;
}
