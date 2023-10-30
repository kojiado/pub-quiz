import Button from "../ui/Button"
import Input from "../ui/Input"
import { trashIcon } from "@/utils/icons"

const NewQuestion = ({questionNum, question, answer, onQuestionChange, onAnswerChange, deleteQuestion, key}) => {
  return (
    <div key={key} className='flex flex-col gap-[20px] p-[20px] rounded-[20px] border-[1px] border-solid border-primary_variant_2 bg-primary_variant_dark w-full'>
      <div className='flex justify-between w-full'>
        <h3 className='text-white text-[24px] font-semibold'>#{questionNum}</h3>
        <Button
          style="secondary"
          label="Obriši pitanje"
          icon={trashIcon}
          miniButton={true}
          onClickFunction={deleteQuestion}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-[20px]">
        <Input
          type="text"
          label="Pitanje"
          placeholder="Unesi pitanje.."
          textarea={true}
          additionalClass="w-full question-title-input"
          value={question}
          onChange={(e) => onQuestionChange(e.target.value)}
        />
        <Input
          type="text"
          label="Odgovor"
          placeholder="Unesi odgovor.."
          textarea={true}
          additionalClass="w-full answer-title-input"
          value={answer}
          onChange={(e) => onAnswerChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default NewQuestion