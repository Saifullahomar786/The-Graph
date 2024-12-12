import { StudentAdd as StudentAddEvent } from "../generated/StudentInfo/StudentInfo"
import { StudentAdd } from "../generated/schema"

export function handleStudentAdd(event: StudentAddEvent): void {
  let entity = new StudentAdd(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param0_name = event.params.param0.name
  entity.param0_studentAddress = event.params.param0.studentAddress
  entity.param0_rollNumber = event.params.param0.rollNumber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
