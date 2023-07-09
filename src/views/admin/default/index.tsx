import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "components/widget/Widget";

const Dashboard = () => {
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Teachers"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Students"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Subjects"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Events"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Batches"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Test Papers"}
          subtitle={"$2433"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Orders"}
          subtitle={"$2433"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Open Troubles"}
          subtitle={"$2433"}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
      </div>
    </div>
  );
};

export default Dashboard;
