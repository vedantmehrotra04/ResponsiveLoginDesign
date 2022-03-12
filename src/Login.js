import React, {useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => {
        fetch("https://reqres.in/api/login",{
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => alert(res.status))
        .catch(err => alert(err.status))
    }
    return (
        <div className='form1'>
            <h2>Welcome Back</h2>
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Email Address"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          onChange={(e)=> setEmail(e.target.value)}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          onChange={(e)=> setPassword(e.target.value)}
        >
          <Input.Password />
        </Form.Item>
  
        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
         
        </Form.Item> */}
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          style={{flexDirection:"row-reverse"}}
        >
          <Button type="primary" htmlType="submit" style={{backgroundColor:"rgb(21, 77, 117)", width:"100%"}} onClick={handleLogin}>
           Login
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
}

export default Login;