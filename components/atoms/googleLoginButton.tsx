import GoogleLogin from "react-google-login";
import axios from "axios";

const responseGoogle = async (response: any) => {
  console.log("response", response);
  try {
    /* TODO : 開発環境と本番環境で適切なオリジンを指定する */
    const res = await axios.post("http://localhost:3000/", {
      withCredentials: true,
      token: response.tokenId,
    });
    /* TODO : ログイン後の画面遷移 */
    /* TODO : ログイン情報の保存 */
    console.log(res);
  } catch (error) {
    /* TODO : ログイン失敗のダイアログ表示 */
    console.log(error);
  }
};

const GoogleLoginButton = () => {
  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
