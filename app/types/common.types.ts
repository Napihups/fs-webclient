export enum FormStatus {
  IDLE = "IDLE",
  SUBMITTING = "SUBMITTING",
  ONERROR = "ONERROR",
  ONSUCCESS = "ONSUCCESS",
}

/**
 * UserBasicMeta
 */

export type UserMeta = {
  name: string;
  sessionToken: string;
  avatarUrl: string;
  userRole: string;
};
