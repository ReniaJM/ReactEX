import ReactDOM from "react-dom";
import React from "react";
import Order from "./Order.js";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';


configure ({adapter: new Adapter ()});

describe ('Order-test', ()=> {
    it('Order render without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Order/>, div);
        ReactDOM.unmountComponentAtNode(div);
        // to jets kasowanie diva
    });

    it('hello world renderee', () => {
        const wrapper = shallow(<Order/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('div').text('Zamówienie'))
    })
    it('snapshot matches', () => {
        const wrapper = shallow(<Order/>);
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })

})

