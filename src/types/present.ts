export interface PresentModalProps {
    id: string;
    name: string;
    image: string;
    selected: boolean;
    onSelect: (id: string) => void;
    unavailable: boolean;
}

export interface Present {
    id: string;
    name: string;
    image: string;
    available: boolean;
}

export interface SelectPresentProps {
    onSelect: (present: Present) => void;
    selectedPresent: Present | null;
    isOpen: boolean;
    onClose: () => void;
}