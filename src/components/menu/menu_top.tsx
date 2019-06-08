import * as React from 'react';
import {Link} from 'react-router-dom';

export class TopMenu extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return <nav className='app-top-menu'>
            <Link className='app-brand nav-link px-3' to='/'>Dew's Checklist</Link>
            <a className='nav-item nav-link' target={'_blank'} href={'https://github.com/BolZer/ts-dewcheck'}>
                <i className='fab fa-fw fa-github'/>
            </a>
        </nav>;
    }
}
