import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const LineCharts = () => {
  const marks = [
    { id: 1, name: "Alice", chemistry: 78, math: 85, physics: 92 },
    { id: 2, name: "Bob", chemistry: 88, math: 90, physics: 81 },
    { id: 3, name: "Charlie", chemistry: 69, math: 76, physics: 85 },
    { id: 4, name: "David", chemistry: 92, math: 89, physics: 90 },
    { id: 5, name: "Eva", chemistry: 84, math: 94, physics: 78 },
    { id: 6, name: "Frank", chemistry: 73, math: 82, physics: 88 },
    { id: 7, name: "Grace", chemistry: 91, math: 87, physics: 80 },
    { id: 8, name: "Henry", chemistry: 86, math: 78, physics: 89 },
    { id: 9, name: "Ivy", chemistry: 77, math: 91, physics: 83 },
    { id: 10, name: "Jack", chemistry: 85, math: 79, physics: 76 },
  ];

  return (
    <div className="mt-12 bg-slate-200 mx-auto">
    <BarChart width={1000} height={400} data={marks}>
    {/* <Line dataKey="math"></Line>
    <Line dataKey="chemistry"></Line>
    <Line dataKey="physics"></Line> */}
    <Bar dataKey={'math'}></Bar>
    <Bar dataKey={'chemistry'}></Bar>
    <Bar dataKey={'physics'}></Bar>
    <XAxis dataKey="name"></XAxis>
    <YAxis></YAxis>
    <Tooltip></Tooltip>

    </BarChart>
  </div>
  )
};

export default LineCharts;
