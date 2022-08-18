<template>
  <Menu :menuItems="MenuItems" class="layui-bg-grey"></Menu>
</template>
<script>
import { ref } from "vue";
import Menu from "./components/Menu.vue";

export default {
  components: {
    Menu,
  },
  setup() {
    const MenuItems = ref([
      {
        id: "menu1",
        text: "菜单1",
        component: "",
      },
      {
        id: "menu2",
        text: "菜单2",
        component: "",
        children: [
          {
            id: "menu2-1",
            text: "菜单2-1",
            component: "",
          },
        ],
      },
    ]);
    return {
      MenuItems,
    };
  },
  methods: {},
};
</script>
