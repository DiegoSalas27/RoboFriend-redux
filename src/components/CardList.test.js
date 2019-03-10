import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render Card Component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Joh Snow',
            username: 'johnjohn',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots ={mockRobots}/>)).toMatchSnapshot();
});
