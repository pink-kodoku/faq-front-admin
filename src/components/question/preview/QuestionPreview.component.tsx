import {useState} from "react";


const QuestionPreviewComponent = () => {

  const [data, setData] = useState<string | null>(localStorage.getItem('1'))
  return (
    <div dangerouslySetInnerHTML={{ __html: data! }}>
    </div>
  )
}

export default QuestionPreviewComponent
