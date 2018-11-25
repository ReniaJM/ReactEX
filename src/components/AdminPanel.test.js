import ReactDOM from "react-dom";
import React from "react";
import AdminPanel from "./AdminPanel.js";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';


configure ({adapter: new Adapter ()});

describe ('AdminPanel-test', ()=> {
    it('AdminPanel render without a problem', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel/>, div);
        ReactDOM.unmountComponentAtNode(div);
        // to jets kasowanie diva
    });

    it('snapshot matches', () => {
        const wrapper = shallow(<AdminPanel/>);
        // console.log(wrapper.debug());
        expect(wrapper).toMatchSnapshot();
    })

})

