import * as $ from 'jquery';
import * as React from 'react';
import {NavLink} from 'react-router-dom';

export class BottomMenu extends React.Component<{}, {}> {

    private bottomMenuReference: HTMLElement;

    public componentDidMount(): void {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return;
        }

        $(this.bottomMenuReference).find('[data-toggle="popover"]').popover();
    }

    public render(): JSX.Element {
        return <nav className='app-bottom-menu' ref={(element: HTMLElement): HTMLElement => this.bottomMenuReference = element}>
            <NavLink exact={true} className='nav-item nav-link'
                  to={'/'}
                  data-toggle='popover'
                  data-trigger='hover'
                  data-placement='top'
                  data-content='Overview'
            >
                <i className='fas fa-fw fa-home'/>
            </NavLink>
            <NavLink className='nav-item nav-link'
                  to={'/pantry'}
                  data-toggle='popover'
                  data-trigger='hover'
                  data-placement='top'
                  data-content='Pantry Room'
            >
                <i className='fas fa-fw fa-apple-crate'/>
            </NavLink>
            <NavLink className='nav-item nav-link'
                  to={'/vault'}
                  data-toggle='popover'
                  data-trigger='hover'
                  data-placement='top'
                  data-content='Vault'
            >
                <i className='fas fa-fw fa-sack-dollar'/>
            </NavLink>
            <NavLink className='nav-item nav-link'
                  to={'/craft'}
                  data-toggle='popover'
                  data-trigger='hover'
                  data-placement='top'
                  data-content='Crafts Room'
            >
                <i className='fas fa-fw fa-pencil-ruler'/>
            </NavLink>
            <NavLink className='nav-item nav-link'
                  to={'/boiler'}
                  data-toggle='popover'
                  data-trigger='hover'
                  data-placement='top'
                  data-content='Boiler Room'
            >
                <i className='fas fa-fw fa-temperature-hot'/>
            </NavLink>
            <NavLink className='nav-item nav-link'
                  to={'/fishtank'}
                  data-toggle='popover'
                  data-trigger='hover'
                  data-placement='top'
                  data-content='Fish Tank'
            >
                <i className='fas fa-fw fa-fish'/>
            </NavLink>
            <NavLink className='nav-item nav-link'
                  to={'/bulletin'}
                  data-toggle='popover'
                  data-trigger='hover'
                  data-placement='top'
                  data-content='Bulletin Board'
            >
                <i className='fas fa-fw fa-chalkboard'/>
            </NavLink>
        </nav>;
    }
}
