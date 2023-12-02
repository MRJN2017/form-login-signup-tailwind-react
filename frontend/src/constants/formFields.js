const loginFields = [
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequered:true,
        placeholder:"Emai",
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"currend-password",
        isRequered:true,
        placeholder:"Password",
    }
    
    
]

const signupFields = [
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequered:true,
        placeholder:"Username",
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequered:true,
        placeholder:"Email address",
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequered:true,
        placeholder:"Password",
    },
    {
        labelText:"Confirm password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequered:true,
        placeholder:"Confirm password",
    }
]

export {loginFields, signupFields}