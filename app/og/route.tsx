import { ImageResponse } from 'next/og';

// Branded 1200×630 share image for any page: /og?title=...&eyebrow=...
// Used whenever a page has no share image of its own.

const clean = (v: string | null, max: number) => (v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

export function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = clean(searchParams.get('title'), 110) || 'Web, Mobile & AI Development';
    const eyebrow = clean(searchParams.get('eyebrow'), 40) || 'TheWebHero';
    const size = title.length > 70 ? 54 : title.length > 40 ? 64 : 76;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '64px 72px',
                    background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 55%, #3b0764 100%)',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div
                        style={{
                            width: 56,
                            height: 56,
                            borderRadius: 16,
                            background: 'linear-gradient(135deg, #db2777, #7c3aed, #2563eb)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 30,
                            fontWeight: 800,
                        }}
                    >
                        W
                    </div>
                    <div style={{ fontSize: 32, fontWeight: 700 }}>TheWebHero</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div
                        style={{
                            display: 'flex',
                            alignSelf: 'flex-start',
                            padding: '8px 20px',
                            borderRadius: 999,
                            background: 'rgba(255,255,255,0.12)',
                            border: '1px solid rgba(255,255,255,0.25)',
                            fontSize: 24,
                            color: '#e9d5ff',
                            textTransform: 'uppercase',
                            letterSpacing: 2,
                        }}
                    >
                        {eyebrow}
                    </div>
                    <div style={{ fontSize: size, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>{title}</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#cbd5e1' }}>
                    <div>Ideas. Solutions. Real Impact.</div>
                    <div>thewebhero.in</div>
                </div>
            </div>
        ),
        { width: 1200, height: 630, headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable' } },
    );
}
