
import axios  from "../../axios/axios";
import { GoogleLogin } from "@react-oauth/google";
const GoogleAuth = () => {
  const responseGoogle = (response) => {
    // Handle the response from Google OAuth, e.g., send it to your Laravel backend.
    if (response.profileObj) {
      const { googleId, email, name, imageUrl } = response.profileObj;

      // Send this data to your Laravel backend using Axios.
      axios
        .post("/api/google-login", {
          googleId,
          email,
          name,
          imageUrl,
        })
        .then((response) => {
          // Handle the response from the Laravel backend, e.g., show a success message.
          console.log("Login successful", response.data);
        })
        .catch((error) => {
          // Handle errors, e.g., show an error message.
          console.error("Error logging in", error);
        });
    }
  };
  return (
    <div>
      <GoogleLogin
        clientId="210734958461-0baab4ickaoih8kd89q3406hr7963o9o.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleAuth;