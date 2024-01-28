export interface IButton { 
    title: string;
    onClick?: () => void;
    variant?: string;
    colorScheme?: string;
    _hover?: React.CSSProperties | any;
    color?: string;
    width?: string;
}