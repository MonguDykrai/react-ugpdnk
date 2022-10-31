import React from 'react';
import { Table, Space } from 'antd';
import moment from 'moment'

const DownloadHistory = () => {
  return (
    <Table
      columns={[
        {
          title: '序号',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: '统计日期',
          dataIndex: 'range',
          key: 'range',
        },
        {
          title: '期数',
          dataIndex: 'periods',
          key: 'periods',
          render: (_, record) => {
            return `第（${_[0]}）${_[1]}期`;
          },
          sorter: (a, b) => a.periods.join('') - b.periods.join(''),
        },
        {
          title: '下载日期',
          dataIndex: 'date',
          key: 'date',
          render: (_, record) => {
            return moment(_).format("YYYY-MM-DD HH:mm:ss");
          },
          sorter: (a, b) => a.date - b.date,
        },
      ]}
      dataSource={[
        {
          key: '1',
          range: '2022-10-03~2022-10-09',
          periods: [2022, 40],
          status: 'success',
          date: new Date
        },
        {
          key: '2',
          range: '2022-09-26~2022-10-03',
          periods: [2022, 39],
          status: 'failed',
          date: new Date
        },
      ]}
    />
  );
};

export default DownloadHistory;
