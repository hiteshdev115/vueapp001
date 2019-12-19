//import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Component from '@/components/login.vue'

describe('login.vue', () => {
    test('login is vue instance', () => {
        const wrapper = shallowMount(Component);  

        wrapper.find("#email").setValue("hk.121988@gmail.com");
        wrapper.find("#password").setValue("123456");
        wrapper.find("button").trigger("click");
        //wrapper.vm.$nextTick();
        expect(wrapper.find(".message").text()).toBe("Login Successfully!");
    })
})
