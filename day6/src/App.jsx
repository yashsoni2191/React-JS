import { useState } from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";

function App() {
  let [check, setcheck] = useState("done");
  let [Username, setusername] = useState("");
  let [email, setemail] = useState("");
  let [Password, setpassword] = useState("");
  let [loginEmail, setloginEmail] = useState([""]);
  let [loginPassword, setloginPassword] = useState([""]);
  let [arr, setarr] = useState([]);

  // let [op, setop] = useState([]);

  const handleClick = () => {
    let obj = {
      Username,
      email,
      Password,
    };

    setarr([...arr, obj]);
    console.log(arr);
    alert("Signup succesfull");

    // setop([...op, op.length + 1]);

    const handleLogin = () => {
      let a = arr.filter((el) => {
        if (el.email === loginEmail && el.Password === loginPassword) {
          alert("Login Succesfull");
        }
      });
      if (a.length > 0) {
        alert("Login Succesfull");
      } else {
        alert("Invalid Email or Password");
      }
    };

    return (
      <>
        {check == "done" ? (
          <div>
            {" "}
            <Header />
            <div className="login">
              <div className="logA">
                <h1>Login</h1>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  alt=""
                />
              </div>
              <div className="logB">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  onChange={(email) => {setloginEmail (email.target.value)}}
                />
                <input
                  type="text"
                  placeholder="Enter Your Password"
                  onChange={(pass) => {
                    setloginPassword (pass.target.value)
                  }}
                />
                <p>
                  By continuing, you agree to Flipkart's{" "}
                  <span className="text-[#2874F0]">Terms of Use</span> and{" "}
                  <span className="text-[#2874F0]">Privacy Policy.</span>
                </p>
                <button className="submit" onClick={handleLogin}>
                  Login
                </button>
                <br />
                <button className="loginbutton" onClick={() => setcheck("ok")}>
                  New to Flipkart? Create an account
                </button>
              </div>{" "}
            </div>{" "}
            <Footer />
          </div>
        ) : (
          <>
            {" "}
            <Header />
            <div className="signup relative ">
              <div className="signA">
                <h1>Looks like you're new here!</h1>
                <p>Sign up with your mobile number to get started</p>
                <img
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  alt=""
                />
              </div>

              <div className="signB">
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  onChange={(e) => setusername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <p>
                  By continuing, you agree to Flipkart's{" "}
                  <span className="text-[#2874F0]">Terms of Use</span> and{" "}
                  <span className="text-[#2874F0]">Privacy Policy.</span>
                </p>
                <button className="submit" onClick={handleClick}>
                  COUNTINUE
                </button>

                <br />

                <br />
                <button
                  className="signupbutton "
                  onClick={() => setcheck("done")}
                >
                  Existing User? log in
                </button>
              </div>
            </div>
            {arr.length > 0 ? (
              <div className="show1  w-[250px] h-[auto]  right-[0] top-[20%] absolute bg-[] mb-[100px]">
                {arr.map((e, ind) => (
                  <div className="coco">
                    {" "}
                    <h3 className="num"> {ind} </h3>{" "}
                    <p>
                      {" "}
                      Username: {e.Username} <br /> Email: {e.email} <br />{" "}
                      Password: {e.Password} <br />
                      <br />
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            <Footer />{" "}
          </>
        )}
      </>
    );
  };
}
export default App;
