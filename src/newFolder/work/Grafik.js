import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Html5',
    Html: 1000,
  },
  {
    name: 'Css',
    Css: 967,
  },
  {
    name: 'Java sc',
    Java_sc: 1098
  },
  {
    name: 'React',
    React: 1200
  },
  {
    name: 'Python',
    Python: 1108
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

  render() {
    return (
      <ResponsiveContainer width="50%">
        <ComposedChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 100,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#242424" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Html" barSize={50} fill="red" />
          <Bar dataKey="Css" barSize={50} fill="blue" />
          <Bar dataKey="Java_sc" barSize={50} fill="yellow" />
          <Bar dataKey="React" barSize={50} fill="cyan" />
          <Bar dataKey="Python" barSize={50} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
