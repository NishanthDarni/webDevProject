import react from "react";
import { useState } from "react";
import axios from "axios";
import "../css/sell.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import laptop1 from "../css/images/laptop1.jpg"
import laptop2 from "../css/images/laptop2.jpg"
import laptop3 from "../css/images/laptop3.jpg"
import laptop4 from "../css/images/laptop4.jpg"
import laptop5 from "../css/images/laptop5.jpg"
import laptop6 from "../css/images/laptop6.jpg"
function Sell() {
  document.body.style.backgroundColor = "#ecf0f3";
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [processor, setProcessor] = useState("");
  const [ssd, setSSD] = useState("");
  const [hdd, setHDD] = useState("");
  const [ram, setRam] = useState("");
  const [os, setOs] = useState("");
  const [screen, setScreen] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [image4, setImage4] = useState();
  const [image5, setImage5] = useState();
  const [image6, setImage6] = useState();
  const [i, setI] = useState(0);
  const prev = () => {
    setI(i - 1);
  };
  const next = () => {
    setI(i + 1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name === "null" ||
      model.length === 0 ||
      description.length === 0 ||
      price.length === 0 ||
      ssd === "null" ||
      hdd === "null" ||
      processor === "null" ||
      ram === "null" ||
      os === "null" ||
      screen === "null" ||
      color === "null"
    ) {
      alert("Fill all fields");
      return;
    }
    if (window.sessionStorage.getItem("userID") == null) {
      alert("Login first to sell");
      return;
    }
    alert(image1['size'])
    alert(image2['size'])
    alert(image3['size'])
    alert(image4['size'])
    alert(image5['size'])
    alert(image6['size'])
    if(image1['size']>12500000 || image2['size']>12500000 || image3['size']>12500000 || image4['size']>12500000 || image5['size']>12500000 || image6['size']>12500000)
    {
      alert('Image size cannot exceed 12.5MB')
      return
    }
    const uri = "http://localhost:80/php-react/ad.php";
    let fdata = new FormData();
    fdata.append("name", name);
    fdata.append("model", model);
    fdata.append("processor", processor);
    fdata.append("ssd", ssd);
    fdata.append("hdd", hdd);
    fdata.append("ram", ram);
    fdata.append("os", os);
    fdata.append("screen", screen);
    fdata.append("color", color);
    fdata.append("description", description);
    fdata.append("price", price);
    fdata.append("image1", image1);
    fdata.append("image2", image2);
    fdata.append("image3", image3);
    fdata.append("image4", image4);
    fdata.append("image5", image5);
    fdata.append("image6", image6);
    fdata.append("userID", window.sessionStorage.getItem("userID"));
    axios
      .post(uri, fdata)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error.data);
      });
  };
  if (i === 0) {
    return (
      <>
        <Nav />
        <div>
          <div className="sell_title">
          Sell Your Laptop <h5>Do smart business</h5>
          </div>
          <div className="sell_container">
            <div className="legend">Details</div>
            <div className="lap_name flex-item">
              <h3>Laptop company*</h3>
              <div className="text_container">
                <select
                  name="Lap_name"
                  className="sell_input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                >
                  <option value="null">select your laptop</option>
                  <option value="Asus">Asus</option>
                  <option value="Dell">Dell</option>
                  <option value="HP">HP</option>
                  <option value="Lenova">Lenova</option>
                </select>
              </div>
            </div>
            <div className="lap_model flex-item">
              <h3>Laptop model*</h3>
              <div className="text_container">
                <input
                  type="text"
                  value={model}
                  placeholder="Enter laptop model"
                  className="sell_input"
                  onChange={(e) => setModel(e.target.value)}
                  name="Lap_model"
                  id=""
                />
              </div>
            </div>
            <div className="sell_button flex-item">
              <input
                type="submit"
                class="sell_prev"
                disabled="true"
                title="not found"
                value="prev"
                name="prev"
                onClick={prev}
              />
              <input
                type="submit"
                class="sell_next"
                value="next"
                name="next"
                onClick={next}
              />
            </div>
          </div>
        </div>
      </>
    );
  } else if (i === 1) {
    return (
      <div>
        <Nav />
        <h2 className="sell_title">
        Sell Your Laptop<h5>Do smart business</h5>
        </h2>
        <div className="sell_container">
          <div className="legend1">Features</div>
          <div className="flex-item">
            <h3>Processor*</h3>
            <select
              name="Lap_processor"
              className="sell_input"
              value={processor}
              onChange={(e) => setProcessor(e.target.value)}
            >
              <option value="null">select your processor</option>
              <option value="i3">i3</option>
              <option value="i5">i5</option>
              <option value="i7">i7</option>
              <option value="Ryzen 3">Ryzen 3</option>
              <option value="Ryzen 5">Ryzen 5</option>
              <option value="Ryzen 7">Ryzen 7</option>
            </select>
          </div>
          <div className="flex-item">
            <h3>SSD*</h3>
            <select
              name="Lap_ssd"
              value={ssd}
              className="sell_input"
              onChange={(e) => setSSD(e.target.value)}
            >
              <option value="null">select your ssd size</option>
              <option value="256gb">256GB</option>
              <option value="512gb">512GB</option>
              <option value="1tb">1TB</option>
            </select>
          </div>
          <div className="flex-item">
            <h3>HDD*</h3>
            <select
              name="Lap_hdd"
              value={hdd}
              className="sell_input"
              onChange={(e) => setHDD(e.target.value)}
            >
              <option value="null">select your hdd size</option>
              <option value="256gb">256GB</option>
              <option value="512gb">512GB</option>
              <option value="1tb">1TB</option>
            </select>
          </div>
          <div className="flex-item">
            <h3>RAM*</h3>
            <select
              name="Lap_ram"
              value={ram}
              className="sell_input"
              onChange={(e) => setRam(e.target.value)}
            >
              <option value="null">select your ram size</option>
              <option value="2gb">2GB</option>
              <option value="4gb">4GB</option>
              <option value="8gb">8GB</option>
              <option value="16gb">16GB</option>
            </select>
          </div>
          <div className="flex-item">
            <h3>OPERATING SYSTEM(OS)*</h3>
            <select
              name="Lap_os"
              value={os}
              className="sell_input"
              onChange={(e) => setOs(e.target.value)}
            >
              <option value="null">select your os</option>
              <option value="windows 7">windows 7</option>
              <option value="windows 10">windows 10</option>
              <option value="windows 11">windows 11</option>
              <option value="linux">linux</option>
              <option value="mac">mac</option>
            </select>
          </div>
          <div className="flex-item">
            <h3>Screen size(inches)</h3>
            <select
              name="Lap_screen"
              className="sell_input"
              value={screen}
              onChange={(e) => setScreen(e.target.value)}
            >
              <option value="null">select your screen size</option>
              <option value="13">13</option>
              <option value="15.6">15.6</option>
            </select>
          </div>
          <div className="flex-item">
            <h3>Color*</h3>
            <select
              name="Lap_color"
              className="sell_input"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="null">select your laptop color</option>
              <option value="black">black</option>
              <option value="white">white</option>
            </select>
          </div>
          <div className="flex-item">
            <input
              type="submit"
              class="sell_prev"
              value="prev"
              name="prev"
              onClick={prev}
            />
            <input
              type="submit"
              class="sell_next"
              value="next"
              name="next"
              onClick={next}
            />
          </div>
        </div>
      </div>
    );
  } else if (i === 2) {
    return (
      <div>
        <Nav />
        <h2 className="sell_title">
        Sell Your Laptop<h5>Do smart business</h5>
        </h2>
        <div className="sell_container">
          <div className="legend2">Details</div>
          <div className="lap_description flex-item">
            <h3> Ad description*</h3>
            <div className="text_container">
              <textarea
                rows="10"
                cols="25"
                placeholder="Enter description of laptop"
                className="sell_input"
                name="description"
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              <br />
            </div>
          </div>
          <div className="lap_price flex-item">
            <h3>Fix price*</h3>
            <div className="text_container">
              <input
                type="text"
                name="price"
                placeholder="Enter price of laptop"
                className="sell_input"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <br />
            </div>
          </div>
          <div className="flex-item">
            <input
              type="submit"
              class="sell_prev"
              value="prev"
              name="prev"
              onClick={prev}
            />
            <input
              type="submit"
              class="sell_next"
              value="next"
              name="next"
              onClick={next}
            />
          </div>
        </div>
      </div>
    );
  } else if (i === 3) {
    return (
      <div>
        <Nav />
        <h2 className="sell_title">
          Sell Your Laptop<h5>Do smart business</h5>
        </h2>
        <div className="sell_container">
          <div className="legend3">Images</div>
          <div className="lap_image flex-item">
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              id="selectedFile1"
              required
              onChange={(e) => setImage1(e.target.files[0])}
              accept=".png,.jpg,.jpeg"
            />
            <img
              src={laptop1}
              onClick={() => {
                document.getElementById("selectedFile1").click();
              }}
              style={{
                width:"80px"
              }}
            />
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              id="selectedFile2"
              required
              accept=".png,.jpg,.jpeg"
              onChange={(e) => setImage2(e.target.files[0])}
            />
            <img
              src={laptop2}
              onClick={() => {
                document.getElementById("selectedFile2").click();
              }}
              style={{
                width:"80px"
              }}
            />
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              id="selectedFile3"
              accept=".png,.jpg,.jpeg"
              required
              onChange={(e) => setImage3(e.target.files[0])}
            />
            <img
              src={laptop3}
              onClick={() => {
                document.getElementById("selectedFile3").click();
              }}
              style={{
                width:"80px"
              }}
            />
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              id="selectedFile4"
              accept=".png,.jpg,.jpeg"
              required
              onChange={(e) => setImage4(e.target.files[0])}
            />
            <img
              src={laptop4}
              onClick={() => {
                document.getElementById("selectedFile4").click();
              }}
              style={{
                width:"80px"
              }}
            />
            
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              id="selectedFile5"
              accept=".png,.jpg,.jpeg"
              required
              onChange={(e) => setImage5(e.target.files[0])}
            />
            <img
              src={laptop6}
              onClick={() => {
                document.getElementById("selectedFile5").click();
              }}
              style={{
                width:"80px"
              }}
            />
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              id="selectedFile6"
              accept=".png,.jpg,.jpeg"
              required
              onChange={(e) => setImage6(e.target.files[0])}
            />
            <span
              className=""
              onClick={() => {
                document.getElementById("selectedFile6").click();
              }}
            >
            Upload image taken using laptop
            </span>
          </div>
          <div className="flex-item">
            <input
              type="submit"
              class="sell_prev"
              value="prev"
              name="prev"
              onClick={prev}
            />
            <input
              type="submit"
              class="sell_next"
              value="submit"
              name="submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sell;
