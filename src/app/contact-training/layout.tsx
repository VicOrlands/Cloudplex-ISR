import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProviderProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Training - CloudPlexo",
    description: "Complete the CloudPlexo Training Contact Form to inquire about our courses. Choose your course funding source, select the training course type, and provide your details",
    keywords: ['Course inquiry form', 'Training course enrollment', 'Contact us for courses'],
    alternates: {
        canonical: "https://cloudplexo.com/contact-training"
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