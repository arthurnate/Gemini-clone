import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/context'

const Main = () => {
  
  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)
  
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini 5.0</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className='main-container'>

        {!showResult ?
        <>
        <div className='greet'>
            <p><span>Hello, Sire.</span></p>
            <p>How do i help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Facts about the Effiel Tower</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Know what happend today</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Weather forecast of your location</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Stocks and growth</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        </> : 
        <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.gemini_icon} alt="" />
              {loading? <div className='loader'>
                <hr />
                <hr />
                <hr />
              </div> :
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
          </div>
        }

        
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} placeholder='Enter a prompt here' name="" id="" />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" /> : null}
                </div>
            </div>
            <p className='bottom-info'>
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy is protected
                </p>
        </div>
      </div>
    </div>
  )
}

export default Main
