import vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Login from '@/views/Login.vue';

const localVue = createLocalVue();
localVue.use(vuetify);

describe('Login.vue', () => {
  const wrapper = shallowMount(Login, {
    localVue,
  });

  it('Login is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('Login have h1', () => {
    const finded = wrapper.find('h1').text();
    expect(finded).toEqual('Login');
  });
});
