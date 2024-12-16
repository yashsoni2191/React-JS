import { useState } from "react";
import "./App.css";
import Show from "../../form_validation/src/Components/Show";

function App() {
  const [fne, setfne] = useState(false);
  const [lne, setlne] = useState(false);
  const [ee, setee] = useState(false);
  const [phe, setphe] = useState(false);
  const [hob, sethob] = useState(false);

  const [arr, setArr] = useState([]);
  const [obj, setobj] = useState([])
  const [val, setVal] = useState({
    fn: "",
    ln: "",
    em: "",
    pn: "",
    hb: [""],
  });


  function data_i(e) {
    let { name, value } = e.target;
    setVal({ ...val, [name]: value });
  }

  function handle(t) {
    let { name, value, dataset } = t.target;

    if (name == "hobby") {
      let hob = [...obj.hobby];
      hob[dataset.index] = value;

      setobj({ ...obj, hobby: hob });
    } else {
      setobj({ ...obj, [name]: value });
    }
  }

  function sub(e) {
    e.preventDefault();

    setArr({ ...arr }, val);
    if (
      fne == false &&
      lne == false &&
      ee == false &&
      phe == false &&
      hob == false
    ) {
      alert("Succesfully registered");
    } else {
      alert("Invalid Credentials");
    }

    console.log(arr);
  }

  function blur(e) {
    let { name, value } = e.target;
    if (name == "fn" && value.length < 2) {
      setfne(true);
    }
    if (name == "ln" && value.length < 3) {
      setlne(true);
    }
    if (name == "em" && value.length < 10) {
      setee(true);
    }
    if (name == "pn" && value.length < 5) {
      setphe(true);
    }
    if (name == "hb" && value.length < 2) {
      sethob(true);
    }
  }

  function focus(e) {
    let { name, value } = e.target;
    if (name == "fn") {
      setfne(false);
    }
    if (name == "ln") {
      setlne(false);
    }
    if (name == "em") {
      setee(false);
    }
    if (name == "pn") {
      setphe(false);
    }
    if (name == "hb") {
      sethob(false);
    }
  }

  const handlechange = (e) => {
    const { name, value, dataset } = e.target;
    if (name === "hb") {
        let arr = [...val.hb];
        arr[dataset.index] = value;
        setVal({ ...val, hb: arr });
    } else {
        setVal({ ...val, [name]: value });
    }
};

const handleadd = () => {
    setVal({ ...val, hb: [...val.hb, ""] });
};
  return (
    <>
      <form action="" onSubmit={sub}>
        <h1>Register</h1>
        <input
          type="text"
          name="fn"
          onBlur={blur}
          onFocus={focus}
          placeholder="First Name"
          onChange={data_i}
        />
        <br />
        <input
          type="text"
          name="ln"
          onBlur={blur}
          onFocus={focus}
          placeholder="Last Name"
          onChange={data_i}
        />
        <br />
        <input
          type="text"
          name="em"
          onBlur={blur}
          onFocus={focus}
          placeholder="Email"
          onChange={data_i}
        />
        <br />
        <input
          type="text"
          name="pn"
          onBlur={blur}
          onFocus={focus}
          placeholder="Phone Number"
          onChange={data_i}
        />
        <br />
        <input
          type="text"
          name="hb"
          onBlur={blur}
          onFocus={focus}
          placeholder="Hobbies"
          onChange={handlechange}
        />{" "}
        <input value="+" type="button" onClick={handleadd} />
        <br />
        {val.hb.map((e, index) => {
          return (
            <>
              <input
                type="text"
                name="hb"
                onBlur={blur}
                onFocus={focus}
                placeholder="Hobbies"
                onChange={data_i}
                data-index={index}
              />
              <br />
            </>
          );
        })}
        <input type="submit" value="Submit" onChange={handle} />
      </form>

      <Show p_value={arr} />
    </>
  );
}

export default App;
