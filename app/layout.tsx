import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { metadataBase:new URL('https://trattoria-verde-kichijoji.sites.openai.com'), title:'Trattoria Verde｜吉祥寺のイタリア料理店', description:'旬の素材と手打ちパスタを楽しむ、吉祥寺の街のイタリア食堂。', openGraph:{title:'Trattoria Verde｜吉祥寺のイタリア料理店',description:'季節を味わう、街のイタリア食堂。',images:['/og.png'],locale:'ja_JP',type:'website'}, twitter:{card:'summary_large_image',title:'Trattoria Verde｜吉祥寺のイタリア料理店',description:'季節を味わう、街のイタリア食堂。',images:['/og.png']} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
