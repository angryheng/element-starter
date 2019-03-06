<template>
<div id="app">
    <img src="./assets/logo.png">
    <div>
        <el-button type="danger" @click="show = !show">Click Me</el-button>
        <el-button type="info" @click="show2 = !show2">Click Me</el-button>
        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="el-zoom-in-top">
                <div v-show="show" class="transition-box">.el-fade-in-linear</div>
            </transition>
            <transition name="el-fade-in">
                <div v-show="show" class="transition-box">.el-fade-in</div>
            </transition>
            <el-collapse-transition>
                <div v-show="show2">
                    <div class="transition-box">el-collapse-transition</div>
                </div>
            </el-collapse-transition>
        </div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="6">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
    <div style="margin-top: 20px;">
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside>Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
            <el-footer>Footer</el-footer>
        </el-container>
        <i class="el-icon-edit"></i>
        <i class="el-icon-arrow-down"></i>
    </div>
    <div class="mt20">
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">按钮</el-button>
            <el-button type="info">按钮</el-button>
            <el-button type="danger">按钮</el-button>
            <el-button type="warning">按钮</el-button>
            <el-button type="success">按钮</el-button>
        </el-row>
        <el-row>
            <el-button plain="true">朴素按钮</el-button>
            <el-button plain="true" type="primary">按钮</el-button>
            <el-button plain="true" type="info">按钮</el-button>
            <el-button plain="true" type="danger">按钮</el-button>
            <el-button plain="true" type="warning">按钮</el-button>
            <el-button plain="true" type="success">按钮</el-button>
        </el-row>
        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button round type="primary">按钮</el-button>
            <el-button round type="info">按钮</el-button>
            <el-button round type="danger">按钮</el-button>
            <el-button round type="warning">按钮</el-button>
            <el-button round type="success" disabled="true">按钮</el-button>
        </el-row>
        <el-row>
            <el-button icon="el-icon-edit" circle type="primary"></el-button>
        </el-row>
        <el-row>
            <el-button type="text">按钮</el-button>
            <el-button type="text" disabled="true">按钮</el-button>
        </el-row>
        <el-button-group>
            <el-button type="primary" class="el-icon-arrow-left">上一页</el-button>
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
    </div>
    <div class="mt20">
        <el-row>
            <el-button type="primary" :loading="true">加载中</el-button>
            <el-button size="large">按钮</el-button>
        </el-row>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            show2: false
        }
    }
}
</script>

<style>
#app {
    font-family: Helvetica, sans-serif;
    text-align: center;
}
.mt20 {
    margin-top: 20px;
}
.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}

.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}

.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
