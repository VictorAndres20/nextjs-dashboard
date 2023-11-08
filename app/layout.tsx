import '@/app/ui/global.css';
import { lexendFont } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${lexendFont.className} antialiased` } >{children}</body>
    </html>
  );
}
