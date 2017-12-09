import {Component} from 'react';
const human = require('human-time');

export type Props = {
  time: number;
  period?: number;
};

export type State = {
  formattedTime: string;
};

export default class HumanTime extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = this.getStateFromProps(props);
  }

  private _timer: any;

  private getStateFromProps(props: Props) {
    return {
      formattedTime: human(new Date(props.time))
        .replace(/minute/, 'min')
        .replace(/^.*second.*$/, 'now'),
    };
  }

  public componentDidMount() {
    this._timer = setInterval(
      () => this.setState(this.getStateFromProps(this.props)),
      this.props.period || 30e3,
    );
  }

  public componentWillUnmount() {
    clearInterval(this._timer);
  }

  public render() {
    return this.state.formattedTime as any;
  }
}

