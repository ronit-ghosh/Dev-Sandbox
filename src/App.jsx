import { useEffect, useState } from "react"
import EditorPane from "./components/EditorPane"
import "./App.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


const App = () => {

  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState(``)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>${html}</html>
        <style>${css}</style>
        <script>${js}</script>`)
    }, 250);
    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="flex overflow-hidden h-screen">
        <div className="editor-panes w-[25%] overflow-y-scroll">
          <EditorPane icon={<FaHtml5 fontSize={22} color="#dd4b25" />} language='xml' paneName='HTML' value={html} onChange={setHtml} />
          <EditorPane icon={<FaCss3Alt fontSize={22} color="#254bdd" />} language='css' paneName='CSS' value={css} onChange={setCss} />
          <EditorPane icon={<IoLogoJavascript fontSize={22} color="#efd81d" />} language='javascript' paneName='JS' value={js} onChange={setJs} />
        </div>
        <div className="w-[75%]">
          <iframe frameBorder="0" title="output" sandbox="allow-scripts" width={"100%"} height={"100%"} srcDoc={srcDoc} ></iframe>
        </div>
      </div>
    </>
  )
}

export default App
