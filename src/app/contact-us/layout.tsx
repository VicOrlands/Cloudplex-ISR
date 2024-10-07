import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProviderProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Contact CloudPlexo - Reach Out to Our Cloud Experts",
    description: "Have questions or need assistance with cloud solutions? Contact CloudPlexo's experts for support and guidance.",
    keywords: ["Cloud experts", "Cloud experts in Africa", "cloud experts in Lagos", "cloud experts in London"],
    alternates: {
        canonical: "https://www.cloudplexo.com/contact-us"
    }
};

export default function ToastProvider({ children }: ToastProviderProps) {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}