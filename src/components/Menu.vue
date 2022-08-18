<template>
  <ul class="layui-menu main-menu">
    <template v-for="item in menuItems" :key="item.id">
      <template v-if="item.children">
        <li class="layui-menu-item-group layui-menu-item-down">
          <div class="layui-menu-body-title">
            {{item.text}}
            <i class="layui-icon layui-icon-up"></i>
          </div>
          <ul>
            <template v-for="subitem in item.children" :key="subitem.id">
              <li>{{subitem.text}}</li>
            </template>
          </ul>
        </li>
      </template>
      <template v-else>
        <li>{{item.text}}</li>
      </template>
    </template>
  </ul>
</template>

<script>
import { MenuProps } from "./Menu.ts";

export default {
  name: "Menu",
  model: {

  },
  props: MenuProps,
  emits: ["change-selected"],
  setup(props) {
    console.log(props.menuItems);
  },
}
</script>
<style scoped>
ul {
  color: white;
}
.main-menu {
  position: absolute;
  margin: 0;
  width: 22vw;
  min-width: 200px;
  max-width: 400px;
  height: 100%;
}
</style>