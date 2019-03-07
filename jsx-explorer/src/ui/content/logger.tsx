import { JSXAlone } from 'jsx-alone-dom'
import { Status } from '../../store/types'
import { Component } from '../util/component'

export class Logger extends Component<{status: Status}> {
  render() {
    return <div>
      <h3>Logs</h3>
      <ul>{this.props.status.logs.map(l => <li>{l}</li>)}</ul>
    </div>
  }
}
