import { createApp } from 'vue'
import './style.css'

/* import bootstrap 5 */
import "bootstrap/scss/bootstrap.scss"
import "bootstrap-icons/font/bootstrap-icons.css"

import {
    DxButton
} from 'devextreme-vue'

import {
    DxDataGrid,
    DxColumn,
    DxGrouping,
    DxGroupPanel,
    DxPager,
    DxPaging,
    DxSearchPanel,
} from 'devextreme-vue/data-grid'

import {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxLabel,
} from 'devextreme-vue/form'

import { DxTextArea } from 'devextreme-vue/text-area'

import App from './App.vue'

const app = createApp(App)

app.component('dx-button', DxButton)

app.component('dx-data-grid', DxDataGrid)
app.component('dx-column', DxColumn)
app.component('dx-grouping', DxGrouping)
app.component('dx-group-panel', DxGroupPanel)
app.component('dx-pager', DxPager)
app.component('dx-paging', DxPaging)
app.component('dx-search-panel', DxSearchPanel)

app.component('dx-form', DxForm)
app.component('dx-simple-item', DxSimpleItem)
app.component('dx-group-item', DxGroupItem)
app.component('dx-label', DxLabel)

app.component('dx-text-area', DxTextArea)

app.mount('#app')
