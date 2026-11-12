const base = {
  fill: 'none', stroke: 'currentColor', strokeWidth: 2,
  strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24', 'aria-hidden': true,
}
const solid = { fill: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': true }

export const Arrow = (p) => <svg {...base} strokeWidth={2.5} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
export const Check = (p) => <svg {...base} strokeWidth={2.5} {...p}><path d="M5 13l4 4L19 7" /></svg>
export const Star = (p) => <svg {...solid} {...p}><path d="M12 2l2.9 6.9L22 9.3l-5.5 4.8L18.2 21 12 17.3 5.8 21l1.7-6.9L2 9.3l7.1-.4L12 2z" /></svg>
export const Sparkle = (p) => <svg {...solid} {...p}><path d="M12 2c.6 4.6 2.4 6.9 7 7.5v1c-4.6.6-6.4 2.9-7 7.5h-1c-.6-4.6-2.4-6.9-7-7.5v-1c4.6-.6 6.4-2.9 7-7.5h1z" /></svg>
export const Heart = (p) => <svg {...solid} {...p}><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.8 4.5c2.1 0 3.6 1.1 4.6 2.7h1.2c1-1.6 2.5-2.7 4.6-2.7 3.8 0 5.9 3.9 4.4 7.3C19.5 16.4 12 21 12 21z" /></svg>
export const Bolt = (p) => <svg {...base} {...p}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
export const Lock = (p) => <svg {...base} {...p}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></svg>
export const Shield = (p) => <svg {...base} {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
export const Menu = (p) => <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
export const Close = (p) => <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
export const Plus = (p) => <svg {...base} strokeWidth={2.5} {...p}><path d="M12 5v14M5 12h14" /></svg>
export const Sheet = (p) => <svg {...base} strokeWidth={1.8} {...p}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
export const Box = (p) => <svg {...base} strokeWidth={1.8} {...p}><path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>
export const Instagram = (p) => <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
export const Cake = (p) => <svg {...base} {...p}><path d="M4 20h16M6 20v-7h12v7M8 13V9h8v4M12 9V6" /></svg>
export const Drop = (p) => <svg {...base} {...p}><path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" /></svg>
export const Coin = (p) => <svg {...base} {...p}><path d="M12 3v18M16.5 7.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3S9.5 10.5 12 11s4.5 1.3 4.5 3.5-2 3.5-4.5 3.5-4.5-1.3-4.5-3" /></svg>
export const Clock = (p) => <svg {...base} {...p}><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2M10 2h4" /></svg>
export const Rings = (p) => <svg {...base} {...p}><circle cx="9" cy="14" r="5" /><circle cx="15" cy="14" r="5" /><path d="M10 5l2-2 2 2-2 2z" /></svg>
export const Chat = (p) => <svg {...base} {...p}><path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" /></svg>
export const Cap = (p) => <svg {...base} strokeWidth={1.6} {...p}><path d="M2 9l10-5 10 5-10 5L2 9z" /><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6" /></svg>
export const Family = (p) => <svg {...base} strokeWidth={1.6} {...p}><path d="M3 11l9-7 9 7v9H3z" /><circle cx="9" cy="13" r="1.6" /><circle cx="15" cy="13" r="1.6" /><path d="M6.5 19c0-1.8 1.1-3 2.5-3s2.5 1.2 2.5 3M12.5 19c0-1.8 1.1-3 2.5-3s2.5 1.2 2.5 3" /></svg>
export const Feedback = (p) => <svg {...base} strokeWidth={1.6} {...p}><circle cx="12" cy="12" r="3" /><path d="M6.5 21c0-3 2.5-5 5.5-5s5.5 2 5.5 5M5 6l.7 1.4 1.5.2-1.1 1 .3 1.5L5 9.4l-1.4.7.3-1.5-1.1-1 1.5-.2zM19 6l.7 1.4 1.5.2-1.1 1 .3 1.5-1.4-.7-1.4.7.3-1.5-1.1-1 1.5-.2zM12 2l.7 1.4 1.5.2-1.1 1 .3 1.5L12 5.4l-1.4.7.3-1.5-1.1-1 1.5-.2z" /></svg>
export const CakeTiers = (p) => <svg {...base} strokeWidth={1.6} {...p}><path d="M4 21h16M5 21v-6h14v6M7 15v-4h10v4M12 11V8M12 8c-1 0-1.5-1-1-2l1-2 1 2c.5 1 0 2-1 2z" /></svg>
export const Card = (p) => <svg {...base} strokeWidth={1.8} {...p}><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M2.5 10h19M6 15h4" /></svg>
export const Pix = (p) => <svg {...solid} {...p}><path d="M12 2.5l3.6 3.6-2.2 2.2a2 2 0 01-2.8 0L8.4 6.1 12 2.5zm-6.5 6.5l2.3-2.3 3 3a2 2 0 002.8 0l3-3 2.3 2.3-3 3 3 3-2.3 2.3-3-3a2 2 0 00-2.8 0l-3 3L5.5 15l3-3-3-3zM12 21.5l-3.6-3.6 2.2-2.2a2 2 0 012.8 0l2.2 2.2L12 21.5zM2.5 12l2-2 2 2-2 2-2-2zm15 0l2-2 2 2-2 2-2-2z" /></svg>
export const WhatsApp = (p) => <svg {...solid} {...p}><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1112 21.8zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0024 12C24 5.4 18.6 0 12 0z" /></svg>
