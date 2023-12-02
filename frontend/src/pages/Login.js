import Header from "../components/Header"
import Login from "../components/Login"

export default function LoginPage() {
    return (
        <>
            <Header
                heading2="RS Stella Maris Makassar"
                heading="Silakan Login Menggunakan NPP"
                paragraph="Belum memiliki akun? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login />

        </>
    )
}

