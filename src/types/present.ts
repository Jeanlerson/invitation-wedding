export interface PresentModalProps {
    id: string;
    name: string;
    image: string;
    selected: boolean;
    onSelect: (id: string) => void;
    unavailable: boolean;
}

export interface SelectPresentProps {
    onClose: () => void;
    onConfirm: (presentId: string) => void;
    presents: { id: string; name: string; image: string; available: boolean }[];
}