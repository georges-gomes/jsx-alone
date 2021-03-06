import { JSXAlone } from '..'
import { removeWhites } from 'jsx-alone-core'
import { ElementLikeImplRenderConfig, ElementLikeImplRenderConfigNoRoot } from '../types'

export function test({
  e,
  expected,
  label,
  asCodeEquals, asCodeNotContains,
  caseInsensitive
}: {
  e: JSX.Element
  expected: string
  label: string
  asCodeEquals?: boolean
  caseInsensitive?: boolean
  asCodeNotContains?: boolean
}) {
  it(label + ' without indent', () => {
    const output: HTMLElement = render(e)
    expected = caseInsensitive ? expected.toLowerCase() : expected
    const result = caseInsensitive ? output.outerHTML.toLowerCase() : output.outerHTML
    if (asCodeEquals) {
      expectTextEquals(result, expected)
    }
    else if (asCodeNotContains) {
      expectTextNotToContain(result, expected)
    }
    else {
      expect(result).toBe(expected)
    }
  })
}

export function render(e: JSX.Element, config?: ElementLikeImplRenderConfigNoRoot) {
  const parent = prepareRenderParent()
  return JSXAlone.render(e, { ...config, parent }) as HTMLElement
}

export function prepareRenderParent() {
  let parent = document.getElementById('test-root')
  if (parent) {
    parent.remove()
  }
  parent = document.createElement('div')
  parent.setAttribute('id', 'test-root')
  document.body.appendChild(parent)
  return parent
}

export function expectTextEquals(a?: string, b?: string, debug = false) {
  debug && console.log(a, b)
  if (!a || !b) return false
  expect(removeWhites(a)).toEqual(removeWhites(b))
}
export function expectTextToContain(a?: string, b?: string, debug = false) {
  debug && console.log(a, b)
  if (!a || !b) return false
  expect(removeWhites(a)).toContain(removeWhites(b))
}
export function expectTextNotToContain(a?: string, b?: string, debug = false) {
  debug && console.log(a, b)
  if (!a || !b) return false
  expect(removeWhites(a)).not.toContain(removeWhites(b))
}

export function window(): typeof window &any {
  return window
}
export function query<T extends HTMLElement= HTMLElement>(s: string): T {
  return document.querySelector<T>(s)!
}

export function dummy(a: number) {
  return a * 2
}

/**
 * Fire an event handler to the specified node. Event handlers can detect that the event was fired programatically
 * by testing for a 'synthetic=true' property on the event object
 * @param {HTMLNode} node The node to fire the event handler on.
 * @param {String} eventName The name of the event without the "on" (e.g., "focus")
 */
export function fireEvent(node: HTMLElement, eventName: 'mousedown' | 'mouseup' | 'click' | 'focus' | 'change' | 'blur' | 'select') {
  // Make sure we use the ownerDocument from the provided node to avoid cross-window problems
  let doc: any
  if (node.ownerDocument) {
    doc = node.ownerDocument
  } else if (node.nodeType == 9) {
    // the node may be the document itself, nodeType 9 = DOCUMENT_NODE
    doc = node
  } else {
    throw new Error('Invalid node passed to fireEvent: ' + node.id)
  }

  if (node.dispatchEvent) {
    // Gecko-style approach (now the standard) takes more work
    let eventClass = ''

    // Different events have different event classes.
    // If this switch statement can't map an eventName to an eventClass,
    // the event firing is going to fail.
    switch (eventName) {
      case 'click': // Dispatching of 'click' appears to not work correctly in Safari. Use 'mousedown' or 'mouseup' instead.
      case 'mousedown':
      case 'mouseup':
        eventClass = 'MouseEvents'
        break

      case 'focus':
      case 'change':
      case 'blur':
      case 'select':
        eventClass = 'HTMLEvents'
        break

      default:
        throw new Error('fireEvent: Couldn\'t find an event class for event \'' + eventName + '\'.')
        // break
    }
    const event = doc.createEvent(eventClass)
    event.initEvent(eventName, true, true) // All events created as bubbling and cancelable.

    event.synthetic = true // allow detection of synthetic events
    // The second parameter says go ahead with the default action
    // @ts-ignore
    node.dispatchEvent(event, true)
    // @ts-ignore
  } else if (node.fireEvent) {
    // IE-old school style, you can drop this if you don't need to support IE8 and lower
    const event = doc.createEventObject()
    event.synthetic = true // allow detection of synthetic events
    // @ts-ignore
    node.fireEvent('on' + eventName, event)
  }
}
