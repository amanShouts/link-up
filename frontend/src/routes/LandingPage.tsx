import App from "@/App";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div>Landing Page</div>
      <App />
      <div className="flex justify-around mt-2">
        <Button>
          <Link to="mentor">MentorList</Link>
        </Button>
      </div>
    </div>
  );
}
