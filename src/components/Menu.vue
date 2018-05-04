<template>
    <Menu mode="horizontal" :theme="dark" active-name="1">
      <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                       
                    </div>
    </Menu>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
