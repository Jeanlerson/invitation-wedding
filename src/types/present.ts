export interface Present {
    id: string;
    name: string;
    image: string;
    available: boolean;
}

export interface PresentProps {
    onSelectPresent: (present: Present) => void;
}