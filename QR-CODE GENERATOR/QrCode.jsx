import { useState } from "react"

export const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading]= useState(false);
  const [qrData, setQrData]= useState("https://www.w3schools.com/react/react_usestate.asp");
  const [qrSize, setQrSize] = useState("150");

  async function generateQR(){
    // setImg("download.jpeg");
    setLoading(true);
    try {
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    } catch(error){
      console.error("Error generating QR CODE", error)
     } finally{
        setLoading(false);
      }
    }
  
    function downloadQR() {
      fetch(img)
        .then((response) => response.blob())
        .then((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "qrcode.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("Error downloading QR CODE", error);
        });
    }
  return (
    <div className="app-container">
      <h1>QR CODE Generator</h1>
      {loading && <p>Please Wait...</p>}
      {img && <img src={img} className="qrcode-image"/>}
      <div>
      <label htmlFor="dataInput" className="input-label">
        Data for QR CODE :
      </label>
        <input type="text"  value={qrData} id="dataInput"  placeholder="Enter Data for QR Code" onChange={(e)=>setQrData(e.target.value)}/>

        <label htmlFor="sizeInput" className="input-label">
        Image Size :
      </label>
        <input type="text" value={qrSize} id="sizeInput" placeholder="Enter image size" onChange={(e)=>setQrSize(e.target.value)}/>

        <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR CODE</button>
        <button className="download-button" onClick={downloadQR}>Download QR CODE</button>
      </div>
    </div>
  )
}
