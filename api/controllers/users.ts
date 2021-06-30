import { IUser } from "../types.ts";
import  users  from "../data/data.ts"; 

export const getUsers = ({ response } : { response:any}) => {
    response.body = users;
}

export const getUser = ({
    params,
    response,
  }: {
    params: {
      url: string;
    };
    response: any;
  }) => {
    const user = users.filter((user) => user.username === params.url);
    
    if (user.length) {
      response.status = 200;
      response.body = user[0];
      return;
    }
  
    response.status = 400;
    response.body = { msg: `Cannot find user ${params.url}` };
  };

export const addUser = async ({
    request,
    response,
}:{
    request : any;
    response: any;
}) => {
    const body = await request.body();
    const user: IUser = await body.value;
    users.push(user);

    response.body = {msg: "OK"};
    response.status = 200;
}

export const updateUser = async ({ 
    params,
    request,
    response 
} : { 
    params : { 
        url:string;
    };
    request: any;
    response: any;
}) => {
    const temp = users.filter((existingUser : any) => 
        existingUser.url === params.url
    );
    const body = await request.body();
    const { profession } : { profession:string } = await body.value;

    if(temp.length){
        temp[0].profession = profession;
        response.status = 200;
        response.body = { msg: "OK" };
        return
    }
}

