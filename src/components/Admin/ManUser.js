import React, { Component } from 'react'
import { Header,Table ,Image,Menu,Icon,Button,Form,Input} from 'semantic-ui-react';
import axios from "axios";
import "../../assets/css/ManUser.css"



class ManUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            data:[],//每次从数据库获取的数据
            doData:null,//当前要操作的数据
            doFlag:0,//当前操作的类型 0=无操作，1=添加，2=更新，3=删除
            searchStr:""
         };
    }
    componentDidMount = ()=>{
      this.updateAllData();
        
    }

    updateAllData = ()=>{
      axios
        .post("/getData/userData")
        .then(res=>{
         // console.log("res.data",res.data);
          this.setState({
            data:res.data
          }) 
        })
        .catch(err=>{
            console.log(err);
        });

    }

    addNewUser(){
      this.setState({
        doData:{
          userName:"",
          userEmail:"",
          type:0,
          sex:0,
          phone:"",
          address:"",
        },//使对话框有内容
        doFlag:2 //按钮决定对话框的
      });
      document.getElementById("adminUpdateUserDialog").showModal();
    }

    deleteUser = (oldData) => {
      this.setState({
        doData:oldData,
        doFlag:3
      });
      document.getElementById("adminUpdateUserDialog").showModal();
    }

    updateUser = (oldData) => {
      this.setState({
        doData:oldData,
        doFlag:1
      });
      document.getElementById("adminUpdateUserDialog").showModal();
    }

    setSearchStr = (str)=>{
        this.setState({
          searchStr:str
        })
    }
    searchUser = () => {
      const {searchStr} = this.state;
      //console.log("searchStr",searchStr);
      axios
      .post("/searchData/userData",{
        searchStr : searchStr
      })
      .then((res)=>{
        res.data.flag?alert("查找成功"):alert("查找失败");
        //console.log(res.data.userData);
        this.setState({
          data:res.data.userData
        })
      })
      .catch(err=>{
        alert(`查找失败：${err}`);
      })
    }
    render() {
        const taoXiang = "https://react.semantic-ui.com/images/avatar/small/matthew.png";

        const updateDia=(data)=>{//传入需要旧处理数据渲染对话框的内容
          //data为传入的旧数据
          let newData = data;//newData复制一份,会修改
          const doButton = (doneData,flag)=>{//Flag确定按钮操作,并传入处理过后的数据
            let btn = <div></div>;
            switch(flag){
              case 1://update
                 btn = (
                <Button  fluid color="blue" onClick={()=>{
                  document.getElementById("adminUpdateUserDialog").close();
                  //console.log("更新后的数据",doneData);
                  axios
                  .post("/updateData/userData",doneData)
                  .then(res=>{
                    //console.log(res.data);
                    res.data.flag?alert("修改成功"):alert("修改失败");
                    this.setState({}) 
                  })
                  .catch(err=>{
                      console.log("更新失败",err);
                  })
                  this.setState({
                    doData:null,
                    doFlag:0
                  });
                  }
              }>确认更新</Button>)
                break;

              case 2://add
                btn =
                (<Button fluid color="blue" onClick={()=>{
                  document.getElementById("adminUpdateUserDialog").close();
                  console.log("添加的数据",doneData);
                  axios
                  .post("/addData/userData",{
                    ...doneData,
                    userPwd:"123456a?"
                  })

                  .then(res=>{
                    //console.log(res.data);
                    switch (res.data.flag){
                      case 1:
                        alert("添加成功！");
                        break;
                      case 2:
                        alert("该用户邮箱已存在！");
                        break;
                      default:
                        break;
                    }
                     
                  })
                  .catch(err=>{
                      console.log("添加失败",err);
                  })
                  setTimeout(this.updateAllData,3000) ;
                  this.setState({
                    doData:null,
                    doFlag:0
                  });
                  console.log("添加后置空",this.state.doData);
                }
            }>确认添加</Button>)
              break;

            case 3:
              btn = 
              (<Button fluid color="red" onClick={()=>{
                document.getElementById("adminUpdateUserDialog").close();
                  //console.log("更新后的数据",doneData);
                  axios
                  .post("/deleteData/userData",doneData)
                  .then(res=>{
                    //console.log(res.data);
                    res.data.flag?alert("删除成功"):alert("删除失败");
                    this.setState({}) 
                  })
                  .catch(err=>{
                      console.log("删除失败",err);
                  })
                  setTimeout(this.updateAllData,2000) ;
                  this.setState({
                    doData:null,
                    doFlag:0
                  });
                  }

              }>确认删除</Button>)
              break;
            default:
              break;
          }
          return btn;
          }
          return (
          <div>
            <Form>
                <Form.Field control={Input} label='用户名' defaultValue={data.userName} onChange={(e)=>newData.userName=e.target.value}/>
                <Form.Field>
                  <label>性别</label>
                  <select defaultValue={data.sex} onChange={(e)=>newData.sex=e.target.value}>
                    <option value="0">其他</option>
                    <option value="1">男</option>
                    <option value="2">女</option>
                  </select>
                </Form.Field>
                <Form.Field control={Input} label='邮箱' defaultValue={data.userEmail} onChange={(e)=>newData.userEmail=e.target.value}/>
                <Form.Field control={Input} label='电话' defaultValue={data.phone} onChange={(e)=>newData.phone=e.target.value}/>
                <Form.Field control={Input} label='地址' defaultValue={data.address} onChange={(e)=>newData.address=e.target.value}/>
                <Form.Field>
                  <label>会员等级</label>
                  <select defaultValue={data.type} onChange={(e)=>newData.type=e.target.value}>
                    <option value="0">初级</option>
                    <option value="1">中级</option>
                    <option value="2">高级</option>
                  </select>
                </Form.Field>
                <br/>
                <Form.Field >
                  {            
                    doButton(newData,this.state.doFlag)            
                  }
                </Form.Field>
            </Form>
            
         </div>
          )
        };
          
        return (
            <div className="manUser">
                 <dialog id="adminUpdateUserDialog" >
                    {
                      this.state.doData ? updateDia(this.state.doData) : <div></div>
                    }
                 </dialog>
                 <Table celled>
                      <Table.Header colSpan='6'>
                        <Table.Row>
                          <Table.Cell colSpan="6">
                                <Input type="text" fluid placeholder='请输入查询内容...' onChange={(e)=>this.setSearchStr(e.target.value)}>
                                  <input/>
                                  <Button onClick={()=>this.searchUser()}>搜索</Button>
                                </Input>
                          </Table.Cell>
                          <Table.Cell>
                          <Button onClick={()=>this.addNewUser()}>添加用户</Button>
                            </Table.Cell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>用户</Table.HeaderCell>
                          <Table.HeaderCell>邮箱</Table.HeaderCell>
                          <Table.HeaderCell>电话</Table.HeaderCell>
                          <Table.HeaderCell>地址</Table.HeaderCell>
                          <Table.HeaderCell>性别</Table.HeaderCell>
                          <Table.HeaderCell colSpan="2">操作</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        
                        {
                          this.state.data.map((item,key)=>{
                            return(
                              
                              <Table.Row key={key}>
                                <Table.Cell>
                                  <Header as='h4' image>
                                    <Image src={taoXiang} alt="" rounded size='mini' />
                                    <Header.Content>
                                      {item.userName}
                                      <Header.Subheader>{["初级","中级","高级"][item.type]}会员</Header.Subheader>
                                    </Header.Content>
                                  </Header>
                                </Table.Cell>
                                <Table.Cell>{item.userEmail}</Table.Cell>
                                <Table.Cell>{item.phone}</Table.Cell>
                                <Table.Cell>{item.address}</Table.Cell>
                                <Table.Cell>{["其他","男","女"][item.sex]}</Table.Cell>
                                <Table.Cell>
                                  <Button onClick={()=>{this.updateUser(item)}}>修改</Button>
                                </Table.Cell>
                                <Table.Cell>
                                  <Button onClick={()=>{this.deleteUser(item)}}>删除</Button>
                                </Table.Cell>
                              </Table.Row>
                            )
                          })
                        }
                      </Table.Body>

                      <Table.Footer>
                        <Table.Row>
                          <Table.HeaderCell colSpan='7'>
                            <Menu floated='right' pagination>
                              <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                              </Menu.Item>
                              <Menu.Item as='a'>1</Menu.Item>
                              <Menu.Item as='a'>2</Menu.Item>
                              <Menu.Item as='a'>3</Menu.Item>
                              <Menu.Item as='a'>4</Menu.Item>
                              <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                              </Menu.Item>
                            </Menu>
                          </Table.HeaderCell>
                        </Table.Row>
                      </Table.Footer>
                  </Table>
            </div>
        );
    }
}

export default ManUser;