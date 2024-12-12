import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { StudentAdd } from "../generated/StudentInfo/StudentInfo"

export function createStudentAddEvent(param0: ethereum.Tuple): StudentAdd {
  let studentAddEvent = changetype<StudentAdd>(newMockEvent())

  studentAddEvent.parameters = new Array()

  studentAddEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromTuple(param0))
  )

  return studentAddEvent
}
