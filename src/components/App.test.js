import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';


    configure ({adapter: new Adapter ()});

    describe ('App-test', ()=> {
        it('App render without a problem', () => {
            const div = document.createElement('div');
            ReactDOM.render(<App/>, div);
            ReactDOM.unmountComponentAtNode(div);
            // to jets kasowanie diva
        });

        it('child components render', () => {
            const wrapper = shallow(<App/>);
            // console.log(wrapper.debug());
            expect(wrapper.find('Header').exists()).toBe(true);
            expect(wrapper.find('Order').exists()).toBe(true);
            expect(wrapper.find('Inventory').exists()).toBe(true);
            expect(wrapper.find('AdminPanel').exists()).toBe(true);
        })

        it('snapshot matches', () => {
            const wrapper = shallow(<App/>);
            // console.log(wrapper.debug());
            expect(wrapper).toMatchSnapshot();
        })

})

