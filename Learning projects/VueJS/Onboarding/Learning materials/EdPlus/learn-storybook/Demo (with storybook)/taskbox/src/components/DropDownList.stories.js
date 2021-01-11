import { action } from '@storybook/addon-actions';
import DropDownList from './DropDownList.vue';
import { addons } from '../../.storybook/main';

const padding_top = () => {
    return {
        template: '<div style="padding: 3rem;"><story/></div>'
    };
};

export default {
    title: 'DropDownList', 
    excludeStories: /.*Data$/,
    decorators: [padding_top],
};

export const actionsData = {
    selectItem: action('Item selected')
};

export const dropDownData = {
    Id: '1',
    Subject: 'default item'
};

export const dropDownSelectData = {
    id: '1',
    text: 'Subject',
    value: 'Subject',
};

export const defaultItemsData = [
    {Id: '1', Subject: 'EdPlus'},
    {Id: '2', Subject: 'WP Carey School of Business'},
    {Id: '3', Subject: 'Ira Fulton Schools of Engineering'},
];

const templateDefault = '<app-drop-down-list :listItemsData="items" @selectEvent="selectItem"></app-drop-down-list>'
const templateLoading = '<app-drop-down-list :listItemsData="items" loading="true"></app-drop-down-list>'
const departmentSelected = '<app-drop-down-list :listItemsData="items" selectedField="EdPlus" departmentSelected=true departmentText="EdPlus is a central enterprise unit for ASU focused on the design and scalable delivery of digital teaching and learning models to increase student success and reduce barriers to achievement in higher education. \n We advance the economic, social, cultural and overall health of the local, national and international communities served by ASU through:"></app-drop-down-list>'

export const Default =() => ({
    data() {
        return {

        }
    },
    components: {
        appDropDownList: DropDownList
    },
    template: templateDefault,
    props: {
        items: {
            default:() => defaultItemsData
        },
    },
    methods: actionsData
});

export const Loading =() => ({
    components: {
        appDropDownList: DropDownList
    },
    template: templateLoading,
    props: {
        items: {
            default:() => defaultItemsData
        },
    }
});

export const Selected =() => ({
    components: {
        appDropDownList: DropDownList
    },
    template: departmentSelected,
    props: {
        items: {
            default:() => defaultItemsData
        },
    }
});


