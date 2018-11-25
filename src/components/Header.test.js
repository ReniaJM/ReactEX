import ReactDOM from "react-dom";
import React from "react";
import Header from "./Header.js";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';


configure ({adapter: new Adapter ()});

describe ('Header-test', ()=> {
    it('Header render without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
        // to jets kasowanie diva
    });

    it('header changes text according to state', () => {
        const wrapper = shallow(<Header/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('h1').text('black books'))
        wrapper.setState({
            bookstoreName: 'white books',
        });
        expect(wrapper.find('h1').text('white books'))
            // wrapper to jest kopia komponentu
    })

    it('header changes after handleClick', () =>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.state().bookstoreName).toBe('black books')
        // dalej sparwdzamy cz poczatkowy stan to jest black books
        // wrapper to jets kompononent opakowany we wszystkie wlasciwosci jakie nam daje enzyme
        wrapper.find('.header').simulate('click');
        expect(wrapper.state().bookstoreName).toBe('white books')
    })

    it('snapshot matches', () => {
        const wrapper = shallow(<Header/>);
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })

})

