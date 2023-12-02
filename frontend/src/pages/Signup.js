import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading2="Rs Stella Maris Makassar"
              heading="Registrasi Untuk Membuat Akun"
              paragraph="Sudah memiliki akun? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}