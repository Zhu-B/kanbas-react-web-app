import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentControlButtons() {
  return (
    <div className="d-flex align-items-center ms-auto">
      <BsPlus className="fs-4 me-2" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}