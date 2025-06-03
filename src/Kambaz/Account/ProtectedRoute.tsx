import { useSelector } from "react-redux";
import { Navigate, useMatch } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }
  const match = useMatch("/Courses/:cid/*");
  if (match) {
    const cid = match.params.cid!;
    const enrolled = useSelector((s: any) =>
      s.enrollmentsReducer.enrollments.some(
        (e: any) => e.user === currentUser._id && e.course === cid
      )
    );
    if (!enrolled) {
      return <Navigate to="/Kambaz/Dashboard" />;
    }
  }
  return children;
}