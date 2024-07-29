import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/css/css"
import "codemirror/mode/javascript/javascript"
import { Controlled } from "react-codemirror2"
import { FiMaximize } from "react-icons/fi";
import { FiMinimize } from "react-icons/fi";


const EditorPane = (props) => {

    const { icon, paneName, language, value, onChange } = props

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className="">
            <div className="h-8 px-1 flex items-center bg-[#0B2029] text-gray-200">
                <span className="mr-2">{icon}</span>
                <span className="paneName">{paneName}</span>
                <button className="ml-auto"><FiMaximize fontSize={20}/></button>
            </div>
            <div className="editor">
                <Controlled className=""
                    onBeforeChange={handleChange}
                    value={value}
                    options={{
                        lineWrapping: true,
                        lineNumbers: true,
                        lint: true,
                        mode: language,
                        theme: 'material'
                    }} />
            </div>
        </div>
    )
}

export default EditorPane
