export const TAU=Math.PI*2;
export const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
export const saturate=v=>clamp(v,0,1);
export const lerp=(a,b,t)=>a+(b-a)*t;
export const damp=(a,b,lambda,dt)=>lerp(a,b,1-Math.exp(-lambda*dt));
export const wrap01=v=>((v%1)+1)%1;
export function shortestTrackDelta(from,to){let d=wrap01(to)-wrap01(from);if(d>.5)d-=1;if(d<-.5)d+=1;return d}
export function crossedProgress(previous,current,marker){const p=wrap01(previous),c=wrap01(current),m=wrap01(marker);return c>=p?m>p&&m<=c:m>p||m<=c}
export function formatTime(ms){const n=Math.max(0,Math.floor(ms)),m=Math.floor(n/60000),s=Math.floor(n%60000/1000),x=n%1000;return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(x).padStart(3,'0')}`}
export const ordinalPosition=(distance,rivals)=>1+rivals.reduce((n,x)=>n+(x>distance?1:0),0);
export function seededRandom(seed){let state=seed>>>0;return()=>{state=(state+0x6d2b79f5)>>>0;let t=state;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
