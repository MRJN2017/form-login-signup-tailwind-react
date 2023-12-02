const loginFields = [
    {
        labelText: "NPP",
        labelFor: "npp",
        id: "npp",
        name: "npp",
        type: "text",
        autoComplete: "npp",
        isRequered: true,
        placeholder: "NPP",
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "currend-password",
        isRequered: true,
        placeholder: "Password",
    }


]

const signupFields = [
    {
        labelText: "Username",
        labelFor: "username",
        id: "username",
        name: "username",
        type: "text",
        autoComplete: "username",
        isRequered: true,
        placeholder: "Username",
    },
    {
        labelText: "NPP",
        labelFor: "npp",
        id: "npp",
        name: "npp",
        type: "text",
        autoComplete: "npp",
        isRequered: true,
        placeholder: "NPP",
    },
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequered: true,
        placeholder: "Email address",
    },
    {
        labelText: "Gender",
        labelFor: "gender",
        id: "gender",
        name: "gender",
        type: "select", // Gunakan tipe 'select' untuk dropdown
        isRequired: true,
        options: ["Male", "Female", "Other"], // Opsi pilihan gender
        placeholder: "Select Gender",
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password",
        type: "password",
        autoComplete: "current-password",
        isRequered: true,
        placeholder: "Password",
    },
    {
        labelText: "Confirm password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "confirm-password",
        type: "password",
        autoComplete: "confirm-password",
        isRequered: true,
        placeholder: "Confirm password",
    }
]

export { loginFields, signupFields }