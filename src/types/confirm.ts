// /src/types/confirm.ts
export interface ConfirmProps {
  name: string;
  companions: string;
  setName: (v: string) => void;
  setCompanions: (v: string) => void;
  onConfirm: () => Promise<void> | void;
}
