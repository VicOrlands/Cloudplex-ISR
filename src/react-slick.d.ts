declare module 'react-slick' {
    import { Component, CSSProperties, ReactNode } from 'react';

    interface Settings {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        autoplay?: boolean;
        autoplaySpeed?: number;
        cssEase?: string;
        arrows?: boolean;
        pauseOnHover?: boolean;
        nextArrow?: ReactNode;
        prevArrow?: ReactNode;
        [key: string]: any;
    }

    class Slider extends Component<Settings> {
        slickNext: () => void;
        slickPrev: () => void;
    }
    export default Slider;
}
