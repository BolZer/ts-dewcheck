import * as $ from 'jquery';
import * as React from 'react';

export class List extends React.Component<{}, {}> {
    private listRef: HTMLElement;

    public render(): JSX.Element {
        return <div
            ref={(element: HTMLElement): HTMLElement => this.listRef = element}
            onClick={(): JQuery<Element> => $(this.listRef).find('.collapse').collapse('toggle')}
        >
            <button className='btn btn-primary' type='button'>
                Collapse
            </button>
            <div className='collapse' id='collapseExample'>
                <div className='card card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
                <div className='card card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
                <div className='card card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
                <div className='card card-body'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>
        </div>;
    }
}
