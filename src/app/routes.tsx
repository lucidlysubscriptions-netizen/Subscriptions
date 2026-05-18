import { createBrowserRouter, Outlet } from "react-router";
import HomeScreen from "./components/HomeScreen";
import ChoosePlanScreen from "./components/ChoosePlanScreen";
import MakeDepositScreen from "./components/MakeDepositScreen";
import DashboardScreen from "./components/DashboardScreen";
import WithdrawScreen from "./components/WithdrawScreen";
import WithdrawalCompleteScreen from "./components/WithdrawalCompleteScreen";

function PageLayout() {
  return (
    <div className="w-screen h-screen overflow-auto bg-[#f4f0ff]">
      <div className="relative" style={{ width: "1512px", height: "900px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    Component: PageLayout,
    children: [
      { index: true, Component: HomeScreen },
      { path: "choose-plan", Component: ChoosePlanScreen },
      { path: "make-deposit", Component: MakeDepositScreen },
      { path: "dashboard", Component: DashboardScreen },
      { path: "withdraw", Component: WithdrawScreen },
      { path: "withdrawal-complete", Component: WithdrawalCompleteScreen },
    ],
  },
]);