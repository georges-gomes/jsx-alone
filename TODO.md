# TODO

 * ISSUE - <If> in dom impl : props.children is array
 * ISSUE string indentation no new lines
 * issue: currently simple example  is combining test utilities so bundle size is big 16 kb and should be no more than 5 kb!
 * performance comparison against other template implementations like js string, handlebars, react, inferno (those that support isomorphic)
 * run dom sample project in jsdom for automatic report
 * React.Fragment
 * createElement is in core and is not extensible. Let implementations hook in attributes, children and text rendering
 * rename ElementLikeImplRenderConfig to ImplRenderConfig
 * remove react non standard attributes from typings or support them
 * we are escaping attribute values in string impl only for function type - should we do it also for the rest ?
# ideas

 * performance: for text we use document.createTextNode(this.content) - maybe is faster to use insertAdjacentText ? 
 * DOM - support for function attributes - don't render as attributes instead use el.addEventListener and bind to function/variable/class element scope somehow.