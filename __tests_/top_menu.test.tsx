import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as expect from 'expect';
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import {ReactTestRenderer} from 'react-test-renderer';
import {TopMenu} from '../src/components/menu/menu_top';

configure({adapter: new Adapter()});

describe('Top Menu of the Application', () => {

    const componentProvider: ReactTestRenderer = renderer.create(
        <BrowserRouter>
            <TopMenu/>
        </BrowserRouter>
    );

    const componentWrapper = shallow(<TopMenu/>);

    test('it matches the snapshot', () => {
        expect(componentProvider.toJSON()).toMatchSnapshot();
    });

    test('it has the correct title stated', () => {
        expect(componentWrapper.contains("Dew's Checklist")).toBe(true);
    });

    test('it contains the repo link as clickable link', () => {
        expect(componentWrapper.find('a')).toHaveLength(1);
        expect(componentWrapper.find('a').prop('href')).toEqual('https://github.com/BolZer/ts-dewcheck');
        expect(componentWrapper.find('a').contains(<i className='fab fa-fw fa-github'/>)).toBe(true)
    })
});
