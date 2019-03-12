export interface State {
  readonly layout: Layout
  readonly editor: Editor
  readonly compiled: Compiled
  readonly options: Options
}

export interface Options {
  readonly logs: string[]
  readonly autoApply: boolean
  readonly selectedExplorer: ExplorerName
  readonly working: boolean
}
export type ExplorerName = 'editor' | 'elements' | 'jsAst' | 'implementations'

export interface Layout {
  readonly theme: Theme
}

export interface Editor {
  readonly code: string
  readonly version: number
}

export interface Theme {
  readonly name: string,
  readonly colors: {
    readonly bg: Color
    readonly fg: Color
    readonly brand: Color
  }
}

type Color = string

export interface Compiled {
  response?: CodeWorkerResponse
  request: CodeWorkerRequest
}

import { Classification } from '../codeWorker/extractCodeDecorations'
import { JsonImplOutputEl } from 'jsx-alone-core'

export interface CodeWorkerResponse {
  version: number
  jsxSyntaxHighLight: {
    classifications: Classification[];
  }
  evaluate: {
    result?: JsonImplOutputEl;
    error?: CodeWorkerError;
    evaluated: string;
  }
  jsxAst: CodeWorkerResponseJsxAst
  error?: CodeWorkerError;
  totalTime: number
}
export interface EvaluateTimes {
  eval?: number
  render?: number
}
export interface CodeWorkerResponseJsxAst {
  diagnostics: CodeWorkerResponseJsxAstDiagnostic[]
  ast: CodeWorkerResponseJsxAsNode
}
export interface CodeWorkerRequest {
  code: string
  title: string
  version: number
  jsxAst: CodeWorkerRequestJsxAst
}
export interface CodeWorkerRequestJsxAst {
  showDiagnostics?: boolean
  mode: 'forEachChild' | 'getChildren'
  nodeTextLength?: number
}
interface SelectableInMonaco {
  startColumn: number
  startLineNumber: number
  endColumn: number
  endLineNumber: number
}
export interface CodeWorkerResponseJsxAsNode extends SelectableInMonaco {
  type: string
  text: string
  kind: string
  start: number
  end: number
  children: CodeWorkerResponseJsxAsNode[]
}
export interface CodeWorkerResponseJsxAstDiagnostic extends SelectableInMonaco {
  message: string
  lineNumber: number | undefined
  start: number | undefined
  length: number | undefined
  // category: DiagnosticCategory;
  code: number
}
export interface CodeWorkerError {
  message: string
  stack?: string
  name: string
}
export type CodeWorkerListener = (e: {
  data: CodeWorkerResponse;
}) => void
