import ReactDOM from "react-dom";
import React from "react";
import Inventory from "./Inventory.js";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';


configure ({adapter: new Adapter ()});

describe ('Inventory-test', ()=> {
    it('Inventory render without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Inventory/>, div);
        ReactDOM.unmountComponentAtNode(div);
        // to jets kasowanie diva
    });

    it('hello world renderee', () => {
        const wrapper = shallow(<Inventory/>);
        // console.log(wrapper.debug());
        expect(wrapper.find('div').text('Książki'))
    })

    it('snapshot matches', () => {
        const wrapper = shallow(<Inventory/>);
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })

})

