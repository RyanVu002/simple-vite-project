<script setup lang="ts">
import { ref } from 'vue'
import customers from '../customers.json'
import { employee, positions, states } from '../person.ts'
import themes from "devextreme/ui/themes"

defineProps<{ msg: string }>()
const count = ref(0)

const columns = ref(['CompanyName', 'City', 'State', 'Phone', 'Fax'])

const formData = ref(employee)
const birthDateOptions = { width: '100%' }
const positionOptions = { items: positions, value: '' }
const stateOptions = { items: states }
const phoneOptions = { mask: '+1 (000) 000-0000' }
const notesOptions = { height: 140 }

const lightTheme = "dx.generic.general-light-blue-scheme"
const darkTheme = "dx.generic.general-dark-blue-scheme"
const isDarkTheme = ref(false)
const changeTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  themes.current(isDarkTheme.value ? darkTheme : lightTheme)
}
</script>

<template>
  <div class="container" :class="isDarkTheme ? 'bg-dark' : 'bg-light'">
    <h1 :class="isDarkTheme ? 'text-light' : 'text-dark'">{{ msg }}</h1>

    <div>
      <dx-button type="success" @click="count++">count is {{ count }}</dx-button>
      <dx-button type="success" @click="changeTheme">Change theme</dx-button>
    </div>

    <dx-data-grid
      :columns="columns"
      :show-borders="true"
      :data-source="customers"
    />

    <dx-form :form-data="formData">
      <template #avatar-template="{}">
        <div class="form-avatar"/>
      </template>
      <dx-group-item
        :col-count="4"
        css-class="first-group"
      >
        <dx-simple-item template="avatar-template"/>
        <dx-group-item :col-span="3">
          <dx-simple-item data-field="FirstName"/>
          <dx-simple-item data-field="LastName"/>
          <dx-simple-item
            :editor-options="birthDateOptions"
            data-field="BirthDate"
            editor-type="dxDateBox"
          />
        </dx-group-item>
      </dx-group-item>
      <dx-group-item
        :col-count="2"
        css-class="second-group"
      >
        <dx-group-item>
          <dx-simple-item data-field="Address"/>
          <dx-simple-item data-field="City"/>
          <dx-simple-item
            :editor-options="positionOptions"
            data-field="Position"
            editor-type="dxSelectBox"
          />
        </dx-group-item>
        <dx-group-item>
          <dx-simple-item
            :editor-options="stateOptions"
            data-field="State"
            editor-type="dxSelectBox"
          />
          <dx-simple-item data-field="ZipCode"/>
          <dx-simple-item
            :editor-options="phoneOptions"
            data-field="Mobile"
          >
            <dx-lable text="Phone"/>
          </dx-simple-item>
        </dx-group-item>
        <dx-simple-item
          :col-span="2"
          :editor-options="notesOptions"
          data-field="Notes"
          editor-type="dxTextArea"
        />
      </dx-group-item>
    </dx-form>
  </div>
</template>

<style scoped>
</style>
