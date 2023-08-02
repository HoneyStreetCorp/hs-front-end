import './globals.css';
import Providers from '@/utils/provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="font-KBIZ">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
