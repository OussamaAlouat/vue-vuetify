import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  const wrapper = shallowMount(Home, {});

  it('renders home view', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
