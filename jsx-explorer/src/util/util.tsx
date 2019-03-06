import { JSXAloneJsonImpl, JsonImplOutputEl } from 'jsx-alone-core'
import { compileTs } from './typescript';

export function evaluate(jsx: string) {
  const JSXAlone = JSXAloneJsonImpl // cannot put the name as named import because transpilation changes it
  const compiled = compileTs(jsx)
  let r: JsonImplOutputEl = null as any
  const s = `(${compiled})()`
  try {
    const jsxLike = eval(s)
    r = JSXAlone.render(jsxLike) as any
    removeCircles(r)
  } catch (e) {
    e.evaluated = s
    throw e
  }
  return r
}
function removeCircles(r: any): any {
  if (r) {
    delete r.parentElement;
    (r.children || []).forEach((c: any) => removeCircles(c))
  }
}

export function query<T extends HTMLElement= HTMLElement>(s: string): T {
  return document.querySelector<T>(s)!
}

export function escapeHtml(html:string){
  return html.replace(/\&/g, '&amp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;').trim()
}

export function width(){
  return document.body.clientWidth
}
export function isMobile() {
  return width()<768
}
export function isTablet() {
  return width()>=768 && width()<1023 
}
export function isDesktop() {
  return width()>=1023 
}
export function onDesktop(s:string){
  return `
@media (min-width: 1023px) {
  ${s.trim()}
}`.trim()
}
export function css(sel:string, s: string, ds?: string) {
  return `
${sel.trim()} {
  ${s.trim()}
}
${ds ? `
@media (min-width: 1023px) {
  ${sel.trim()} {
    ${ds.trim()}
  }
}`.trim() : ''} 
  `.trim()
}