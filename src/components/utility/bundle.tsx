import * as $ from 'jquery';
import * as React from 'react';
import {BundleModel, ResourceModel, StoreActionTypes} from '../../store/types';

interface BundleProps {
    bundle: BundleModel;
    checkAction: (payload: BundleModel) => StoreActionTypes;
}

export class Bundle extends React.Component<BundleProps, {}> {
    private listRef: HTMLElement;

    public render(): JSX.Element {
        return <div className='col-sm-12 mt-4'>
            <div className='row'>
                <div className='col-9'>
                    <label className='app-checkbox-container'>
                        <img alt={'bundle icon'} src={this.props.bundle.icon_url} className='d-none d-sm-inline-block img-fluid mr-2'/>
                        {this.props.bundle.description}
                        <input type='checkbox' checked={this.props.bundle.checked} onChange={(): StoreActionTypes => this.props.checkAction(this.props.bundle)}/>
                        <span className='app-checkmark'/>
                    </label>
                </div>
                <div className='col-3 text-right'>
                    <button className='btn btn-sm btn-primary' onClick={(): void => this.handleListCollapse()}>
                        <i className='far fa-plus fa-fw'/>
                    </button>
                </div>
                <div className='col-12'>
                    <div className={'collapse'} ref={(element: HTMLElement): HTMLElement => this.listRef = element}>
                        <ul className='list-group'>
                            {this.props.bundle.resources.map((resource: ResourceModel, index: number) => {

                                let wikiIconLink: JSX.Element = null;

                                if ('' !== resource.wiki_url) {
                                    wikiIconLink = <a href={resource.wiki_url} target='_blank'>
                                        <i className='fas fa-book fa-fw'/>
                                    </a>;
                                }

                                return <li key={index} className='app-list-group-item'>
                                    <div className='row'>
                                        <div className='col-10 px-0'>
                                            <img width={24}
                                                 className='img-fluid mr-2'
                                                 src={resource.icon_url}
                                                 alt={''}
                                            />
                                            <span>{resource.description}</span>
                                        </div>
                                        <div className='col-2 text-right pr-0'>
                                            {wikiIconLink}
                                        </div>
                                    </div>
                                </li>;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>;
    }

    private handleListCollapse(): void {
        $(this.listRef).collapse('toggle');
    }
}
