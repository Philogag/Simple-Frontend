import type { PropType } from "vue";

export interface MenuItem {
    id: string;
    text: string;
    component: string;
    children?: Array<MenuItem>[];
};

export const MenuProps = {
    menuItems: {
        type: [Array] as PropType<MenuItem[]>,
        default: () => [],
    }
}