import * as React from 'react';

interface ProgressProps {
    className?: string;
    style?: object;
    active: number;
    count: number;
    height?: number;
}

export class Progress extends React.Component<ProgressProps, {}> {
    public render(): JSX.Element {
        return <div className={'progress ' + this.props.className } style={Object.assign({height: this.getHeight()}, this.props.style)} >
            <div className={this.getClass()}
                 role='progressbar'
                 style={Object.assign({width: this.getProgressAsPercentString()}, {height: this.getHeight()})}
            >
            </div>
        </div>;
    }

    private getHeight(): string {
        return (this.props.height ? this.props.height : 30) + 'px';
    }

    private getClass(): string {

        if (1 === (this.props.count / this.props.active)) {
            return 'progress-bar bg-success';
        }

        return 'progress-bar';
    }

    private getProgressAsPercentString(): string {
        if (this.props.active <= 0) {
            return '0%';
        }

        if (this.props.count <= 0) {
            return '0%';
        }

        return (this.props.active / this.props.count) * 100 + '%';
    }
}
