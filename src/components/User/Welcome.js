import React, { Component } from 'react'
import {Segment,Header,Divider} from "semantic-ui-react"
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="userWelcomeBox">
                <Header as="h1" textAlign='center'>
                    欢迎登录215GM健身俱乐部
                    <p>用户操作指南如下</p>
                </Header>
                <Segment>
                    <Header as="h2" textAlign='center'>修改用户信息</Header>
                    <Divider/>
                    <div className="userWelcomeContent">
                        {"\u25BA"}点击左侧菜单栏中选项<strong>修改资料</strong>跳转到修改用户信息详情页面，
                        用户在详情页面修改自己的个人资料，确认修改完毕后，点击<strong>确认修改</strong>按钮
                        即可完成个人资料修改
                    </div>
                </Segment>
                <Segment>
                    <Header as="h2" textAlign='center'>课程相关操作</Header>
                    <Divider/>
                    <div className="userWelcomeContent">
                        {"\u25BA"}点击左侧菜单栏中选项<strong>购买课程</strong>跳转到课程购买情况详情页面，
                        页面初始化会显示当前登录会员的购课情况；<br/><br/>
                        {"\u25BA"}会员可以在页面上方的<strong>搜索框</strong>中输入自己想要购买的课程的关键字，再点击
                        旁边的<strong>搜索按钮</strong>就能查找到相关的课程，再点击对应课程信息栏里的
                        <strong>购买</strong>按钮，在弹出的对话框中扫码支付就能完成购课；<br/><br/>
                        {"\u25BA"}用户在完成购课或课程信息查询后，可以点击右上角<strong>我的课程</strong>按钮
                        查看自己已购课程；
                    </div>
                </Segment>
                <Segment>
                    <Header as="h2" textAlign='center'>预定健身房相关操作</Header>
                    <Divider/>
                    <div className="userWelcomeContent">
                        {"\u25BA"}点击左侧菜单栏中选项<strong>预定健身房</strong>跳转到健身房情况详情页面，
                        页面初始化会展示所有健身中心的信息；<br/><br/>
                        {"\u25BA"}会员可以在页面上方的<strong>搜索框</strong>中输入自己想要预定健身房的关键字，再点击
                        旁边的<strong>搜索按钮</strong>就能查找到相关的健身房，再点击对应健身房信息栏里的
                        <strong>预定</strong>按钮，在弹出的对话框中扫码支付就能完成预定；<br/><br/>
                        {"\u25BA"}用户在完成预定或健身房信息查询后，可以点击右上角<strong>预定记录</strong>按钮
                        查看的预定信息及预定历史；
                    </div>
                </Segment>
                <Segment>
                    <Header as="h2" textAlign='center'>购买会员操作</Header>
                    <Divider/>
                    <div className="userWelcomeContent">
                        {"\u25BA"}点击左侧菜单栏中选项<strong>购买会员</strong>跳转购买会员情况详情页面，
                        页面会展示不同等级的会员的具体情况；<br/><br/>
                        {"\u25BA"}会员可以点击页面上的<strong>升级会员等级</strong>按钮，
                        在弹出的对话框中扫码支付就能完成会员的购买，完成升级；<br/><br/>
                        {"\u25BA"}用户可以点击页面上的<strong>会员购买记录</strong>按钮
                        查看的自己的会员购买记录；
                    </div>
                </Segment>
                
            </div>
        );
    }
}

export default Welcome;